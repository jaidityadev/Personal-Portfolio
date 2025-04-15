"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
