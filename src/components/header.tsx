"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Github, Linkedin, Moon, Sun } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { springSnappy } from "@/lib/motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  // The divider under the chrome only exists while something is actually
  // passing beneath it.
  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 8;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    // Ease the brightness change rather than cutting between themes.
    const root = document.documentElement;
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 320);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = isClient && resolvedTheme === "dark";

  return (
    <header
      data-scrolled={scrolled}
      className="material-chrome sticky top-0 z-30 border-b border-transparent py-3 transition-colors duration-300 data-[scrolled=true]:border-border/60"
    >
      {/* Soft edge where content meets the floating chrome. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-full h-6 bg-gradient-to-b from-background/40 to-transparent opacity-0 transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
      />

      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-primary"
        aria-hidden
      />

      <div className="container flex items-center justify-between">
        {/*
          The wordmark carries the identity on its own. The old logo tile is a
          dark square that sits on the warm paper like a hole punched in it.
        */}
        <Link href="/" className="pressable rounded-md">
          <span className="font-display text-xl tracking-tight">
            Jaiditya Dev
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={`pressable relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {/*
                 * A single pill that travels between items, so the indicator
                 * is continuous instead of blinking out here and in there.
                 */}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={springSnappy}
                    className="absolute inset-0 -z-10 rounded-lg bg-foreground/[0.07]"
                  />
                )}
                <span className={active ? "font-medium" : undefined}>
                  {item.name}
                </span>
              </Link>
            );
          })}

          <div className="ml-2 flex items-center gap-1 border-l border-border pl-3">
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
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>

          <Button size="sm" className="ml-2" asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-1 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <MobileNav
            navItems={navItems}
            pathname={pathname}
            resumeUrl={RESUME_URL}
          />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={onToggle}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={springSnappy}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
