import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import ProofBar from "@/components/proof-bar";
import SectionHeading from "@/components/section-heading";
import ForecastChart from "@/components/forecast-chart";
import DecodeText from "@/components/decode-text";
import ProjectCaseStudyCard, {
  type CaseStudyProject,
} from "@/components/project-case-study-card";

const RESUME_URL =
  "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing";

const pillars = [
  {
    title: "ML & Forecasting",
    description:
      "Statistical modeling, classification, and time-series forecasting on real production data.",
    tags: ["Python", "R", "scikit-learn", "PyTorch", "ARIMA"],
  },
  {
    title: "GenAI & Agentic Systems",
    description:
      "Production RAG pipelines and MCP servers giving LLMs structured access to enterprise tools.",
    tags: ["MCP", "Strands Agents", "RAG", "OpenAI API"],
  },
  {
    title: "Full-Stack Delivery",
    description:
      "From model to shipped product: APIs, dashboards, auth, and deployment.",
    tags: ["React", "TypeScript", "Spring Boot", "Docker"],
  },
];

const experience = [
  {
    role: "Business Analyst, Data & AI",
    org: "Deloitte Canada",
    period: "Starting Sep 2026",
    bullets: [
      <>
        Joining the{" "}
        <span className="font-medium text-foreground">Data & AI practice</span>{" "}
        in Toronto, working on AI-enabled delivery for client engagements.
      </>,
      <>
        Focus: agentic and AI-integrated solutions, cloud engineering, and
        technical solutioning alongside client teams.
      </>,
    ],
  },
  {
    role: "Associate Application Developer",
    org: "ADP Canada",
    period: "Jul 2025 – Sep 2026",
    bullets: [
      <>
        Re-architected a production tax assistant from custom RAG to an{" "}
        <span className="font-medium text-foreground">agentic design</span>{" "}
        routing across{" "}
        <span className="font-medium text-foreground">5 tool endpoints</span>.
      </>,
      <>
        Built an{" "}
        <span className="font-medium text-foreground">MCP server</span>{" "}
        wrapping enterprise REST endpoints for auditable LLM tool use in
        production.
      </>,
      <>
        Owned the ML classification and routing pipelines that HR and payroll
        operations depend on daily.
      </>,
    ],
  },
  {
    role: "Data Science Intern",
    org: "ADP Canada",
    period: "May 2024 – Aug 2024",
    bullets: [
      <>
        Built an ML model classifying tax form types over a real-time dataset
        of{" "}
        <span className="font-medium text-foreground">800,000+ records</span>.
      </>,
      <>
        Refined keyword-search algorithms and shipped stakeholder-facing
        dashboards.
      </>,
    ],
  },
  {
    role: "Strategy Analyst Intern",
    org: "Ernst & Young LLP",
    period: "May 2022 – Aug 2022",
    bullets: [
      <>
        Influenced senior stakeholder decisions by facilitating{" "}
        <span className="font-medium text-foreground">
          requirements-gathering workshops
        </span>{" "}
        and delivering executive-ready narratives on complex technical topics.
      </>,
      <>
        Built{" "}
        <span className="font-medium text-foreground">quantitative models</span>{" "}
        and KPI storylines linking technology investment to measurable business
        outcomes.
      </>,
      <>
        Mapped current-state processes into{" "}
        <span className="font-medium text-foreground">
          future-state modernization roadmaps
        </span>{" "}
        for enterprise clients.
      </>,
    ],
  },
  {
    role: "ML Research Intern",
    org: "National Institute of Technology",
    period: "Sep 2019 – Apr 2021",
    bullets: [
      <>
        Published ensemble-forecasting research for dengue and TB outbreak
        prediction in{" "}
        <span className="font-medium text-foreground">
          Springer&apos;s New Generation Computing
        </span>
        .
      </>,
    ],
  },
  {
    role: "Teaching Assistant, ML & Statistics",
    org: "University of Toronto · LearnAI",
    period: "2022 – 2025",
    bullets: [
      <>
        3+ years teaching probability, statistical inference, and machine
        learning — regression through neural networks.
      </>,
    ],
  },
];

