import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {dev} from "node:os";

if (!process.env.GEMINI_API_KEY) {
    if (process.env.NODE_ENV === "production") {
        throw new Error("GEMINI_API_KEY is not set");
    }
    console.warn("GEMINI_API_KEY is not set, using a dummy key");
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY || 'dummy-key',
    }),
  ],
});
