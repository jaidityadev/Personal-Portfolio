import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaiditya-dev.netlify.app"),
  title: "Jaiditya Dev | Data Scientist & AI Engineer",
  description:
    "Data scientist and AI engineer joining Deloitte Canada's Data & AI practice. Production ML classification over 3M+ records, MCP servers, and agentic AI systems. Python, PyTorch, GenAI, full-stack.",
  keywords: [
    "Jaiditya Dev",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Technology Consultant",
    "Deloitte",
    "GenAI",
    "MCP",
    "Full-Stack Developer",
    "Toronto",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Jaiditya Dev | Data Scientist & AI Engineer",
    description:
      "Data scientist and AI engineer joining Deloitte Canada's Data & AI practice. Production ML, MCP servers, and agentic AI systems.",
    url: "https://jaiditya-dev.netlify.app",
    siteName: "Jaiditya Dev",
    type: "website",
    images: [{ url: "/images/profile.jpg", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    title: "Jaiditya Dev | Data Scientist & AI Engineer",
    description:
      "Data scientist and AI engineer joining Deloitte Canada's Data & AI practice. Production ML, MCP servers, and agentic AI systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.className}`}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
