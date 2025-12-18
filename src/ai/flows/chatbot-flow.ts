'use server';
/**
 * @fileOverview A chatbot flow for the AI Cloud Community Hub.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatbotInput - The input type for the chat function.
 * - ChatbotOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  getBlogPosts,
  getEvents,
  getMembers,
  getProjects,
  getResources,
} from '../tools/community-data-tool';
import { googleAI } from '@genkit-ai/google-genai';

const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({ text: z.string() })),
  })),
  prompt: z.string(),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export type ChatbotOutput = string;

export async function chat(input: ChatbotInput): Promise<ChatbotOutput> {
  return await chatbotFlow(input);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { history, prompt } = input;

    const llmResponse = await ai.generate({
      model: googleAI('gemini-1.5-flash'),
      tools: [
        getBlogPosts,
        getEvents,
        getMembers,
        getProjects,
        getResources,
      ],
      prompt: prompt,
      history: history,
      system: `You are an AI assistant for the AI Cloud Community Hub.
      Your goal is to provide helpful and friendly information to users about the community, its events, blog posts, members, and resources.
      Be concise and friendly in your responses.
      If you don't know the answer, say that you don't know.
      When asked about events, blog posts, members, projects or resources, use the available tools to get the information.
      Do not make up information.
      `,
    });

    return llmResponse.text;
  }
);
