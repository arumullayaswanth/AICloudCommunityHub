import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Code,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Network,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { generateLandingPageContent } from "@/ai/flows/generate-landing-page-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const whatWeDoData = [
  {
    icon: BrainCircuit,
    title: "Learning & Education",
    description: "Hands-on workshops on AI, Machine Learning, and AI Agents, tutorials on Cloud computing (AWS, Azure, GCP), and sessions on DevOps, CI/CD, and Multi-Cloud architecture.",
  },
  {
    icon: Users,
    title: "Collaboration & Networking",
    description: "Engage in meetups to share projects and ideas, join panel discussions with industry experts, and receive mentorship for career and technical guidance.",
  },
  {
    icon: Lightbulb,
    title: "Practical Experience",
    description: "Participate in hackathons and coding challenges to build real-world AI + Cloud projects and showcase them for expert feedback.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support & Growth",
    description: "Join a beginner-friendly and expert-friendly environment for Q&A, knowledge sharing, and problem-solving to foster innovation with AI and Cloud technologies.",
  },
];

const whoShouldJoinData = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Who want to learn AI, Cloud, or DevOps.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Looking to improve skills or network.",
  },
  {
    icon: Code,
    title: "Developers / Engineers",
    description: "Exploring Multi-Cloud and AI integration.",
  },
  {
    icon: Cpu,
    title: "Tech Enthusiasts",
    description: "Interested in AI tools, automation, and cloud tech.",
  },
];

const whyJoinData = [
  {
    icon: TrendingUp,
    title: "Stay Updated",
    description: "Stay updated with the latest AI and Cloud trends.",
  },
  {
    icon: Sparkles,
    title: "Learn from Experts",
    description: "Learn from experts through workshops, webinars, and meetups.",
  },
  {
    icon: Network,
    title: "Build Your Network",
    description: "Build a strong professional network and collaborate globally.",
  },
];

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-background");

  return (
  <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    {heroImage && (
       <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover -z-10"
        />
    )}
    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
    <div className="container px-4 md:px-6 text-center z-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          AI Cloud Community Hub
        </h1>
        <p className="mt-6 text-lg text-foreground/80 sm:text-xl">
          A Global Community for AI & Cloud Enthusiasts
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
          Learn, collaborate, and build real-world AI and Cloud solutions with developers, students, and professionals worldwide.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="#contact">Join the Community <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 hover:bg-background/80">
            <Link href="#what-we-do">Explore Events</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
};

const AboutSection = ({ content }: { content: string }) => {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-community");

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">About AI Cloud Community Hub</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {content}
            </p>
          </div>
          {aboutImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const WhatWeDoSection = ({ content }: { content: string }) => (
  <section id="what-we-do" className="py-16 md:py-24 bg-card/50">
    <div className="container px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">What We Do</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
          {content}
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whatWeDoData.map((item) => (
          <Card key={item.title} className="bg-card border-border/50 group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <item.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-foreground">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const WhoShouldJoinSection = () => (
  <section id="who-should-join" className="py-16 md:py-24 bg-background">
    <div className="container px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Who Should Join?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
          Our community is a diverse group of individuals passionate about technology. You'll fit right in if you are:
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {whoShouldJoinData.map((item) => (
          <div key={item.title} className="flex items-start gap-4 p-6 rounded-lg bg-card border-border/50">
            <div className="bg-primary/10 p-3 rounded-full">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyJoinSection = ({ content }: { content: string }) => (
  <section id="why-join" className="py-16 md:py-24 bg-card/50">
    <div className="container px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Why Join AI Cloud Community Hub?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
          {content}
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {whyJoinData.map((item) => (
          <Card key={item.title} className="text-center p-6 bg-card border-border/50">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-cyan-400 p-8 md:p-16 text-center shadow-lg">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
          Ready to grow your AI & Cloud journey?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Become a part of our thriving community today and unlock a world of learning, collaboration, and growth.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 font-semibold">
            <Link href="#contact">Join AI Cloud Community Hub <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default async function Home() {
  const content = await generateLandingPageContent({
    theme: "AI and Cloud technologies",
    primaryColor: "hsl(217 91% 60%)",
    backgroundColor: "hsl(222 84% 4%)",
    accentColor: "hsl(217 33% 17%)",
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection content={content.aboutSection} />
        <WhatWeDoSection content={content.whatWeDoSection} />
        <WhoShouldJoinSection />
        <WhyJoinSection content={content.membershipHighlightsSection} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
