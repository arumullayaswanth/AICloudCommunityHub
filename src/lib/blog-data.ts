export type Post = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};

export const blogData: Post[] = [
  {
    id: "1",
    slug: "getting-started-with-ai-cloud",
    title: "Getting Started with AI and Cloud",
    author: "Jane Doe",
    date: "October 1, 2024",
    excerpt: "A beginner's guide to integrating AI into cloud applications. Learn the fundamentals and take your first steps.",
    content: "<p>This is a full blog post about getting started with AI and the cloud. It would contain much more detail, code snippets, and examples to help beginners understand the core concepts. We would explore different cloud platforms and AI services.</p><p>Further sections would dive into machine learning models, data storage, and how to deploy a simple AI-powered application. This is placeholder content.</p>",
    imageId: "blog-1",
  },
  {
    id: "2",
    slug: "mastering-devops-in-a-multi-cloud-world",
    title: "Mastering DevOps in a Multi-Cloud World",
    author: "John Smith",
    date: "October 5, 2024",
    excerpt: "Explore advanced DevOps strategies for managing applications across multiple cloud providers.",
    content: "<p>This post delves into the complexities of multi-cloud DevOps. We discuss strategies for CI/CD, infrastructure as code, and observability across platforms like AWS, Azure, and GCP. This is placeholder content.</p>",
    imageId: "blog-2",
  },
  {
    id: "3",
    slug: "the-future-of-ai-secure-and-scalable-solutions",
    title: "The Future of AI: Secure and Scalable Solutions",
    author: "Alex Johnson",
    date: "October 10, 2024",
    excerpt: "A look into the future of AI, focusing on the importance of building secure and scalable systems.",
    content: "<p>In this article, we explore the upcoming trends in Artificial Intelligence, from federated learning to explainable AI (XAI). We discuss the ethical implications and the technical challenges of building AI systems that are both powerful and trustworthy. This is placeholder content.</p>",
    imageId: "blog-3",
  },
];
