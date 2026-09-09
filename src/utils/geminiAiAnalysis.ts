import { GoogleGenerativeAI } from '@google/generative-ai';
import { type BeneficiaryProfile, nsqfPathways, type NsqfPathway } from '../data/sihSkillingData';
import { type LanguageCode } from '../data/languages';

export interface AiLivelihoodAnalysis {
  currentSituation: string;
  keyStrengths: string;
  skillGaps: string;
  recommendedPathways: (NsqfPathway & { matchScore: number; aiReasoning: string })[];
}

export async function generateLivelihoodAnalysis(
  profile: BeneficiaryProfile,
  lang: LanguageCode,
  apiKey: string
): Promise<AiLivelihoodAnalysis> {
  if (!apiKey) {
    throw new Error("Gemini API Key is missing. Please provide it in the settings.");
  }

  const modelsToTry = [
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-pro",
    "gemini-1.0-pro-latest"
  ];

  const genAI = new GoogleGenerativeAI(apiKey);

  // List available pathways to the AI
  const availablePathways = nsqfPathways.map(p => ({
    id: p.id,
    name: p.name,
    nsqfLevel: p.nsqfLevel,
    sector: p.sector,
    requiredSkills: p.currentSkillsMatch.join(", ")
  }));

  const prompt = `
You are AJAY Sathi, an expert Livelihood & Skilling Advisor for the Indian Government's PM-AJAY Scheme.
You are interacting with a beneficiary from rural/semi-rural India.

Here is their profile:
- Education: ${profile.education}
- Current Occupation: ${profile.currentOccupation}
- Traditional Family Work: ${profile.traditionalOccupation}
- Existing Skills: ${profile.existingSkills}
- Future Career Interest: ${profile.interest}
- Work Preference: ${profile.employmentPreference}
- Geographic Mobility: ${profile.mobility}
- Location: ${profile.state}, ${profile.district}, ${profile.village}

Here is the list of available PM-AJAY NSQF training pathways:
${JSON.stringify(availablePathways, null, 2)}

Your task is to analyze their profile and provide a detailed livelihood strategy.
You MUST return the output as a valid JSON object matching the following structure exactly. Do not use Markdown formatting for the JSON output (e.g. no \`\`\`json). Just the raw JSON.
Also, the content inside the JSON MUST be in the language corresponding to language code: "${lang}". If the code is "en", use English. If "hi", use Hindi. If "cg" use Chhattisgarhi, etc.

JSON Structure:
{
  "currentSituation": "A 1-2 sentence encouraging summary of their current educational and occupational status.",
  "keyStrengths": "1-2 sentences highlighting their traditional skills and existing knowledge as their biggest assets.",
  "skillGaps": "1-2 sentences explaining what critical modern skills or certifications they lack to achieve their future career interest.",
  "recommendedPathways": [
    {
      "id": "must exactly match one of the available pathway IDs provided above",
      "matchScore": 85,
      "aiReasoning": "1-2 sentences explaining exactly why this specific PM-AJAY course is the perfect fit for their existing skills, interests, and mobility."
    }
  ]
}
`;

  let lastError = null;
  let text = "";

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      text = response.text().trim();
      lastError = null; // Success!
      console.log("Successfully used model:", modelName);
      break; 
    } catch (err: any) {
      console.warn(`Model ${modelName} failed:`, err.message);
      lastError = err;
      // If it's a 404, we continue to the next model.
      // If it's something like 403 (Invalid API key), we should probably stop, but we can safely try all.
    }
  }

  if (lastError && !text) {
    throw new Error(`[AI Analysis Failed]: All models failed. Last error: ${lastError.message || "Unknown error"}`);
  }

  try {
    let parsedData;
    try {
      // Clean up if it returned markdown
      const cleanedText = text.replace(/```json/gi, '').replace(/```/gi, '').trim();
      parsedData = JSON.parse(cleanedText);
    } catch (parseErr: any) {
      console.error("Failed to parse AI JSON response:", text);
      throw new Error(`AI returned invalid format. Parse error: ${parseErr.message}`);
    }

    // Merge the AI's recommendations with the full pathway data
    const finalPathways = parsedData.recommendedPathways.map((rec: any) => {
      const fullPathway = nsqfPathways.find(p => p.id === rec.id);
      if (fullPathway) {
        return {
          ...fullPathway,
          matchScore: rec.matchScore || 85,
          aiReasoning: rec.aiReasoning || "Highly recommended based on your profile."
        };
      }
      return null;
    }).filter(Boolean);

    // Fallback if AI didn't return valid pathways
    if (finalPathways.length === 0) {
      finalPathways.push({
        ...nsqfPathways[0],
        matchScore: 88,
        aiReasoning: "Fallback recommendation."
      });
    }

    return {
      currentSituation: parsedData.currentSituation || "Analysis complete.",
      keyStrengths: parsedData.keyStrengths || "Multiple strengths identified.",
      skillGaps: parsedData.skillGaps || "Some skill upgrading required.",
      recommendedPathways: finalPathways
    };
  } catch (error: any) {
    console.error("Gemini Data Processing Error:", error);
    throw new Error(`[AI Data Error]: ${error.message || "Unknown error"}`);
  }
}
