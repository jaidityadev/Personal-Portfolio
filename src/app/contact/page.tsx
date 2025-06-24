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
                        href="mailto:jaidityadev1402@gmail.com"
                        className="text-primary hover:underline"
                      >
                        jaidityadev1402@gmail.com
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
                        href="https://www.linkedin.com/in/jaidityadev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        linkedin.com/in/jaidityadev
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>
            </StaggerIn>

            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">More Ways to Connect</h2>
            </FadeIn>

            <StaggerIn className="grid md:grid-cols-4 gap-6" staggerDelay={0.1} delay={0.4}>
            <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Check out my code and projects</CardDescription>
                  </CardHeader>
                  {/* reduce top‐padding and center contents */}
                  <CardContent className="pt-4">
                    <div className="flex flex-col items-center space-y-2">
                      {/* larger icon for emphasis */}
                      <Github className="h-6 w-6 text-muted-foreground" />
                      {/* center and wrap URL */}
                      <a
                        href="https://github.com/jaidityadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-all text-center"
                      >
                        github.com/jaidityadev
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
                      <Link href="/projects" className="text-primary hover:underline">
                        Research Publications
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>

              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>Resume</CardTitle>
                    <CardDescription>View my professional experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://drive.google.com/file/d/1ugwHznEzrnilO2pXeAgk8hEnJg3WScfj/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View Resume
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>

              <HoverScale>
                <Card>
                  <CardHeader>
                    <CardTitle>ORCID</CardTitle>
                    <CardDescription>View my ORCID researcher profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://orcid.org/0009-0005-2095-4383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        orcid.org/0009-0005-2095-4383
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>
            </StaggerIn>

            <FadeIn delay={0.7} className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're interested in research collaborations or looking to bring me on board for data science, software, or machine learning roles, I'd love to connect and explore how we can work together.
              </p>
              <div className="flex justify-center gap-4 mb-6">
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/jaidityadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/jaidityadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <Button size="lg" asChild className="animate-pulse">
                <a href="mailto:jaidityadev1402@gmail.com">Send a Message</a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