const featuredProjects: CaseStudyProject[] = [
  {
    title: "Foliyo 2.0: AI-Powered Event Management Platform",
    category: "Full-Stack · GenAI",
    image: "/images/foliyo2.png",
    problem:
      "Event organizers juggle registration, roles, and attendee Q&A across disconnected tools.",
    built:
      "Spring Boot + React platform: role-aware dashboards, JWT auth, MongoDB, REST APIs, and an OpenAI copilot for natural-language event discovery. Containerized and deployed.",
    impact: "Owned every layer solo: auth, data model, APIs, LLM, deployment.",
    tags: ["Spring Boot", "React", "TypeScript", "MongoDB", "OpenAI", "Docker"],
    links: [
      { label: "Live App", url: "https://foliyo-2-0.onrender.com" },
      { label: "Repository", url: "https://github.com/jaidityadev/foliyo_2.0" },
    ],
    priority: true,
  },
  {
    title: "Tax Document Intelligence at ADP",
    category: "NLP · Production ML",
    image: "/images/tax.png",
    problem: "Manually classifying tax forms across 3M+ live records doesn't scale.",
    built:
      "Real-time ML classification system with refined keyword-search and stakeholder-facing dashboards.",
    impact: "Live on production payroll data; became the foundation of the pipelines I owned full-time.",
    tags: ["Python", "Classification", "NLP", "Data Viz", "3M+ records"],
    links: [],
  },
  {
    title: "Disease Outbreak Forecasting (Springer)",
    category: "Research · Machine Learning",
    image: "/images/disease_prediction.png",
    problem:
      "Single-model outbreak forecasts for dengue and TB are brittle across regions and seasons.",
    built:
      "A heterogeneous ensemble (ARIMA, NNAR, CART, CTREE) blending statistical and tree-based learners to stabilize predictions.",
    impact:
      "Peer-reviewed in Springer's New Generation Computing; aids proactive public-health planning.",
    tags: ["R", "Ensemble Forecasting", "ARIMA", "NNAR", "CART"],
    links: [
      { label: "Publication", url: "https://doi.org/10.1007/s00354-020-00119-7" },
    ],
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-dots bg-dots-fade pointer-events-none" />
          {/* cinematic depth: soft accent washes behind the headline */}
          <div className="absolute -top-32 -left-32 h-[480px] w-[600px] rounded-full bg-primary/[0.08] blur-3xl pointer-events-none" />
          <div className="absolute top-40 right-0 h-[320px] w-[400px] rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative py-20 md:py-28">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center mb-16">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 mb-6">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      Next: Data &amp; AI at Deloitte Canada — September 2026
                    </span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
                    Data scientist &amp; AI engineer, joining{" "}
                    <span className="text-primary">Deloitte Canada</span>.
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
                    I&apos;m Jaiditya Dev. At ADP Canada I built the ML systems
                    behind payroll and tax operations: classification pipelines
                    over 3M+ live records, an MCP server for enterprise LLM
                    tooling, and agentic assistants in production. In September
                    I bring that work to Deloitte&apos;s Data &amp; AI practice.
                  </p>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
                    <DecodeText text="DATA SCIENCE · ML ENGINEERING · GENAI" />
                  </p>
                </FadeIn>
                <FadeIn delay={0.25}>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button asChild size="lg">
                      <Link href="/projects">
                        See my work
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View resume
                      </a>
                    </Button>
                    <div className="flex items-center gap-3 sm:ml-2">
                      <a
                        href="https://github.com/jaidityadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jaidityadev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2} direction="left" className="hidden lg:block">
                <div className="mx-auto w-72 space-y-4">
                  <div className="relative w-72 h-72">
                    <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/30">
                      <Image
                        src="/images/profile.jpg"
                        alt="Jaiditya Dev"
                        fill
                        sizes="288px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <ForecastChart />
                </div>
              </FadeIn>
            </div>
            <ProofBar />
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              number="01"
              label="Experience"
              title="Experience"
              lede="Software, ML, and research work from full-time roles, internships, and labs."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((job, i) => (
                <FadeIn key={`${job.role}-${job.org}`} delay={0.1 + i * 0.08} direction="up">
                  <div className="card-premium h-full p-6">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="text-lg font-bold">{job.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="font-medium text-primary text-sm mb-4">
                      {job.org}
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      {job.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="mt-10">
                <Button asChild variant="outline">
                  <Link href="/about">
                    Full experience & publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Focus areas */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              number="02"
              label="Focus"
              title="What I work on"
              lede="The three areas where I spend most of my time."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={0.1 + i * 0.1} direction="up">
                  <div className="card-premium h-full p-6">
                    <span className="font-mono text-xs text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-bold mt-2 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              number="03"
              label="Featured Work"
              title="Selected projects & research"
              lede="Production ML at ADP, a shipped full-stack product, and peer-reviewed research."
            />
            <StaggerIn className="space-y-8" delay={0.1} staggerDelay={0.12}>
              {featuredProjects.map((project) => (
                <ProjectCaseStudyCard key={project.title} project={project} />
              ))}
            </StaggerIn>
            <FadeIn delay={0.2}>
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">
                    All projects & publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="card-premium p-10 md:p-16 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  04 · Contact
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Get in touch.
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Starting at Deloitte in September. Always happy to talk
                  production ML, agentic systems, or forecasting research.
                  Fastest reply by email.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <a href="mailto:jaidityadev1402@gmail.com">
                      jaidityadev1402@gmail.com
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://www.linkedin.com/in/jaidityadev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
