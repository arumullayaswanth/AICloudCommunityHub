
export type Project = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  url: string;
  tags: string[];
  imageId: string;
};

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Tagent",
    description: "An open-source framework for building and deploying AI agents.",
    longDescription: "Tagent is a community-driven open-source project focused on creating a flexible and powerful framework for building, training, and deploying autonomous AI agents. Our goal is to make it easier for developers to create sophisticated agents that can perform complex tasks.",
    url: "https://github.com/google/tagent",
    tags: ["Open Source", "AI", "Agents", "Framework"],
    imageId: "project-tagent",
  },
];
