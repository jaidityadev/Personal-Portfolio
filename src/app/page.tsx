import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import HoverScale from "@/components/animations/hover-scale";
import PageTransition from "@/components/animations/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-muted bg-muted">
              <Image
                src="/images/profile.jpg"
                alt="Jaiditya Dev"
                width={160}
                height={160}
                className="object-cover"
              />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m Jaiditya Dev
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mx-auto max-w-2xl">
                Data Scientist | Full Stack Developer | Data Analyst
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild variant="default" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="flex items-center gap-2 mb-8">
                <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="size-2 rounded-full bg-primary" />
                </div>
                <h2 className="text-sm font-medium uppercase text-muted-foreground">
                  About Me
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Data Science & Statistical Analysis
              </h2>
              <p className="text-muted-foreground mb-12 max-w-3xl">
                Data Science student specializing in statistical analysis, machine learning, and R programming, with experience in research, teaching, and real-world data applications.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Background */}
              <FadeIn delay={0.2} direction="up">
                <HoverScale>
                  <Card className="bg-card/50 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-500/10 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500"
                          >
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                          </svg>
                        </span>
                        <CardTitle className="text-lg">Background</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-sm text-muted-foreground">
                        Currently pursuing an H.B.Sc. in Applied Statistics with a minor in Computer Science and Mathematics at the University of Toronto. Recipient of the Lester B. Pearson International Scholarship (Full-Ride) and a Dean's List Scholar.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>

              {/* AI & Machine Learning */}
              <FadeIn delay={0.3} direction="up">
                <HoverScale>
                  <Card className="bg-card/50 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-purple-500/10 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-purple-500"
                          >
                            <path d="M12 2H2v10h10V2Z" />
                            <path d="M22 2h-5v5h5V2Z" />
                            <path d="M22 12h-5v10h5V12Z" />
                            <path d="M12 12H7v5h5v-5Z" />
                            <path d="M7 17H2v5h5v-5Z" />
                          </svg>
                        </span>
                        <CardTitle className="text-lg">Machine Learning</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Classification Models</Badge>
                        <Badge variant="secondary">Ensemble Forecasting</Badge>
                        <Badge variant="secondary">Predictive Modeling</Badge>
                        <Badge variant="secondary">ARIMA</Badge>
                        <Badge variant="secondary">CART</Badge>
                        <Badge variant="secondary">Random Forest</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>

              {/* Programming */}
              <FadeIn delay={0.4} direction="up">
                <HoverScale>
                  <Card className="bg-card/50 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-500/10 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                          >
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                          </svg>
                        </span>
                        <CardTitle className="text-lg">Programming</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">R</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">SQL</Badge>
                        <Badge variant="secondary">PyTorch</Badge>
                        <Badge variant="secondary">TensorFlow</Badge>
                        <Badge variant="secondary">Flask</Badge>
                        <Badge variant="secondary">HTML/CSS</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>

              {/* Data Science */}
              <FadeIn delay={0.5} direction="up">
                <HoverScale>
                  <Card className="bg-card/50 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-red-500/10 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-500"
                          >
                            <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10Z" />
                          </svg>
                        </span>
                        <CardTitle className="text-lg">Data Science</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Statistical Modeling</Badge>
                        <Badge variant="secondary">Data Visualization</Badge>
                        <Badge variant="secondary">Pandas</Badge>
                        <Badge variant="secondary">NumPy</Badge>
                        <Badge variant="secondary">scikit-learn</Badge>
                        <Badge variant="secondary">Hugging Face</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <div className="flex justify-center mt-10">
                <Button asChild variant="outline">
                  <Link href="/about">Learn More About Me →</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground mb-12">
                A selection of my recent work in data science and machine learning
              </p>
            </FadeIn>

            <StaggerIn className="space-y-8" delay={0.1} staggerDelay={0.2}>
              {/* Project 1 */}
              <HoverScale scale={1.01}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted aspect-video flex items-center justify-center">
                      <p className="text-muted-foreground">Disease Prediction Model</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        Heterogeneous Ensemble Forecasting for Disease Prediction
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Developed machine learning models to predict the spread of diseases using ensemble-based forecasting techniques. Published in a peer-reviewed journal.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge>R</Badge>
                        <Badge>Ensemble Forecasting</Badge>
                        <Badge>CART</Badge>
                        <Badge>ARIMA</Badge>
                        <Badge>NNAR</Badge>
                        <Badge>CTREE</Badge>
                      </div>
                      <div className="space-x-4">
                        <Button variant="outline" asChild>
                          <Link href="https://doi.org/10.1007/s00354-020-00119-7">
                            View Publication
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverScale>

              {/* Project 2 */}
              <HoverScale scale={1.01}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted aspect-video flex items-center justify-center">
                      <p className="text-muted-foreground">Time Series Forecasting</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        ARIMA Modelling for Time Series Forecasting
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Researched efficient techniques to forecast time series data using the ARIMA Modelling Techniques. This project focused on improving forecasting accuracy.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge>R</Badge>
                        <Badge>Forecasting Algorithms</Badge>
                        <Badge>ARIMA</Badge>
                        <Badge>Time Series Analysis</Badge>
                      </div>
                      <div className="space-x-4">
                        <Button variant="outline" asChild>
                          <Link href="https://doi.org/10.37418/amsj.9.6.75">
                            View Publication
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverScale>
            </StaggerIn>

            <FadeIn delay={0.6}>
              <div className="flex justify-center mt-10">
                <Button variant="outline" asChild>
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
