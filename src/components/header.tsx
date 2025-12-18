"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinksData = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/members", label: "Members" },
  { href: "/resources", label: "Resources" },
  { href: "/forum", label: "Forum" },
  { href: "/join", label: "Join" },
  { href: "/#contact", label: "Contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
    >
      AI Cloud Community Hub
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const navLinks = navLinksData.map(link => {
    if (pathname === "/" && link.href.startsWith("/#")) {
      return { ...link, href: link.href.substring(1) };
    }
    if (pathname === "/" && link.href === "/") {
      return { ...link, href: "#home" };
    }
    if(pathname !== "/" && link.href.startsWith("/#")){
      return { ...link, href: `/${link.href}` };
    }
    return link;
  });

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          {isClient && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-300" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-900 border-l border-gray-700/50">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-10">
                    <Logo />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-gray-300" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-200 transition-colors hover:text-cyan-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
