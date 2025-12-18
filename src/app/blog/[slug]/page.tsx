import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogData } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              {post.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              By {post.author} on {post.date}
            </p>
            {postImage && (
              <div className="relative h-96 w-full my-8 rounded-lg overflow-hidden">
                <Image
                  src={postImage.imageUrl}
                  alt={postImage.description}
                  data-ai-hint={postImage.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div
              className="prose prose-invert prose-lg max-w-none text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
