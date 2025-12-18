import Link from "next/link";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { forumData } from "@/lib/forum-data";

export default function ForumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <div className="text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                Community Forum
                </h1>
                <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
                Ask questions, share knowledge, and connect with peers.
                </p>
            </div>
            <Button>Start a New Discussion</Button>
          </div>
          <div className="space-y-6">
            {forumData.map((thread) => (
              <Card key={thread.id} className="bg-card border-border/50">
                <CardHeader>
                  <Link href="#" className="hover:text-primary">
                    <CardTitle className="text-xl text-foreground">{thread.title}</CardTitle>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Posted by <span className="font-semibold text-primary">{thread.author}</span> on {thread.date}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{thread.content}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>{thread.replies} Replies</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{Math.floor(Math.random() * 100)} Upvotes</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{Math.floor(Math.random() * 1000)} Views</span>
                    </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
