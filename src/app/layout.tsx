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
    "Data scientist and AI engineer who turns data into decisions that ship, from published forecasting research to agentic AI and MCP servers at ADP. Python, PyTorch, GenAI, full-stack.",
  keywords: [
    "Jaiditya Dev",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Technology Consultant",
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
      "From published forecasting research to production agentic AI at ADP. I build ML systems that ship.",
    url: "https://jaiditya-dev.netlify.app",
    siteName: "Jaiditya Dev",
    type: "website",
    images: [{ url: "/images/profile.jpg", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    title: "Jaiditya Dev | Data Scientist & AI Engineer",
    description:
      "From published forecasting research to production agentic AI at ADP. I build ML systems that ship.",
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
