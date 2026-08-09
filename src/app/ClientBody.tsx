"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CursorSpotlight from "@/components/cursor-spotlight";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /*
     * Light is the default. Transitions are deliberately left enabled through
     * a theme change: the swap is a large brightness jump, and the eased
     * `.theme-anim` window in globals.css is gentler than cutting between.
     */
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <CursorSpotlight />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
