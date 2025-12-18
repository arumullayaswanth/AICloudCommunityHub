import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { membersData } from "@/lib/members-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function MembersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Community Members
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Meet the talented individuals driving our community forward.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {membersData.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.id} className="bg-card border-border/50 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {memberImage && (
                    <div className="relative h-48 w-48 mx-auto mt-8 rounded-full overflow-hidden border-4 border-primary">
                      <Image
                        src={memberImage.imageUrl}
                        alt={memberImage.description}
                        data-ai-hint={memberImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
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
