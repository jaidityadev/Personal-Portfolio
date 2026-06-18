import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import SectionHeading from "@/components/section-heading";

const skillTiers = [
  {
    tier: "Expert",
    description: "The tools I build and ship with every day.",
    skills: [
      "Python",
      "R",
      "SQL",
      "TypeScript",
      "React",
      "scikit-learn",
      "Pandas / NumPy",
      "Statistical Modeling",
      "Time Series Forecasting",
    ],
  },
  {
    tier: "Proficient",
    description: "Production experience on real systems.",
    skills: [
      "Java",
      "Spring Boot",
      "PyTorch",
      "Hugging Face",
      "MongoDB",
      "Docker",
      "MCP / Agentic Architectures",
      "RAG Pipelines",
      "Next.js",
      "Flask",
    ],
  },
  {
    tier: "Familiar",
    description: "Used in coursework, research, or side projects.",
    skills: [
      "TensorFlow",
      "Kotlin",
      "SAS",
      "Databricks",
      "caret",
      "JUnit",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

const experience = [
  {
    role: "Associate Application Developer",
    org: "ADP Canada",
    location: "Toronto, ON",
    period: "July 2025 – Present",
    bullets: [
      <>
        <span className="font-medium text-foreground">
          Re-architected a production tax assistant
        </span>{" "}
        from a custom RAG orchestrator to an agentic system (Strands Agents)
        routing across 5 tool endpoints — improving modularity, routing
        accuracy, and observability.
      </>,
      <>
        <span className="font-medium text-foreground">
          Built an MCP server
        </span>{" "}
        over enterprise REST APIs, enabling structured, auditable tool use for
        LLM assistants in production.
      </>,
      <>
        <span className="font-medium text-foreground">
          Own ML document pipelines
        </span>{" "}
        — classification and role-based routing that live HR and payroll
        operations depend on daily.
      </>,
    ],
  },
  {
    role: "Teaching Assistant",
    org: "University of Toronto, Mississauga",
    location: "Mississauga, ON",
    period: "January 2025 – April 2025",
    bullets: [
      <>
        Led weekly tutorials for{" "}
        <span className="font-medium text-foreground">
          STA107: Introduction to Probability and Modelling
        </span>{" "}
        , covering discrete distributions, sampling, and statistical inference.
      </>,
      <>
        Coached students through{" "}
        <span className="font-medium text-foreground">R programming</span> for
        probability simulation, and assessed submissions against course
        learning outcomes.
      </>,
    ],
  },
  {
    role: "Data Science Intern",
    org: "ADP Canada",
    location: "Toronto, ON",
    period: "May 2024 – August 2024",
    bullets: [
      <>
        Built an{" "}
        <span className="font-medium text-foreground">
          ML classification model for tax form types
        </span>{" "}
        over a real-time dataset of{" "}
        <span className="font-medium text-foreground">800,000+ entries</span>.
      </>,
      <>
        Refined keyword-search algorithms and shipped stakeholder-facing
        visualizations that sped up analysis.
      </>,
      <>
        Partnered with cross-functional teams to turn data into operational
        decisions.
      </>,
    ],
  },
  {
    role: "Research Assistant",
    org: "University of Toronto, Mississauga",
    location: "Mississauga, ON",
    period: "May 2023 – August 2023",
    bullets: [
      <>
        Conducted research on{" "}
        <span className="font-medium text-foreground">
          causal inference models
        </span>{" "}
        with Prof. Sonya Allin; authored literature reviews and presented
        findings at lab meetings.
      </>,
    ],
  },
  {
    role: "LearnAI Program Teaching Assistant",
    org: "UofT AI",
    location: "Toronto, ON",
    period: "October 2022 – April 2023",
    bullets: [
      <>
        Delivered tutorials on{" "}
        <span className="font-medium text-foreground">
          ML, neural networks, and computer vision
        </span>
        ; mentored student AI projects and provided assessment feedback.
      </>,
    ],
  },
  {
    role: "President, UTM Residence Council",
    org: "University of Toronto Mississauga",
    location: "Mississauga, ON",
    period: "May 2022 – April 2024",
    bullets: [
      <>
        Led a{" "}
        <span className="font-medium text-foreground">25-person team</span>{" "}
        delivering events for{" "}
        <span className="font-medium text-foreground">200+ attendees</span>,
        managing{" "}
        <span className="font-medium text-foreground">
          $20,000+ annual budgets
        </span>{" "}
        and sponsorships over two years.
      </>,
      <>
        Served as a voting member on Food Quality Services to improve campus
        dining.
      </>,
    ],
  },
  {
    role: "Strategy Analyst (Summer Intern)",
    org: "Ernst & Young LLC",
    location: "New Delhi, India",
    period: "May 2022 – August 2022",
    bullets: [
      <>
        Evaluated the{" "}
        <span className="font-medium text-foreground">
          Asia Pacific 3D printing market
        </span>{" "}
        for the I.I.T. Delhi Incubation Center using statistical modeling and
        market assessments.
      </>,
      <>
        Built data-driven models optimizing filament procurement through{" "}
        <span className="font-medium text-foreground">
          regression analysis and trend forecasting
        </span>
        .
      </>,
    ],
  },
  {
    role: "Machine Learning Research Intern",
    org: "National Institute of Technology",
    location: "New Delhi, India",
    period: "September 2019 – April 2021",
    bullets: [
      <>
        Led research on{" "}
        <span className="font-medium text-foreground">
          dengue and tuberculosis outbreak prediction
        </span>{" "}
        using ensemble-based forecasting, later published in Springer&apos;s{" "}
        <span className="font-medium text-foreground">
          New Generation Computing
        </span>
        .
      </>,
      <>
        Co-authored and presented papers at international venues, including the
        International Conference on AI and the Swiss OpenTox Conference.
      </>,
    ],
  },
];

const publications = [
  {
    title:
      "Health TrueInfo: A multilingual Android app and social media approach in tackling COVID-19 vaccine misinformation and hesitancy in Bolivia, India, and Canada",
    venue: "University of Toronto Journal of Public Health",
    date: "February 2022",
    description:
      "Developed and evaluated a multilingual Android app alongside targeted social media campaigns, achieving measurable reductions in vaccine hesitancy across three countries.",
    doi: "https://doi.org/10.33137/utjph.v9999i1.38113",
    pdf: "https://utjph.com/index.php/utjph/article/view/38113/29116",
  },
  {
    title: "Time Series Forecasting Techniques for Internet of Things: A Survey",
    venue:
      "Handbook of Research on Machine Learning Foundations and Applications (CRC Press, Book Chapter)",
    date: "January 2022",
    description:
      "A comprehensive overview of time-series forecasting methods, challenges, and enabling technologies for large-scale IoT deployments.",
    doi: "https://doi.org/10.1201/9781003277330-13",
    pdf: "https://drive.google.com/file/d/1KcsjoFHFaHqDlrcvc3WPUNjAn0bmwDI4/view?usp=sharing",
  },
  {
    title: "A Heterogeneous Ensemble Forecasting Model for Disease Prediction",
    venue: "New Generation Computing (Springer)",
    date: "January 2021",
    description:
      "Combined multiple forecasting algorithms into one ensemble to significantly improve the accuracy of outbreak predictions for diseases like dengue and tuberculosis.",
    doi: "https://doi.org/10.1007/s00354-020-00119-7",
    pdf: "https://link.springer.com/content/pdf/10.1007/s00354-020-00119-7.pdf",
  },
  {
    title: "ARIMA Modelling for Time Series Forecasting",
    venue: "Advances in Mathematics: Scientific Journal",
    date: "December 2020",
    description:
      "Explored ARIMA-based techniques to optimize parameter selection and improve forecasting precision across diverse datasets.",
    doi: "https://doi.org/10.37418/amsj.9.6.75",
    pdf: "https://www.research-publication.com/amsj/uploads/papers/vol-09/iss-06/AMSJ-2020-N6-75.pdf",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <FadeIn>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-primary">01</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  About
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                The whole system, not just the model.
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  I&apos;m{" "}
                  <strong className="text-foreground">Jaiditya Dev</strong>, a
                  data scientist and AI engineer who bridges technical depth and
                  business impact. I co-authored peer-reviewed ML research before
                  finishing high school, then earned a full-ride{" "}
                  <strong className="text-foreground">
                    Pearson Scholarship
                  </strong>{" "}
                  to study Applied Statistics at the University of Toronto.
                </p>
                <p>
                  Today I ship production AI at{" "}
                  <strong className="text-foreground">ADP Canada</strong>:
                  classification pipelines over 800,000+ tax records, an MCP
                  server that gives LLMs structured access to enterprise APIs,
                  and a tax assistant migrated from RAG to an agentic
                  architecture. The goal never changes — statistical rigor where
                  it matters, engineering discipline everywhere else, and a
                  finished product at the end.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-16">
                <Badge className="font-mono text-xs">Pearson Scholar</Badge>
                <Badge className="font-mono text-xs">
                  4× Published Researcher
                </Badge>
                <Badge className="font-mono text-xs">
                  Production AI @ ADP
                </Badge>
                <Badge className="font-mono text-xs">
                  Full-Stack ML Builder
                </Badge>
              </div>
            </FadeIn>

            {/* Education */}
            <section className="mb-16">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="card-premium p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">
                      University of Toronto
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      Sep 2021 – June 2025
                    </span>
                  </div>
                  <p className="font-medium mb-3">
                    H.B.Sc. in Applied Statistics, Minors in Computer Science
                    and Mathematics
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">
                      Awards:
                    </span>{" "}
                    Lester B. Pearson International Scholarship (full-ride),
                    Dean&apos;s List Scholar, UofT Student Engagement Award
                    2021.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Also certified:
                    </span>{" "}
                    Stanford Machine Learning Specialization, IBM Applied Data
                    Science with R, Duke Data Analysis with R, Google Data
                    Analytics.{" "}
                    <Link
                      href="https://www.linkedin.com/in/jaidityadev/details/certifications/"
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      All certifications →
                    </Link>
                  </p>
                </div>
              </FadeIn>
            </section>

            {/* Skills Matrix */}
            <section className="mb-16">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
              </FadeIn>
              <div className="space-y-4">
                {skillTiers.map((tier, i) => (
                  <FadeIn key={tier.tier} delay={0.1 + i * 0.08} direction="up">
                    <div className="card-premium p-6">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="text-lg font-bold">{tier.tier}</h3>
                        <span className="text-sm text-muted-foreground">
                          {tier.description}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {tier.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="font-mono text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-16">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
              </FadeIn>
              <StaggerIn className="space-y-6" staggerDelay={0.08}>
                {experience.map((job) => (
                  <div key={`${job.role}-${job.org}`} className="card-premium p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <p className="font-medium text-primary">{job.org}</p>
                      <span className="text-sm text-muted-foreground">
                        {job.location}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </StaggerIn>
            </section>

            {/* Publications */}
            <section id="publications" className="mb-12 scroll-mt-24">
              <FadeIn>
                <h2 className="text-2xl font-bold mb-2">Publications</h2>
                <p className="text-muted-foreground mb-6">
                  Peer-reviewed research in forecasting, machine learning, and
                  public health.{" "}
                  <Link
                    href="https://orcid.org/0009-0005-2095-4383"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    ORCID profile →
                  </Link>
                </p>
              </FadeIn>
              <StaggerIn className="space-y-6" staggerDelay={0.1}>
                {publications.map((pub) => (
                  <div key={pub.doi} className="card-premium p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold">{pub.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {pub.date}
                      </span>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                      {pub.venue}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={pub.doi} target="_blank" rel="noopener noreferrer">
                          DOI
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          PDF
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </StaggerIn>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
