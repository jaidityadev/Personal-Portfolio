"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Github, Linkedin, Moon, Sun } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const RESUME_URL =
  "https://drive.google.com/file/d/1Mime_QXRtmFHFVR_BPnpifTOcWbbIYaZ/view?usp=sharing";

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // The chrome only materializes once content actually passes underneath it;
  // at the top of the page there is nothing to separate, so nothing is drawn.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-30 py-3 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "material-chrome" : "bg-transparent"
      )}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
        aria-hidden
      />
      {/* Content dissolves into the chrome instead of hitting a hard rule. */}
      {scrolled && <div className="scroll-edge" aria-hidden />}
      <div className="container flex items-center justify-between text-vibrant">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Jaiditya Dev logo"
            width={36}
            height={36}
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Jaiditya Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === item.path
                  ? "text-foreground font-medium"
                  : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-1 pl-2 border-l border-border">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/jaidityadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/jaidityadev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {isClient && resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button size="sm" asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="mr-2"
          >
            {isClient && resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Mobile navigation menu</SheetDescription>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      // Comfortable 44px touch target with room to slip.
                      "flex min-h-11 items-center text-lg transition-transform duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100",
                      pathname === item.path
                        ? "font-medium text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2 text-lg text-foreground/60 transition-transform duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
