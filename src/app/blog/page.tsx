import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogData } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Community Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Insights, tutorials, and news from the AI Cloud Community.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1">
            {blogData.map((post) => {
              const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
              return (
                <Card key={post.id} className="bg-card border-border/50 overflow-hidden transform transition-all duration-300 hover:shadow-xl md:flex">
                  {postImage && (
                    <div className="relative h-64 md:h-auto md:w-1/3">
                      <Image
                        src={postImage.imageUrl}
                        alt={postImage.description}
                        data-ai-hint={postImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground">{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        By {post.author} on {post.date}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild variant="default">
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
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
