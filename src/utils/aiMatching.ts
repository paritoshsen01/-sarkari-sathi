import Fuse from 'fuse.js';
import { prototypeSchemes, type Scheme } from '../data/schemes';

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

  return {
    ...scheme,
    searchableText: [...scheme.tags, ...extraTags, scheme.name, scheme.category, scheme.benefit].join(' ')
  };
});

// Configure Fuse for fuzzy matching on Needs
const needFuse = new Fuse(enhancedSchemes, {
  keys: ['searchableText'],
  includeScore: true,
  threshold: 0.4, // Lower threshold means more strict matching (0.0 is perfect match, 1.0 is match anything)
  ignoreLocation: true, // Don't care where in the text it appears
  useExtendedSearch: true // Allows for advanced querying if needed
});

/**
 * Uses fuzzy search to find schemes related to a spoken need.
 * @param spokenText The raw text spoken by the user
 * @returns Array of matched schemes with scores
 */
export function findSchemesByNeed(spokenText: string): Scheme[] {
  // If text is very short, we don't want weird random matches
  if (!spokenText || spokenText.trim().length < 2) return [];

  const results = needFuse.search(spokenText);
  
  // Convert Fuse results back to Scheme format, assigning a flat 100 score for UI purposes 
  // (or we could invert the fuse score, where 0 is perfect)
  return results.map(result => ({
    ...result.item,
    score: result.score !== undefined ? Math.max(10, Math.round((1 - result.score) * 100)) : 100
  })).filter(s => (s.score || 0) > 40); // Only return decent matches
}

/**
 * Advanced matching for the questionnaire flow, incorporating fuzzy text checks
 */
export function calculateDetailedScores(answers: Record<number, string>): Scheme[] {
  const state = (answers[0] || '').toLowerCase();
  const occ = (answers[2] || '').toLowerCase();
  const familySizeStr = answers[4] || '1';
  const hasRationCard = (answers[5] || '').toLowerCase().includes('yes') || (answers[5] || '').includes('हाँ') || (answers[5] || '').includes('हओ');
  const hasStudentFamily = (answers[6] || '').toLowerCase().includes('yes') || (answers[6] || '').includes('हाँ') || (answers[6] || '').includes('हओ');

  // Use simple fuse instances just to check boolean flags accurately despite typos
  const isFarmer = new Fuse([{v:'farmer'},{v:'farm'},{v:'kisan'},{v:'kheti'},{v:'agriculture'}], {keys:['v'], threshold:0.3}).search(occ).length > 0;
  const isStudent = new Fuse([{v:'student'},{v:'padhai'},{v:'school'},{v:'college'},{v:'छात्र'}], {keys:['v'], threshold:0.3}).search(occ).length > 0;
  const isLabourer = new Fuse([{v:'labourer'},{v:'mazdoor'},{v:'mulia'},{v:'worker'},{v:'daily wage'}], {keys:['v'], threshold:0.3}).search(occ).length > 0;

  return prototypeSchemes.map(scheme => {
    let score = 50; 
    
    if (scheme.id === 'pm-kisan') {
      if (isFarmer) score = 95;
      else score = 20; 
    }
    
    if (scheme.id === 'scholarship') {
      if (isStudent || hasStudentFamily) score = 92;
      else score = 30;
    }
    
    if (scheme.id === 'pm-jay') {
      if (hasRationCard) score = 85;
    }
    
    if (scheme.id === 'pm-ujjwala') {
      if (hasRationCard) score = 80;
    }

    if (scheme.id === 'pm-ajay') {
      if (isLabourer) score = 88;
      else score = 45;
    }

    // Schemes that broadly apply based on rural need, give them a baseline boost
    if (['jal-jeevan', 'saubhagya', 'pm-gkay', 'pm-awas'].includes(scheme.id)) {
      if (hasRationCard || isLabourer || isFarmer) score = 75; // high chance of qualifying if they are in these categories
      else score = 60;
    }

    if (score === 50 || score === 60) score += Math.floor(Math.random() * 15);

    return {
      ...scheme,
      score
    };
  }).sort((a, b) => (b.score || 0) - (a.score || 0));
}
