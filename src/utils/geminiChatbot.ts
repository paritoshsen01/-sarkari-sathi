import { GoogleGenerativeAI } from '@google/generative-ai';
import { prototypeSchemes } from '../data/schemes';
import { type LanguageCode } from '../data/languages';

const modelsToTry = [
  "gemini-3.6-flash",
  "gemini-3.8-flash",
  "gemini-3.5-flash",
  "gemini-2.5-flash",
  "gemini-1.5-flash"
];

// Provide a compressed version of schemes to save tokens and improve focus
const schemeContextData = prototypeSchemes.map((s: any) => ({
  name: s.name,
  category: s.category,
  whatIsIt: s.whatIsIt,
  whoIsEligible: s.whoIsEligible,
  benefit: s.benefit
}));

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export async function chatWithGemini(
  history: ChatMessage[],
  newMessage: string,
  lang: LanguageCode,
  apiKey: string
): Promise<string> {
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const systemInstruction = `
You are AJAY Sathi, an expert, friendly, and conversational AI Assistant for the PM-AJAY and Indian Government Schemes portal.
Your goal is to help citizens understand schemes, check eligibility, and guide them warmly.

Rules:
1. Be extremely polite, welcoming, and conversational. Start with a warm greeting if it's the first message.
2. Provide DETAILED, accurate answers about schemes based on the provided database.
3. If they ask about something else, try to answer generally but guide them back to government schemes and livelihood.
4. MUST reply in the language corresponding to language code: "${lang}". If the code is "en", use English. If "hi", use Hindi. If "cg" use Chhattisgarhi, etc. Always stick to the requested language.
5. Format your responses with clear paragraphs, bullet points, and emojis to make it easy to read.

Here is the database of all available government schemes for your reference:
${JSON.stringify(schemeContextData)}
`;

  // Format history for Gemini API
  const contents = [];
  
  // Inject system instruction as the first user message (a common pattern if systemInstruction is not natively supported in older SDKs)
  contents.push({
    role: 'user',
    parts: [{ text: systemInstruction }]
  });
  contents.push({
    role: 'model',
    parts: [{ text: "Understood. I am ready to help the citizen warmly and in detail." }]
  });

  // Add actual chat history
  for (const msg of history) {
    contents.push({
      role: msg.role,
      parts: [{ text: msg.text }]
    });
  }

  // Add the new message
  contents.push({
    role: 'user',
    parts: [{ text: newMessage }]
  });

  let lastError = null;
  let responseText = "";

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent({ contents });
      const response = await result.response;
      responseText = response.text().trim();
      lastError = null;
      break; 
    } catch (err: any) {
      console.warn(`Chatbot Model ${modelName} failed:`, err.message);
      lastError = err;
    }
  }

  if (lastError && !responseText) {
    throw new Error(`Chatbot failed. Last error: ${lastError.message}`);
  }

  return responseText;
}
