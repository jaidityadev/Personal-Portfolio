"use client";

import { useEffect, useRef } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CursorSpotlight from "@/components/cursor-spotlight";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const logged = useRef(false);

  useEffect(() => {
    if (logged.current) return;
    logged.current = true;
    // For the technical reviewers who open DevTools — hi!
    console.log(
      "%cJaiditya Dev%c\n\nLike what you see? This site is hand-built with Next.js, Tailwind, and Framer Motion.\nRepo: https://github.com/jaidityadev\nHiring? → jaidityadev1402@gmail.com",
      "font-size: 20px; font-weight: bold; color: #2dd4a8; font-family: monospace;",
      "font-size: 12px; color: #888; font-family: monospace;"
    );
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CursorSpotlight />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
