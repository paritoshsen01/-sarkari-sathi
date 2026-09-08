import Fuse from 'fuse.js';
import { prototypeSchemes, type Scheme } from '../data/schemes';

// Extract state/district logic
const STATES = ['madhya pradesh', 'maharashtra', 'uttar pradesh', 'bihar', 'rajasthan', 'gujarat', 'karnataka', 'tamil nadu'];
const DISTRICTS = ['sehore', 'bhopal', 'indore', 'pune', 'mumbai', 'lucknow', 'patna'];

function extractLocation(text: string) {
  const lowerText = text.toLowerCase();
  let state = '';
  let district = '';

  for (const s of STATES) {
    if (lowerText.includes(s)) state = s;
  }
  for (const d of DISTRICTS) {
    if (lowerText.includes(d)) district = d;
  }
  return { state, district };
}

// Enhanced dictionary for schemes to catch synonyms and common phrases
const enhancedSchemes = prototypeSchemes.map(scheme => {
  let extraTags: string[] = [];
  
  if (scheme.id === 'pm-kisan') extraTags = ['kheti', 'krishi', 'cash', 'transfer', 'rupee', 'kisan', 'zamin', 'land', 'crop'];
  if (scheme.id === 'pm-jay') extraTags = ['doctor', 'bimar', 'hospital', 'dawai', 'medicine', 'ill', 'sick', 'operation', 'surgery'];
  if (scheme.id === 'scholarship') extraTags = ['padhai', 'fees', 'school', 'college', 'student', 'vidyarthi', 'university', 'bhattta'];
  if (scheme.id === 'pm-ujjwala') extraTags = ['chulha', 'indhan', 'cylinder', 'cooking', 'rasoi', 'aag', 'smoke'];
  if (scheme.id === 'pm-ajay') extraTags = ['sc', 'dalit', 'rozgar', 'skill', 'business', 'training', 'loan'];
  if (scheme.id === 'jal-jeevan') extraTags = ['tap', 'nal', 'peena', 'pyas', 'pipeline', 'pani', 'liquid', 'drink'];
  if (scheme.id === 'saubhagya') extraTags = ['light', 'current', 'bulb', 'wire', 'bijli', 'power', 'connection', 'meter'];
  if (scheme.id === 'pm-gkay') extraTags = ['chawal', 'gehu', 'rice', 'wheat', 'dal', 'bhookh', 'khana', 'muft', 'free ration'];
  if (scheme.id === 'pm-awas') extraTags = ['makan', 'chhat', 'roof', 'building', 'niwas', 'jhopdi', 'pakka'];
  if (scheme.id === 'pmmvy') extraTags = ['pregnant', 'child', 'delivery', 'maternity', 'bachha', 'jacha'];
  if (scheme.id === 'pmbjp') extraTags = ['chemist', 'store', 'pill', 'goli', 'sasti', 'sasta', 'clinic'];

  // Add location tags so that "sehore" directly matches "sehore krishi sahayata"
  if (scheme.locationName) {
    extraTags.push(scheme.locationName.toLowerCase());
  }

  return {
    ...scheme,
    searchableText: [...scheme.tags, ...extraTags, scheme.name, scheme.category, scheme.benefit].join(' ')
  };
});

// Configure Fuse for fuzzy matching on Needs
const needFuse = new Fuse(enhancedSchemes, {
  keys: ['searchableText'],
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  useExtendedSearch: true
});

/**
 * Uses fuzzy search to find schemes related to a spoken need.
 */
export function findSchemesByNeed(spokenText: string): Scheme[] {
  if (!spokenText || spokenText.trim().length < 2) return [];

  // Extract location from spoken text
  const loc = extractLocation(spokenText);

  const results = needFuse.search(spokenText);
  
  return results.map(result => {
    let score = result.score !== undefined ? Math.max(10, Math.round((1 - result.score) * 100)) : 100;
    
    // Hyperlocal prioritization for free-text search
    if (result.item.locationLevel === 'District' && loc.district && result.item.locationName.toLowerCase().includes(loc.district)) {
      score += 40; // Massive boost for local matching
    } else if (result.item.locationLevel === 'State' && loc.state && result.item.locationName.toLowerCase().includes(loc.state)) {
      score += 25; // Large boost for state matching
    } else if (result.item.locationLevel !== 'National') {
      // If the scheme is specific to a location, but user didn't mention it or it doesn't match, heavily penalize it
      score -= 50;
    }

    return {
      ...result.item,
      score: Math.min(100, Math.max(0, score)) // cap between 0-100
    };
  }).filter(s => (s.score || 0) > 40).sort((a, b) => (b.score || 0) - (a.score || 0));
}

