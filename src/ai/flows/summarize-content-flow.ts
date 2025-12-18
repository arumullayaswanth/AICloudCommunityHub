'use server';
/**
 * @fileOverview A flow for summarizing content.
 *
 * - summarizeContent - A function that handles the content summarization process.
 * - SummarizeContentInput - The input type for the summarizeContent function.
 * - SummarizeContentOutput - The return type for the summarizeContent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeContentInputSchema = z.object({
  content: z.string().describe('The content to summarize.'),
});
export type SummarizeContentInput = z.infer<
  typeof SummarizeContentInputSchema
>;

export type SummarizeContentOutput = string;

export async function summarizeContent(
  input: SummarizeContentInput
): Promise<SummarizeContentOutput> {
  if (!process.env.GEMINI_API_KEY) {
    return "This is a default summary because the AI service is not configured.";
  }
  try {
    return await summarizeContentFlow(input);
  } catch (error) {
    console.error('Error summarizing content:', error);
    return "There was an error generating the summary.";
  }
}

const summarizeContentFlow = ai.defineFlow(
  {
    name: 'summarizeContentFlow',
    inputSchema: SummarizeContentInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { content } = input;

    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      prompt: `Generate a concise, easy-to-read summary (like a TL;DR) for the following blog post content. The summary should be a single paragraph.

      Content:
      ---
      ${content}
      ---
      `,
    });

    return llmResponse.text;
  }
);
