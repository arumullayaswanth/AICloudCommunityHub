'use server';

/**
 * @fileOverview Generates content sections for an AI Cloud Community Hub landing page.
 *
 * - generateLandingPageContent - A function that generates the landing page content.
 * - LandingPageContentInput - The input type for the generateLandingPageContent function.
 * - LandingPageContentOutput - The return type for the generateLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LandingPageContentInputSchema = z.object({
  theme: z.string().describe('The overall theme for the landing page content, such as AI and Cloud technologies.'),
  primaryColor: z.string().describe('The primary color of the website.'),
  backgroundColor: z.string().describe('The background color of the website.'),
  accentColor: z.string().describe('The accent color for calls to action.'),
});
export type LandingPageContentInput = z.infer<typeof LandingPageContentInputSchema>;

const LandingPageContentOutputSchema = z.object({
  aboutSection: z.string().describe('The content for the about section of the landing page.'),
  whatWeDoSection: z.string().describe('The content for the what we do section of the landing page.'),
  membershipHighlightsSection: z.string().describe('The content for the membership highlights section of the landing page.'),
});
export type LandingPageContentOutput = z.infer<typeof LandingPageContentOutputSchema>;

export async function generateLandingPageContent(input: LandingPageContentInput): Promise<LandingPageContentOutput> {
  return generateLandingPageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLandingPageContentPrompt',
  input: {schema: LandingPageContentInputSchema},
  output: {schema: LandingPageContentOutputSchema},
  model: 'gemini-1.5-flash',
  prompt: `You are an expert content writer for community landing pages.

You will generate content for three sections of the landing page: About, What We Do, and Why Join.

The overall theme is: {{{theme}}}
The primary color is: {{{primaryColor}}}
The background color is: {{{backgroundColor}}}
The accent color is: {{{accentColor}}}

About Section:
- Provide an overview of the AI Cloud Community Hub.
- Explain who the community is for and what it aims to achieve.

What We Do Section:
- Detail the activities and offerings of the community.
- Include information about learning, collaboration, practical experience, and community support.

Why Join Section:
- Highlight the benefits of joining the AI Cloud Community Hub.
- Focus on staying updated, learning from experts, and building a strong network.

Ensure the content is engaging, informative, and encourages users to join the community.

Output the content in a JSON format:
{
  "aboutSection": "...",
  "whatWeDoSection": "...",
  "membershipHighlightsSection": "..."
}
`,
});

const generateLandingPageContentFlow = ai.defineFlow(
  {
    name: 'generateLandingPageContentFlow',
    inputSchema: LandingPageContentInputSchema,
    outputSchema: LandingPageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
