import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import HoverScale from "@/components/animations/hover-scale";
import { Button } from "@/components/ui/button";
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
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">JavaScript (ES6+)</Badge>
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">R</Badge>
                          <Badge variant="secondary">Jinja</Badge>
                          <Badge variant="secondary">Kotlin</Badge>
                          <Badge variant="secondary">SAS</Badge>
                          <Badge variant="secondary">SQL</Badge>
                          <Badge variant="secondary">HTML/CSS</Badge>
                          <Badge variant="secondary">HTML5 & CSS3</Badge>
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
                          <Badge variant="secondary">React.js</Badge>
                          <Badge variant="secondary">Next.js</Badge>
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
                          <Badge variant="secondary">Tailwind CSS</Badge>
                          <Badge variant="secondary">Framer Motion</Badge>
                          <Badge variant="secondary">Shadcn/UI</Badge>
                          <Badge variant="secondary">Radix UI</Badge>
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
                        <h3 className="text-xl font-bold">Research Assistant</h3>
                        <div className="text-muted-foreground"><span>May 2023 – Aug 2023</span></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">University of Toronto, Mississauga</p>
                        <div className="text-muted-foreground"><span>Mississauga, ON</span></div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Conducted research on causal inference models with Prof. Sonya Allin.</li>
                        <li>Authored literature reviews and presented findings at lab meetings.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">LearnAI Program Teaching Assistant</h3>
                        <div className="text-muted-foreground"><span>Oct 2022 – Apr 2023</span></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">UofT AI</p>
                        <div className="text-muted-foreground"><span>Toronto, ON</span></div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>
                          Delivered tutorials on <span className="font-medium text-foreground">ML</span>,{" "}
                          <span className="font-medium text-foreground">neural networks</span>, and{" "}
                          <span className="font-medium text-foreground">computer vision</span>.
                        </li>
                        <li>
                          Mentored students on <span className="font-medium text-foreground">AI projects</span>,
                          fostering <span className="font-medium text-foreground">curiosity</span> and{" "}
                          <span className="font-medium text-foreground">skills</span>.
                        </li>
                        <li>
                          Assessed assignments and provided{" "}
                          <span className="font-medium text-foreground">constructive feedback</span>.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">President, UTM Residence Council</h3>
                        <div className="text-muted-foreground"><span>May 2022 – Apr 2024</span></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className="font-medium">University of Toronto Mississauga</p>
                        <div className="text-muted-foreground"><span>Mississauga, ON</span></div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>
                          Drove initiatives to <span className="font-medium text-foreground">enhance residence life</span> and
                          <span className="font-medium text-foreground">smooth transitions for new students</span>.
                        </li>
                        <li>
                          Led a team to <span className="font-medium text-foreground">organize community‑building events</span> and
                          <span className="font-medium text-foreground">coordinate sub‑teams for maximum impact</span>.
                        </li>
                        <li>
                          Served as a <span className="font-medium text-foreground">voting member on Food Quality Services</span> to
                          <span className="font-medium text-foreground">improve campus dining</span>.
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

                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">Summer Intern, SMEV</h3>
                        <div className="text-muted-foreground"><span>Jun 2019 – Jun 2019</span></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <Link
                          href="https://www.smev.in/"
                          target="_blank"
                          className="font-medium text-foreground hover:underline"
                        >
                          Society of Manufacturers of Electric Vehicle
                        </Link>
                        <div className="text-muted-foreground"><span>New Delhi, IN</span></div>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>
                          <span className="font-medium text-foreground">
                            Analyzed the Indian electric mobility value chain
                          </span> and <span className="font-medium text-foreground">market incentives</span>.
                        </li>
                        <li>
                          Assisted in <span className="font-medium text-foreground">research on battery chemistries</span> and
                          <span className="font-medium text-foreground"> policy impacts on EV adoption</span>.
                        </li>
                        <li>
                          <span className="font-medium text-foreground">Collaborated cross‑functionally</span> to develop
                          <span className="font-medium text-foreground">
                            recommendations for two‑ and three‑wheeler transitions
                          </span>.
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

                {/* Health TrueInfo */}
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">
                          Health TrueInfo: A multilingual Android app and social media approach in tackling COVID-19 vaccine misinformation and hesitancy in Bolivia, India, and Canada
                        </h3>
                        <div className="text-muted-foreground">
                          <span>February 2022</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>University of Toronto Journal of Public Health</span>
                      </div>
                      <p className="text-foreground mb-4">
                        Developed and evaluated a multilingual Android app alongside targeted social media campaigns, achieving measurable reductions in vaccine hesitancy across three countries.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <Link
                            href="https://doi.org/10.33137/utjph.v9999i1.38113"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            https://doi.org/10.33137/utjph.v9999i1.38113
                          </Link>
                        </li>
                      </ul>

                      {/* Add download button */}
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link
                            href="https://utjph.com/index.php/utjph/article/view/38113/29116"
                            target="_blank"
                          >
                            Download PDF
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>

                {/* IoT Time Series Survey */}
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      {/* title + meta */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">
                          Time Series Forecasting Techniques for Internet of Things: A Survey
                        </h3>
                        <div className="text-muted-foreground">
                          <span>January 2022</span>
                        </div>
                      </div>

                      {/* source info */}
                      <div className="text-muted-foreground mb-4">
                        <span>
                          In Handbook of Research on Machine Learning Foundations and Applications (Book Chapter)
                        </span>
                      </div>

                      {/* description */}
                      <p className="text-foreground mb-4">
                        Provides a comprehensive overview of time‑series forecasting methods, challenges, and enabling technologies for large‑scale IoT deployments.
                      </p>

                      {/* DOI link */}
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <Link
                            href="https://doi.org/10.1201/9781003277330-13"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            https://doi.org/10.1201/9781003277330-13
                          </Link>
                        </li>
                      </ul>

                      {/* download button */}
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link
                            href="https://drive.google.com/file/d/1KcsjoFHFaHqDlrcvc3WPUNjAn0bmwDI4/view?usp=sharing"
                            target="_blank"
                          >
                            Download PDF
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>


                {/* Ensemble Forecasting */}
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">
                          A Heterogeneous Ensemble Forecasting Model for Disease Prediction
                        </h3>
                        <div className="text-muted-foreground">
                          <span>January 2021</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>R, Ensemble Forecasting, CART, RPART, ARIMA, NNAR, CTREE</span>
                      </div>
                      <p className="text-foreground mb-4">
                        Combined multiple forecasting algorithms into one ensemble to significantly improve the accuracy of outbreak predictions for diseases like dengue and tuberculosis.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <a
                            href="https://doi.org/10.1007/s00354-020-00119-7"
                            className="text-primary hover:underline"
                          >
                            https://doi.org/10.1007/s00354-020-00119-7
                          </a>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link
                            href="https://link.springer.com/content/pdf/10.1007/s00354-020-00119-7.pdf"
                            target="_blank"
                          >
                            Download PDF
                          </Link>
                        </Button>
                      </div>

                    </CardContent>
                  </Card>
                </HoverScale>

                {/* ARIMA Modelling */}
                <HoverScale scale={1.01}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">
                          ARIMA Modelling for Time Series Forecasting
                        </h3>
                        <div className="text-muted-foreground">
                          <span>December 2020</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground mb-4">
                        <span>R, Forecasting Algorithms, ARIMA</span>
                      </div>
                      <p className="text-foreground mb-4">
                        Explored ARIMA-based techniques to optimize parameter selection and improve forecasting precision across diverse datasets.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-3">
                        <li>
                          <a
                            href="https://doi.org/10.37418/amsj.9.6.75"
                            className="text-primary hover:underline"
                          >
                            https://doi.org/10.37418/amsj.9.6.75
                          </a>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link
                            href="https://www.research-publication.com/amsj/uploads/papers/vol-09/iss-06/AMSJ-2020-N6-75.pdf"
                            target="_blank"
                          >
                            Download PDF
                          </Link>
                        </Button>
                      </div>
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