/**
 * Parses income string into maximum income value.
 */
function parseIncome(incomeStr: string): number {
  const s = incomeStr.toLowerCase();
  if (s.includes('1–2') || s.includes('1-2')) return 200000;
  if (s.includes('2–5') || s.includes('2-5')) return 500000;
  if (s.includes('1') && (s.includes('below') || s.includes('कम'))) return 100000;
  return 1000000; // Above 5 lakh or unknown
}

/**
 * Advanced strict matching engine
 */
export function calculateDetailedScores(answers: Record<number, string>): Scheme[] {
  const state = (answers[0] || '').toLowerCase();
  const district = (answers[1] || '').toLowerCase();
  
  const age = parseInt(answers[4]) || 30; // Default to 30 if parsing fails
  const occ = (answers[5] || '').toLowerCase();
  const incomeVal = parseIncome(answers[6] || '');
  const familySizeStr = answers[7] || '1';
  
  const hasRationCard = (answers[8] || '').toLowerCase().includes('yes') || (answers[8] || '').includes('हाँ') || (answers[8] || '').includes('हओ');
  const hasStudentFamily = (answers[9] || '').toLowerCase().includes('yes') || (answers[9] || '').includes('हाँ') || (answers[9] || '').includes('हओ');
  const userDocsStr = (answers[10] || '').toLowerCase();

  return prototypeSchemes.map(scheme => {
    let score = 90; // Base score for a matched scheme

    // 1. Check Strict Eligibility Rules
    if (scheme.eligibility) {
      const e = scheme.eligibility;

      // Age Checks
      if (e.minAge !== undefined && age < e.minAge) score = 0;
      if (e.maxAge !== undefined && age > e.maxAge) score = 0;

      // Income Check
      if (e.maxIncome !== undefined && incomeVal > e.maxIncome) score = 0;

      // Occupation Check
      if (e.occupations && e.occupations.length > 0) {
        // Simple fuzzy match for occupations
        const occFuse = new Fuse(e.occupations.map(v => ({v})), {keys:['v'], threshold:0.3});
        if (occFuse.search(occ).length === 0) {
          score = 0; // Did not match allowed occupations
        }
      }

      // Boolean Checks
      if (e.requiresRationCard && !hasRationCard) score = 0;
      if (e.requiresStudent && !hasStudentFamily && !occ.includes('student') && !occ.includes('छात्र')) score = 0;

      // Document Validation Penalties
      if (score > 0 && e.requiredDocuments && e.requiredDocuments.length > 0) {
        let missingDocs = 0;
        for (const reqDoc of e.requiredDocuments) {
          // Some fuzzy checking for document keywords
          const key = reqDoc.toLowerCase();
          if (key.includes('aadhaar') && !userDocsStr.includes('aadhaar')) missingDocs++;
          else if (key.includes('bank') && !userDocsStr.includes('bank')) missingDocs++;
          else if (key.includes('ration') && !userDocsStr.includes('ration')) missingDocs++;
          else if (key.includes('land') && !userDocsStr.includes('land') && !userDocsStr.includes('property')) missingDocs++;
          else if (key.includes('income') && !userDocsStr.includes('income')) missingDocs++;
          else if (key.includes('caste') && !userDocsStr.includes('caste')) missingDocs++;
          else if (key.includes('domicile') && !userDocsStr.includes('domicile') && !userDocsStr.includes('resident')) missingDocs++;
          else if (key.includes('medical') && !userDocsStr.includes('medical') && !userDocsStr.includes('birth')) missingDocs++;
        }
        score -= (missingDocs * 15);
      }
    }

    // 2. HYPERLOCAL MATCHING LOGIC (Boosts and strict location drops)
    if (score > 0) {
      if (scheme.locationLevel === 'District') {
        if (district && scheme.locationName.toLowerCase().includes(district)) {
          score += 15; // Boost
        } else {
          score = 0; // Filter out if not in this district
        }
      } else if (scheme.locationLevel === 'State') {
        if (state && scheme.locationName.toLowerCase().includes(state)) {
          score += 10; // Boost
        } else {
          score = 0; // Filter out if not in this state
        }
      }
    }

    return {
      ...scheme,
      score: Math.min(100, Math.max(0, score))
    };
  }).filter(s => (s.score || 0) > 0).sort((a, b) => (b.score || 0) - (a.score || 0));
}
