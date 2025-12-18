import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { blogData } from '@/lib/blog-data';
import { eventsData } from '@/lib/events-data';
import { membersData } from '@/lib/members-data';
import { projectsData } from '@/lib/projects-data';
import { resourcesData } from '@/lib/resources-data';

export const getBlogPosts = ai.defineTool(
  {
    name: 'getBlogPosts',
    description: 'Get a list of all blog posts.',
    outputSchema: z.any(),
  },
  async () => {
    return blogData;
  }
);

export const getEvents = ai.defineTool(
  {
    name: 'getEvents',
    description: 'Get a list of all events.',
    outputSchema: z.any(),
  },
  async () => {
    return eventsData;
  }
);

export const getMembers = ai.defineTool(
  {
    name: 'getMembers',
    description: 'Get a list of all community members.',
    outputSchema: z.any(),
  },
  async () => {
    return membersData;
  }
);

export const getProjects = ai.defineTool(
  {
    name: 'getProjects',
    description: 'Get a list of all community projects.',
    outputSchema: z.any(),
  },
  async () => {
    return projectsData;
  }
);

export const getResources = ai.defineTool(
  {
    name: 'getResources',
    description: 'Get a list of all available resources.',
    outputSchema: z.any(),
  },
  async () => {
    return resourcesData;
  }
);
