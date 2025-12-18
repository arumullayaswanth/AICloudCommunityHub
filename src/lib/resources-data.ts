export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "Tool" | "Dataset" | "Paper" | "Tutorial";
};

export const resourcesData: Resource[] = [
  {
    id: "1",
    title: "TensorFlow",
    description: "An end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources.",
    url: "https://www.tensorflow.org/",
    category: "Tool",
  },
  {
    id: "2",
    title: "Kaggle Datasets",
    description: "A platform to find, publish, and discuss datasets. Access a vast repository of datasets for your machine learning projects.",
    url: "https://www.kaggle.com/datasets",
    category: "Dataset",
  },
  {
    id: "3",
    title: "Attention Is All You Need",
    description: "The original paper that introduced the Transformer architecture, which has become the foundation for most modern NLP models.",
    url: "https://arxiv.org/abs/1706.03762",
    category: "Paper",
  },
   {
    id: "4",
    title: "Next.js Documentation",
    description: "The official documentation for Next.js, the React framework for production.",
    url: "https://nextjs.org/docs",
    category: "Tutorial",
  },
];
