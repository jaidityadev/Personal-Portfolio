import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import HoverScale from "@/components/animations/hover-scale";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-foreground mb-6">
              Hi there! I’m <strong>Jaiditya Dev</strong>, a Pearson Scholar and soon‑to‑graduate Data Science student at UofT Mississauga. 
              Ever since building my first word cloud in Python, I’ve been hooked on turning messy datasets into clear, impactful insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              <Badge>🥇 Lester B. Pearson Scholar</Badge>
              <Badge>🔍 NLP & ML Enthusiast</Badge>
              <Badge>📝 Published Researcher</Badge>
              <Badge>💻 Data Scientist</Badge>

            </div>
          </FadeIn>

            {/* Education */}
            <section className="mb-12">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid gap-6">
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-bold">University of Toronto</h3>
                            <div className="text-muted-foreground">
                              <span>Mississauga, ON</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <p className="font-medium">
                              H.B.Sc. in Applied Statistics, Minor in Computer Science and Mathematics
                            </p>
                            <div className="text-muted-foreground">
                              <span>Sep. 2021 - June 2025</span>
                            </div>
                          </div>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>
                              <span className="font-medium text-foreground">Awards:</span> Lester B. Pearson International Scholarship (Full-Ride Scholarship),
                              UofT Student Engagement Award 2021, Dean&apos;s List Scholar
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeIn>
            </section>

            {/* Certifications */}
            <section className="mb-12">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Top Certifications */}
                <FadeIn delay={0.1} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">The Data Science Course: Complete Data Science Bootcamp 2024</h3>
                          <p className="text-muted-foreground mb-2">Udemy, Jun 2024</p>
                          <Link href="https://ude.my/UC-27613d14-da18-446f-858e-d905f8cfc4a8" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">Applied Data Science with R - Specialization</h3>
                          <p className="text-muted-foreground mb-2">IBM, Aug 2023</p>
                          <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/YVU2TPUC68W8" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">Machine Learning Specialization</h3>
                          <p className="text-muted-foreground mb-2">Stanford University, Jul 2023</p>
                          <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/96T49RULC3XX" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">Duke University Specialization: Data Analysis with R</h3>
                          <p className="text-muted-foreground mb-2">Duke University, Jun 2023</p>
                          <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/AM52F7CQUVWA" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">Data Analysis with R Programming</h3>
                          <p className="text-muted-foreground mb-2">Google, Jun 2023</p>
                          <Link href="https://www.coursera.org/account/accomplishments/certificate/MF7YALYSXBFS" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                  <HoverScale>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">Prepare Data for Exploration</h3>
                          <p className="text-muted-foreground mb-2">Google, Jun 2023</p>
                          <Link href="https://www.coursera.org/account/accomplishments/certificate/5SZ9Y7EHLZN2" target="_blank" className="text-primary hover:underline">
                            View Credential
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                See more on <Link href="https://www.linkedin.com/in/jaidityadev/details/certifications/" target="_blank" className="text-primary hover:underline">LinkedIn</Link>.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-12">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                <FadeIn delay={0.1} direction="up">
                  <HoverScale>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Languages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Java</Badge>
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">R</Badge>
                          <Badge variant="secondary">Jinja</Badge>
                          <Badge variant="secondary">Kotlin</Badge>
                          <Badge variant="secondary">SAS</Badge>
                          <Badge variant="secondary">SQL</Badge>
                          <Badge variant="secondary">HTML/CSS</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                  <HoverScale>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Frameworks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Flask</Badge>
                          <Badge variant="secondary">JUnit</Badge>
                          <Badge variant="secondary">WordPress</Badge>
                          <Badge variant="secondary">PyTorch</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                  <HoverScale>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Developer Tools</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Git</Badge>
                          <Badge variant="secondary">VS Code</Badge>
                          <Badge variant="secondary">Visual Studio</Badge>
                          <Badge variant="secondary">PyCharm</Badge>
                          <Badge variant="secondary">IntelliJ</Badge>
                          <Badge variant="secondary">R Studio</Badge>
                          <Badge variant="secondary">Android Studio</Badge>
                          <Badge variant="secondary">Databricks</Badge>
                          <Badge variant="secondary">Bitbucket</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                  <HoverScale>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Libraries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Pandas</Badge>
                          <Badge variant="secondary">NumPy</Badge>
                          <Badge variant="secondary">ARIMA</Badge>
                          <Badge variant="secondary">PyTorch</Badge>
                          <Badge variant="secondary">TensorFlow</Badge>
                          <Badge variant="secondary">Random Forest</Badge>
                          <Badge variant="secondary">CARAT</Badge>
                          <Badge variant="secondary">scikit-learn</Badge>
                          <Badge variant="secondary">Hugging Face</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </FadeIn>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
              </FadeIn>
              <StaggerIn className="space-y-8" staggerDelay={0.15}>
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Teaching Assistant</h3>
                        <div className="text-muted-foreground">
                          <span>January, 2025 - Present</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">University of Toronto, Mississauga</p>
                        <div className="text-muted-foreground">
                          <span>Mississauga, ON</span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          Facilitated weekly tutorials for <span className="font-medium text-foreground">STA107H5S: Introduction to Probability and Modelling</span>, engaging students in activities on discrete distributions, sampling, and statistical inference.
                        </li>
                        <li>
                          Provided guidance on <span className="font-medium text-foreground">R programming</span>, supporting students in simulating probabilities and applying statistical concepts.
                        </li>
                        <li>
                          Assessed student submissions and provided feedback on assignments, ensuring alignment with course learning outcomes.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Data Science Intern</h3>
                        <div className="text-muted-foreground">
                          <span>May 2024 - August 2024</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">ADP Canada</p>
                        <div className="text-muted-foreground">
                          <span>Toronto, ON</span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          Developed a <span className="font-medium text-foreground">machine learning classification model</span> to identify tax form types, managing a <span className="font-medium text-foreground">real-time dataset of 800,000+ entries</span>.
                        </li>
                        <li>
                          Refined <span className="font-medium text-foreground">keyword search algorithms</span> and deployed <span className="font-medium text-foreground">data visualization</span> tools, such as <span className="font-medium text-foreground">word clouds</span>, for enhanced data analysis and stakeholder engagement.
                        </li>
                        <li>
                          Collaborated with cross-functional teams to integrate <span className="font-medium text-foreground">data-driven solutions</span>, boosting strategic decision-making and <span className="font-medium text-foreground">operational efficiency</span>.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Strategy Analyst (Summer Intern)</h3>
                        <div className="text-muted-foreground">
                          <span>May 2022 - August 2022</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">Ernst and Young LLC.</p>
                        <div className="text-muted-foreground">
                          <span>New Delhi, India</span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          Collaborated within the EY Strategy Analysis Team to study the evolving <span className="font-medium text-foreground">Asia Pacific 3D Printing market</span>.
                        </li>
                        <li>
                          Utilized <span className="font-medium text-foreground">statistical modeling and market assessments</span> to evaluate the market's feasibility for the <span className="font-medium text-foreground">I.I.T. Delhi Incubation Center</span>.
                        </li>
                        <li>
                          Developed <span className="font-medium text-foreground">data-driven models</span> for optimizing <span className="font-medium text-foreground">3D Printing filament procurement</span> strategies through <span className="font-medium text-foreground">regression analysis</span> and <span className="font-medium text-foreground">trend forecasting</span>.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Machine Learning Research Intern</h3>
                        <div className="text-muted-foreground">
                          <span>September 2019 - April 2021</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">National Institute of Technology</p>
                        <div className="text-muted-foreground">
                          <span>New Delhi, India</span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          Led research on the <span className="font-medium text-foreground">prediction of Dengue and Tuberculosis</span> using <span className="font-medium text-foreground">ensemble-based forecasting techniques</span>, contributing to proactive public health measures.
                        </li>
                        <li>
                          Co-authored and presented research papers at international conferences, including the <span className="font-medium text-foreground">International Conference on AI</span> and the <span className="font-medium text-foreground">Swiss OpenTox Conference</span>.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerIn>
            </section>

            {/* Publications */}
            <section className="mb-12">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Publications</h2>
              </FadeIn>
              <StaggerIn className="space-y-6" staggerDelay={0.2}>

              <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Health TrueInfo: A multilingual Android app and social media approach in tackling COVID-19 vaccine misinformation and hesitancy in Bolivia, India, and Canada</h3>
                        <div className="text-muted-foreground">
                          <span>February 2022</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>University of Toronto Journal of Public Health</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <Link href="https://doi.org/10.33137/utjph.v9999i1.38113" target="_blank" className="text-primary hover:underline">
                            View Publication
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>
                
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">A Heterogeneous Ensemble Forecasting Model for Disease Prediction</h3>
                        <div className="text-muted-foreground">
                          <span>January 2021</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>R, Ensemble Forecasting, CART, RPART, ARIMA, NNAR, CTREE</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <a href="https://doi.org/10.1007/s00354-020-00119-7" className="text-primary hover:underline">
                            https://doi.org/10.1007/s00354-020-00119-7
                          </a>
                        </li>
                        <li>
                          Researched in Machine Learning based Ensemble Forecasting models, to predict the spread of various diseases
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">ARIMA Modelling for Time Series Forecasting</h3>
                        <div className="text-muted-foreground">
                          <span>December 2020</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>R, Forecasting Algorithms, ARIMA</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <a href="https://doi.org/10.37418/amsj.9.6.75" className="text-primary hover:underline">
                            https://doi.org/10.37418/amsj.9.6.75
                          </a>
                        </li>
                        <li>
                          Researched in efficient techniques to forecast data sets using the ARIMA Modelling Techniques.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerIn>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
