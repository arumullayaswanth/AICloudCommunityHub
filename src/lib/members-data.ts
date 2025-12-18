export type Member = {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageId: string;
};

export const membersData: Member[] = [
  {
    id: "1",
    name: "Jane Doe",
    title: "AI Specialist",
    bio: "Jane is an expert in machine learning and natural language processing, with a passion for building intelligent systems.",
    imageId: "avatar-1",
  },
  {
    id: "2",
    name: "John Smith",
    title: "Cloud Architect",
    bio: "John has over a decade of experience designing and managing scalable cloud infrastructure on AWS, Azure, and GCP.",
    imageId: "avatar-2",
  },
  {
    id: "3",
    name: "Alex Johnson",
    title: "DevOps Engineer",
    bio: "Alex specializes in CI/CD pipelines, automation, and ensuring that development and operations run smoothly.",
    imageId: "avatar-3",
  },
];
