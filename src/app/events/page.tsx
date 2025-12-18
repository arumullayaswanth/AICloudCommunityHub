import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { eventsData } from "@/lib/events-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Upcoming Events
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Join our upcoming workshops, webinars, and meetups.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {eventsData.map((event) => {
              const eventImage = PlaceHolderImages.find(p => p.id === event.imageId);
              return (
                <Card key={event.id} className="bg-card border-border/50 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {eventImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={eventImage.imageUrl}
                        alt={eventImage.description}
                        data-ai-hint={eventImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                    <div className="flex items-center text-muted-foreground mt-4 text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 text-sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-card/50 pt-4">
                    <Button asChild variant="default" className="w-full">
                      <Link href="#">
                        Register Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
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
