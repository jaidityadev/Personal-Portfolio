import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import HoverScale from "@/components/animations/hover-scale";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Feel free to reach out to discuss collaborations, research opportunities, or just to connect.
              </p>
            </FadeIn>

            <StaggerIn className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Best way to contact me for work inquiries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="mailto:jaiditya.dev@example.com"
                        className="text-primary hover:underline"
                      >
                        jaiditya.dev@example.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>

              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>LinkedIn</CardTitle>
                    <CardDescription>Connect with me professionally</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>
            </StaggerIn>

            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">More Ways to Connect</h2>
            </FadeIn>

            <StaggerIn className="grid md:grid-cols-3 gap-6" staggerDelay={0.1} delay={0.4}>
              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Check out my code and projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>

              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>Research</CardTitle>
                    <CardDescription>View my research publications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <Link
                        href="/projects"
                        className="text-primary hover:underline"
                      >
                        Research Publications
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>

              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>Blog</CardTitle>
                    <CardDescription>Read my thoughts on data science</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Medium Blog
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>
            </StaggerIn>

            <FadeIn delay={0.7} className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I&apos;m currently open to research collaborations, data science projects, and teaching opportunities in statistics and machine learning.
              </p>
              <Button size="lg" asChild className="animate-pulse">
                <a href="mailto:jaiditya.dev@example.com">Send a Message</a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
