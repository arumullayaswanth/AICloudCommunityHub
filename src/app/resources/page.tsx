import Link from "next/link";
import { ArrowUpRight, Book, Code, Database, FileText } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resourcesData } from "@/lib/resources-data";
import { Badge } from "@/components/ui/badge";

const categoryIcons = {
  Tool: <Code className="h-6 w-6 text-primary" />,
  Dataset: <Database className="h-6 w-6 text-primary" />,
  Paper: <FileText className="h-6 w-6 text-primary" />,
  Tutorial: <Book className="h-6 w-6 text-primary" />,
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Resource Library
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              A curated collection of tools, datasets, and materials for the AI and Cloud community.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {resourcesData.map((resource) => (
              <Card key={resource.id} className="bg-card border-border/50 flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                       {categoryIcons[resource.category]}
                       <CardTitle className="text-xl text-foreground">{resource.title}</CardTitle>
                    </div>
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{resource.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center gap-2">
                    Visit Resource <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
