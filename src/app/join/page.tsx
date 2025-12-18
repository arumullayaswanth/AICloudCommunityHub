
import { CheckCircle } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const membershipBenefits = [
  "Access to exclusive workshops and webinars.",
  "Networking opportunities with industry experts.",
  "Collaboration on real-world AI and cloud projects.",
  "Mentorship from experienced professionals.",
  "Early access to new tools and technologies.",
  "A supportive community of like-minded peers.",
];

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Join the AI Cloud Community Hub
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Become a part of a global community dedicated to advancing the future of AI and cloud technologies.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Membership Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  As a member of the AI Cloud Community Hub, you'll gain access to a wealth of resources and opportunities designed to help you grow your skills, expand your network, and stay at the forefront of technological innovation.
                </p>
                <ul className="space-y-4">
                  {membershipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <h2 className="font-headline text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-4 text-muted-foreground">
                Click the button below to sign up and start your journey with us.
              </p>
              <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link href="#">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
