import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

function Logo() {
  return (
    <Link
      href="#home"
      className="text-xl font-bold tracking-tighter text-foreground transition-colors hover:text-primary"
    >
      AI Cloud Community Hub
    </Link>
  );
}

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <title>Discord</title>
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.443.804-.63 1.29a18.16 18.16 0 00-5.485 0 18.293 18.293 0 00-.63-1.29.074.074 0 00-.079-.037A19.736 19.736 0 003.683 4.37a.074.074 0 00-.034.043 21.612 21.612 0 00-.63 4.31 22.242 22.242 0 005.722 11.05.074.074 0 00.086.01c.34-.146.66-.322.95-.534a.074.074 0 00.011-.09c-.107-.18-.206-.368-.297-.56a.074.074 0 01.012-.087c.02-.014.04-.022.06-.022a14.288 14.288 0 005.273 0 .074.074 0 01.085.046c-.09.192-.19.38-.297.56a.074.074 0 00.011.09c.29.212.61.388.95.534a.074.074 0 00.086-.01 22.242 22.242 0 005.722-11.05.074.074 0 00-.034-.043zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.974-2.418 2.157-2.418 1.183 0 2.157 1.085 2.157 2.418 0 1.334-.974 2.419-2.157 2.419zm7.96 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.974-2.418 2.157-2.418 1.183 0 2.157 1.085 2.157 2.418 0 1.334-.974 2.419-2.157 2.419z" />
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-background/95">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-4 items-start">
            <Logo />
            <p className="text-muted-foreground">Learn. Build. Collaborate.</p>
          </div>
          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-primary">Events</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Forum</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-primary">Workshops</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Tutorials</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Projects</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Discord">
                   <DiscordIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AI Cloud Community Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
