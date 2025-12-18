export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageId: string;
};

export const eventsData: Event[] = [
  {
    id: "1",
    title: "AI & Machine Learning Workshop",
    description: "A hands-on workshop covering the fundamentals of AI and Machine Learning. Perfect for beginners and enthusiasts.",
    date: "October 25, 2024",
    location: "Online",
    imageId: "event-1",
  },
  {
    id: "2",
    title: "Cloud Native Conference 2024",
    description: "Join industry experts to discuss the latest trends in cloud-native technologies, DevOps, and multi-cloud architecture.",
    date: "November 12, 2024",
    location: "San Francisco, CA",
    imageId: "event-2",
  },
  {
    id: "3",
    title: "AI Hackathon: Build the Future",
    description: "Participate in our annual hackathon to build innovative AI projects. Showcase your skills and win exciting prizes.",
    date: "December 5-7, 2024",
    location: "Online",
    imageId: "event-3",
  },
];
