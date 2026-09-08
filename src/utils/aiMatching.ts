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
function isLocationMatch(userInput: string, schemeLoc: string): boolean {
  if (!userInput) return false;
  let user = userInput.toLowerCase().trim().replace(/\./g, '');
  let loc = schemeLoc.toLowerCase().trim();
  
  if (user === loc) return true;
  if (loc.includes(user) || user.includes(loc)) return true;
  
  // Abbreviation map
  const abbrev: Record<string, string[]> = {
    'madhya pradesh': ['mp'],
    'uttar pradesh': ['up'],
    'andhra pradesh': ['ap'],
    'maharashtra': ['mh'],
    'tamil nadu': ['tn'],
    'west bengal': ['wb']
  };
  
  if (abbrev[loc] && abbrev[loc].includes(user)) return true;
  
  // Fuzzy match as fallback
  const fuse = new Fuse([{v: loc}], {keys:['v'], threshold: 0.3});
  return fuse.search(user).length > 0;
}

function parseIncome(incomeStr: string): number {
  const s = incomeStr.toLowerCase();
  
  // Match manual entry exact translated array strings
  if (s.includes('1-2') || s.includes('1–2') || s.includes('1- 2')) return 200000;
  if (s.includes('2-5') || s.includes('2–5')) return 500000;
  
  // If it has '5' but not '2'
  if (s.includes('5')) return 1000000; 
  // If it has '1'
  if (s.includes('1')) return 100000;

  // Voice fallbacks
  if (s.includes('0000')) return parseInt(s.match(/\d+/)?.[0] || '1000000');
  
  return 1000000; // Default Above 5 lakh or unknown
}

/**
 * Advanced strict matching engine
 */
function parseAge(ageStr: string): number {
  const s = (ageStr || '').toLowerCase();
  if (!s) return 30; // Default

  // Check if it already has numbers
  const match = s.match(/\d+/);
  if (match) return parseInt(match[0]);

  // Translate common words to numbers
  const wordMap: Record<string, number> = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
    'pachas': 50, 'saath': 60, 'sattar': 70, 'assi': 80, 'nabbe': 90, 'sau': 100,
    'bis': 20, 'tees': 30, 'chalis': 40
  };

  for (const [word, num] of Object.entries(wordMap)) {
    if (s.includes(word)) return num;
  }
  
  return 30; // Fallback
}

export function calculateDetailedScores(answers: Record<number, string>): Scheme[] {
  const state = (answers[0] || '').toLowerCase();
  const district = (answers[1] || '').toLowerCase();
  
  const age = parseAge(answers[4]);
  const occ = (answers[5] || '').toLowerCase();
  const incomeVal = parseIncome(answers[6] || '');
  const familySizeStr = answers[7] || '1';
  
  const rCardStr = (answers[8] || '').toLowerCase();
  const hasRationCard = rCardStr.includes('yes') || rCardStr.includes('हाँ') || rCardStr.includes('हओ') || rCardStr.includes('ହଁ') || rCardStr.includes('होय') || rCardStr.includes('হ্যাঁ') || rCardStr.includes('అవును') || rCardStr.includes('ஆம்') || rCardStr.includes('હા') || rCardStr.includes('y');

  const stuStr = (answers[9] || '').toLowerCase();
  const hasStudentFamily = stuStr.includes('yes') || stuStr.includes('हाँ') || stuStr.includes('हओ') || stuStr.includes('ହଁ') || stuStr.includes('होय') || stuStr.includes('হ্যাঁ') || stuStr.includes('అవును') || stuStr.includes('ஆம்') || stuStr.includes('હા') || stuStr.includes('y');
  const userDocsStr = (answers[10] || '').toLowerCase();

  return prototypeSchemes.map(scheme => {
    let score = 70; // Base score for generic match

    // 1. Check Strict Eligibility Rules
    if (scheme.eligibility) {
      const e = scheme.eligibility;

      // Age Checks
      if (e.minAge !== undefined || e.maxAge !== undefined) {
        if (e.minAge !== undefined && age < e.minAge) score = 0;
        if (e.maxAge !== undefined && age > e.maxAge) score = 0;
        if (score > 0) score += 5; // Targeted age match bonus
      }

      // Income Check
      if (e.maxIncome !== undefined) {
        if (incomeVal > e.maxIncome) score = 0;
        if (score > 0) score += 5; // Targeted income match bonus
      }

      // Occupation Check
      if (e.occupations && e.occupations.length > 0) {
        const occFuse = new Fuse(e.occupations.map(v => ({v})), {keys:['v'], threshold:0.3});
        if (occFuse.search(occ).length === 0) {
          score = 0; // Did not match allowed occupations
        } else {
          if (score > 0) score += 10; // Targeted occupation match bonus
        }
      }

      // Boolean Checks
      if (e.requiresRationCard) {
        if (!hasRationCard) score = 0;
        if (score > 0) score += 5;
      }
      
      if (e.requiresStudent) {
        const studentScripts = ['student', 'chhatra', 'vidyarthi', 'shiksharthi', 'chhatro', 'shikshok', 'छात्र', 'विद्यार्थी', 'ছাত্র', 'শিক্ষার্থী', 'ଛାତ୍ର', 'ବିଦ୍ୟାର୍ଥୀ', 'విద్యార్థి', 'மாணவர்', 'વિદ્યાર્થી'];
        const isUserStudent = studentScripts.some(s => occ.includes(s));
        
        if (!hasStudentFamily && !isUserStudent) score = 0;
        if (score > 0) score += 5;
      }
    }

    // 2. HYPERLOCAL MATCHING LOGIC (Boosts and strict location drops)
    if (score > 0) {
      if (scheme.locationLevel === 'District') {
        if (district && isLocationMatch(district, scheme.locationName)) {
          score += 20; // Massive boost for exact district
        } else {
          score = 0; // Filter out if not in this district
        }
      } else if (scheme.locationLevel === 'State') {
        if (state && isLocationMatch(state, scheme.locationName)) {
          score += 15; // High boost for exact state
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
