import { GoogleGenAI, Type } from "@google/genai";

// NOTE: In a real production app, this call would likely happen on a backend to protect the key.
// For this demo, we assume the environment variable is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductContent = async (name: string, category: string) => {
  try {
    const model = 'gemini-2.5-flash'; 
    const prompt = `Generate a catchy marketing description (max 2 sentences) and a list of 3 key technical features for a product named "${name}" in the category "${category}".`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini AI generation failed:", error);
    return {
      description: "Could not generate description at this time.",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    };
  }
};
