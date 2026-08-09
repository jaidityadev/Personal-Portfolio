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
    role: "Business Analyst, Data & AI",
    org: "Deloitte Canada",
    location: "Toronto, ON",
    period: "Starting September 2026",
    bullets: [
      <>
        Joining the{" "}
        <span className="font-medium text-foreground">Data & AI practice</span>{" "}
        to work on AI-enabled delivery across client engagements: agentic and
        AI-integrated solutions, cloud engineering, and technical solutioning.
      </>,
    ],
  },
  {
    role: "Associate Application Developer",
    org: "ADP Canada",
    location: "Toronto, ON",
    period: "July 2025 – September 2026",
    bullets: [
      <>
        <span className="font-medium text-foreground">
          Re-architected a production tax assistant
        </span>{" "}
        from custom RAG to an agentic design (Strands Agents) routing across 5
        tool endpoints, improving modularity, routing accuracy, and
        observability.
      </>,
      <>
        <span className="font-medium text-foreground">Built an MCP server</span>{" "}
        wrapping enterprise REST endpoints for structured, auditable LLM tool-use
        in production.
      </>,
      <>
        <span className="font-medium text-foreground">
          Owned ML document workflows
        </span>
        : classification and routing pipelines that HR and payroll operations
        depend on daily.
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
          ML model classifying tax form types
        </span>{" "}
        over a real-time dataset of{" "}
        <span className="font-medium text-foreground">800,000+ entries</span>.
      </>,
      <>
        Refined keyword-search algorithms and shipped stakeholder-facing
        dashboards, speeding up analysis.
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
    role: "Strategy Analyst Intern",
    org: "Ernst & Young LLP",
    location: "New Delhi, India",
    period: "May 2022 – August 2022",
    bullets: [
      <>
        Influenced{" "}
        <span className="font-medium text-foreground">senior stakeholder</span>{" "}
        decisions, measured by adopted recommendations, by facilitating{" "}
        <span className="font-medium text-foreground">
          requirements-gathering workshops
        </span>{" "}
        and delivering{" "}
        <span className="font-medium text-foreground">executive-ready</span>{" "}
        narratives on complex technical topics.
      </>,
      <>
        Accelerated business-case development by building{" "}
        <span className="font-medium text-foreground">quantitative models</span>{" "}
        in <span className="font-medium text-foreground">Excel</span> and KPI
        storylines linking{" "}
        <span className="font-medium text-foreground">
          technology investment
        </span>{" "}
        to measurable business outcomes.
      </>,
      <>
        Identified{" "}
        <span className="font-medium text-foreground">
          digital transformation
        </span>{" "}
        and <span className="font-medium text-foreground">automation</span>{" "}
        opportunities by mapping current-state processes and shaping{" "}
        <span className="font-medium text-foreground">
          future-state modernization roadmaps
        </span>{" "}
        for enterprise clients.
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
          dengue and TB outbreak prediction
        </span>{" "}
        using ensemble forecasting, published in Springer&apos;s{" "}
        <span className="font-medium text-foreground">
          New Generation Computing
        </span>
        .
      </>,
      <>
        Co-authored and presented at international venues, incl. the
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
      "A multilingual Android app and targeted social campaigns that measurably reduced vaccine hesitancy across three countries.",
    doi: "https://doi.org/10.33137/utjph.v9999i1.38113",
    pdf: "https://utjph.com/index.php/utjph/article/view/38113/29116",
  },
  {
    title: "Time Series Forecasting Techniques for Internet of Things: A Survey",
    venue:
      "Handbook of Research on Machine Learning Foundations and Applications (CRC Press, Book Chapter)",
    date: "January 2022",
    description:
      "A survey of time-series forecasting methods, challenges, and enabling technologies for large-scale IoT.",
    doi: "https://doi.org/10.1201/9781003277330-13",
    pdf: "https://drive.google.com/file/d/1KcsjoFHFaHqDlrcvc3WPUNjAn0bmwDI4/view?usp=sharing",
  },
  {
    title: "A Heterogeneous Ensemble Forecasting Model for Disease Prediction",
    venue: "New Generation Computing (Springer)",
    date: "January 2021",
    description:
      "An ensemble of forecasting algorithms that significantly improved outbreak-prediction accuracy for dengue and tuberculosis.",
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
        <div className="container mx-auto">
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
                Data scientist &amp; AI engineer in Toronto.
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  I&apos;m{" "}
                  <strong className="text-foreground">Jaiditya Dev</strong>. At{" "}
                  <span className="text-foreground">ADP Canada</span> I built
                  production AI: classification pipelines over 3M+ live tax
                  records, an MCP server for enterprise LLM tooling, and the
                  agentic re-architecture of a production tax assistant. In
                  September 2026 I join{" "}
                  <span className="text-foreground">Deloitte Canada</span> as a
                  Business Analyst in the Data &amp; AI practice.
                </p>
                <p>
                  Before that: an Applied Statistics degree at the{" "}
                  <span className="text-foreground">University of Toronto</span>{" "}
                  (full-ride Pearson Scholar, minors in CS and Math), four
                  peer-reviewed publications in forecasting and public health
                  (the first before finishing high school), and 3+ years
                  teaching ML and statistics.
                </p>
              </div>
              {/* The headline fact leads; the rest support it rather than
                  competing with it for the same attention. */}
              <div className="flex flex-wrap gap-2 mb-16">
                <Badge className="font-mono text-xs">
                  Data &amp; AI @ Deloitte
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Full-Stack ML Builder
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  4× Published Researcher
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Pearson Scholar
                </Badge>
              </div>
            </FadeIn>

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
                    <ul className="list-hanging text-muted-foreground space-y-2 text-sm md:text-base">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </StaggerIn>
            </section>

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
