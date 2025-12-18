import Image from "next/image";
import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/projects-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Community Projects
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Discover and contribute to open-source projects built by the AI Cloud Community.
            </p>
          </div>
          <div className="grid gap-12">
            {projectsData.map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <Card key={project.id} className="bg-card border-border/50 overflow-hidden transform transition-all duration-300 hover:shadow-xl md:grid md:grid-cols-2">
                  <div className="relative h-80 md:h-full">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        data-ai-hint={projectImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-3xl text-foreground mb-4">{project.name}</CardTitle>
                      <p className="text-muted-foreground text-lg mb-6">{project.longDescription}</p>
                    </div>
                    <div className="mt-auto">
                      <Button asChild>
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
