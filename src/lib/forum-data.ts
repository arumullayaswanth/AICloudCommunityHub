export type Thread = {
  id: string;
  title: string;
  author: string;
  date: string;
  replies: number;
  content: string;
};

export const forumData: Thread[] = [
  {
    id: "1",
    title: "How to deploy a Next.js app on AWS Amplify?",
    author: "NewDev",
    date: "October 1, 2024",
    replies: 5,
    content: "I'm having trouble deploying my Next.js application to AWS Amplify. I've followed the official documentation, but I keep getting a build error. Has anyone faced a similar issue?",
  },
  {
    id: "2",
    title: "Best practices for training a custom GPT model?",
    author: "AIEnthusiast",
    date: "October 2, 2024",
    replies: 12,
    content: "I'm looking to fine-tune a GPT model on a custom dataset. What are the best practices for data preparation, training, and evaluation? Any advice would be appreciated!",
  },
  {
    id: "3",
    title: "Discussion: The ethics of AI in healthcare.",
    author: "EthicalAI",
    date: "October 3, 2024",
    replies: 23,
    content: "Let's discuss the ethical implications of using AI in healthcare. What are the potential benefits and risks? How can we ensure fairness and accountability?",
  },
];
