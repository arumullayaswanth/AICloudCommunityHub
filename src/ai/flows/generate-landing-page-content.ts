'use server';

/**
 * @fileOverview Generates content sections for an AI Cloud Community Hub landing page.
 *
 * - generateLandingPageContent - A function that generates the landing page content.
 * - LandingPageContentInput - The input type for the generateLandingPageContent function.
 * - LandingPageContentOutput - The return type for the generateLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
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
  const defaultContent = {
    aboutSection: "The AI Cloud Community Hub is a global platform for developers, students, and professionals passionate about Artificial Intelligence and Cloud Computing. Our mission is to foster a collaborative environment where members can learn, build, and network to drive innovation in AI and cloud technologies.",
    whatWeDoSection: "We offer a range of activities and resources to help our members grow. From hands-on workshops and expert-led tutorials to networking events and collaborative projects, we provide the tools and support you need to succeed in the fast-paced world of AI and cloud.",
    membershipHighlightsSection: "By joining our community, you'll gain access to exclusive content, connect with industry experts, and collaborate with a diverse network of peers from around the world. Stay ahead of the curve, enhance your skills, and be part of the future of technology.",
  };

  if (!process.env.GEMINI_API_KEY) {
    return defaultContent;
  }

  try {
    return await generateLandingPageContentFlow(input);
  } catch (error) {
    console.error("Error generating landing page content:", error);
    return defaultContent;
  }
}

const prompt = ai.definePrompt({
  name: 'generateLandingPageContentPrompt',
  input: {schema: LandingPageContentInputSchema},
  output: {schema: LandingPageContentOutputSchema},
  model: googleAI('gemini-1.5-flash'),
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
