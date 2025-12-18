import {genkit} from 'genkit';
import {googleAI as googleAIPlugin} from '@genkit-ai/google-genai';

if (!process.env.GEMINI_API_KEY) {
    if (process.env.NODE_ENV === "production") {
        console.warn("GEMINI_API_KEY is not set, using a dummy key for production build.");
    } else {
        console.warn("GEMINI_API_KEY is not set, using a dummy key.");
    }
}

export const googleAI = googleAIPlugin({
  apiKey: process.env.GEMINI_API_KEY || 'dummy-key',
});

export const ai = genkit({
  plugins: [
    googleAI,
  ],
});
