# AI Cloud Community Hub

Welcome to the AI Cloud Community Hub, a global platform for developers, students, and professionals who are passionate about Artificial Intelligence and Cloud Computing. Our mission is to foster a collaborative environment where members can learn, build, and network to drive innovation in AI and cloud technologies.

## ✨ Features

- **Community-Driven Content:** A blog with articles, tutorials, and insights from community members.
- **Event Listings:** Discover upcoming workshops, webinars, and meetups.
- **Resource Library:** A curated collection of tools, datasets, papers, and tutorials.
- **Member Directory:** Connect with other talented individuals in the community.
- **Project Showcases:** Explore and contribute to open-source projects built by the community.
- **Interactive Forum:** Ask questions, share knowledge, and connect with peers.
- **AI-Powered Assistant:** An intelligent chatbot to help users navigate the site and find information.
- **AI Content Summaries:** Get quick TL;DR summaries for blog posts.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative:** [Genkit](https://firebase.google.com/docs/genkit)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 20 or later)
- `npm` or your favorite package manager

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

The project uses Genkit with Google's Gemini models for its AI features. You'll need to get an API key and set it up.

1.  Create a file named `.env` in the root of the project.
2.  Obtain a `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  Add the key to your `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

### 4. Run the Development Server

Once the dependencies are installed and the environment variables are set, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.
