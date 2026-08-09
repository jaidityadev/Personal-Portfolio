import type { LucideIcon } from "lucide-react";
import { ExternalLink, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";

const RESUME_URL =
  "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing";

interface Channel {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  Icon: LucideIcon;
}

const primary: Channel[] = [
  {
    title: "Email",
    description: "Best way to contact me for work inquiries",
    linkLabel: "jaidityadev1402@gmail.com",
    href: "mailto:jaidityadev1402@gmail.com",
    Icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    linkLabel: "linkedin.com/in/jaidityadev",
    href: "https://www.linkedin.com/in/jaidityadev/",
    Icon: Linkedin,
  },
];

const secondary: Channel[] = [
  {
    title: "GitHub",
    description: "Code and projects",
    linkLabel: "@jaidityadev",
    href: "https://github.com/jaidityadev",
    Icon: Github,
  },
  {
    title: "Research",
    description: "Peer-reviewed publications",
    linkLabel: "Publications",
    href: "/about#publications",
    Icon: FileText,
  },
  {
    title: "Resume",
    description: "Full professional experience",
    linkLabel: "View resume",
    href: RESUME_URL,
    Icon: FileText,
  },
  {
    title: "ORCID",
    description: "Researcher profile",
    linkLabel: "0009-0005-2095-4383",
    href: "https://orcid.org/0009-0005-2095-4383",
    Icon: ExternalLink,
  },
];

/**
 * The whole card is the target, so the control and the thing it affects are
 * the same object. Every card is built the same way, which means they all
 * behave the same way too.
 */
function ChannelCard({ channel }: { channel: Channel }) {
  const { title, description, linkLabel, href, Icon } = channel;
  const external = href.startsWith("http");

  const body = (
    <Card className="pressable flex h-full flex-col">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex items-center gap-2 pt-0">
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
        {/* Wrap between words, never mid-token. */}
        <span className="min-w-0 break-words text-sm text-primary">
          {linkLabel}
        </span>
      </CardContent>
    </Card>
  );

  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="block h-full rounded-xl"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full rounded-xl">
      {body}
    </Link>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                Let&apos;s connect
              </h1>
              <p className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Joining Deloitte Canada&apos;s Data &amp; AI practice in
                September 2026. Always happy to talk production ML, agentic
                systems, or forecasting research. Fastest reply by email.
              </p>
            </FadeIn>

            <StaggerIn
              className="mb-14 grid gap-6 md:grid-cols-2"
              staggerDelay={0.1}
            >
              {primary.map((channel) => (
                <div key={channel.title} className="h-full">
                  <ChannelCard channel={channel} />
                </div>
              ))}
            </StaggerIn>

            <FadeIn delay={0.2}>
              <h2 className="mb-6 text-2xl font-bold">Elsewhere</h2>
            </FadeIn>

            <StaggerIn
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.08}
              delay={0.25}
            >
              {secondary.map((channel) => (
                <div key={channel.title} className="h-full">
                  <ChannelCard channel={channel} />
                </div>
              ))}
            </StaggerIn>

            <FadeIn delay={0.3} className="mt-20 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Get in touch
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Hiring, collaborating, or just curious about the work? I&apos;d
                love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="mailto:jaidityadev1402@gmail.com">
                    <Mail className="mr-1 h-4 w-4" />
                    Send a message
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/jaidityadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-1 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
