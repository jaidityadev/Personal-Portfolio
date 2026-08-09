import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import PageTransition from "@/components/animations/page-transition";
import ProofBar from "@/components/proof-bar";
import SectionHeading from "@/components/section-heading";
import ExperienceTimeline, { type Role } from "@/components/experience-timeline";
import CaseStudy, { type CaseStudyProject } from "@/components/case-study";

const RESUME_URL =
  "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing";

const capabilities = [
  {
    title: "Machine learning in production",
    description:
      "Classification, forecasting, and statistical modeling on live enterprise data, from first model through the pipelines that operations teams depend on daily.",
    tags: ["Python", "R", "scikit-learn", "PyTorch", "ARIMA"],
  },
  {
    title: "GenAI and agentic systems",
    description:
      "Retrieval pipelines, MCP servers, and agent designs that give language models structured, auditable access to enterprise tools.",
    tags: ["MCP", "Strands Agents", "RAG", "OpenAI API"],
  },
  {
    title: "Delivery, end to end",
    description:
      "Taking work past the model: APIs, dashboards, authentication, and deployment, so what gets built is something a team can actually run.",
    tags: ["React", "TypeScript", "Spring Boot", "Docker"],
  },
];

const experience: Role[] = [
  {
    role: "Business Analyst, Data & AI",
    org: "Deloitte Canada",
    period: "Starting Sep 2026",
    location: "Toronto, ON",
    bullets: [
      <>
        Joining the{" "}
        <span className="font-medium text-foreground">Data &amp; AI practice</span>{" "}
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
    location: "Toronto, ON",
    bullets: [
      <>
        Re-architected a production tax assistant from custom RAG to an{" "}
        <span className="font-medium text-foreground">agentic design</span>{" "}
        routing across{" "}
        <span className="font-medium text-foreground">5 tool endpoints</span>.
      </>,
      <>
        Built an <span className="font-medium text-foreground">MCP server</span>{" "}
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
    location: "Toronto, ON",
    bullets: [
      <>
        Built an ML model classifying tax form types over a real-time dataset of{" "}
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
        learning, from regression through neural networks.
      </>,
    ],
  },
];

const featuredProjects: CaseStudyProject[] = [
  {
    title: "Foliyo 2.0",
    category: "Full-stack · GenAI",
    image: "/images/foliyo2.png",
    outcome:
      "A complete event management platform, owned solo across every layer: authentication, data model, APIs, LLM integration, and deployment.",
    problem:
      "Event organizers juggle registration, roles, and attendee Q&A across disconnected tools.",
    built:
      "Spring Boot and React platform with role-aware dashboards, JWT auth, MongoDB, REST APIs, and an OpenAI copilot for natural-language event discovery. Containerized and deployed.",
    impact:
      "Shows the full delivery path from data model to shipped product, not just the model in the middle.",
    tags: ["Spring Boot", "React", "TypeScript", "MongoDB", "OpenAI", "Docker"],
    links: [
      { label: "Live app", url: "https://foliyo-2-0.onrender.com" },
      { label: "Repository", url: "https://github.com/jaidityadev/foliyo_2.0" },
    ],
    priority: true,
  },
  {
    title: "Tax document intelligence at ADP",
    category: "NLP · Production ML",
    image: "/images/tax.png",
    outcome:
      "Real-time classification across 3M+ live payroll records, which became the foundation of the pipelines I went on to own full time.",
    problem:
      "Manually classifying tax forms across 3M+ live records does not scale.",
    built:
      "Real-time ML classification system with refined keyword-search and stakeholder-facing dashboards.",
    impact:
      "Running on production payroll data that HR and payroll operations teams rely on daily.",
    tags: ["Python", "Classification", "NLP", "Data viz", "3M+ records"],
    links: [],
  },
  {
    title: "Disease outbreak forecasting",
    category: "Research · Machine learning",
    image: "/images/disease_prediction.png",
    outcome:
      "Peer-reviewed in Springer's New Generation Computing, supporting proactive public-health planning.",
    problem:
      "Single-model outbreak forecasts for dengue and TB are brittle across regions and seasons.",
    built:
      "A heterogeneous ensemble (ARIMA, NNAR, CART, CTREE) blending statistical and tree-based learners to stabilize predictions.",
    impact:
      "Evidence the modeling work holds up to external academic review, not just internal deadlines.",
    tags: ["R", "Ensemble forecasting", "ARIMA", "NNAR", "CART"],
    links: [
      { label: "Publication", url: "https://doi.org/10.1007/s00354-020-00119-7" },
    ],
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container mx-auto py-20 md:py-32">
            <FadeIn>
              <p className="label-rule max-w-md">
                <span className="text-primary">Next</span>
                <span>Deloitte Canada · September 2026</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="mt-10 max-w-5xl text-4xl leading-[1.08] sm:text-5xl md:text-7xl md:leading-[1.06]">
                Data scientist and AI engineer,
                <br className="hidden md:block" /> joining{" "}
                <em className="text-primary">Deloitte Canada</em>.
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-12 max-w-2xl">
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I&apos;m Jaiditya Dev. At ADP Canada I built the ML systems
                  behind payroll and tax operations: classification pipelines
                  over 3M+ live records, an MCP server for enterprise LLM
                  tooling, and agentic assistants in production. In September I
                  bring that work to Deloitte&apos;s Data &amp; AI practice.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      Selected work
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-1 h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/jaidityadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/jaidityadev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Evidence */}
        <section className="border-b border-border bg-sunken">
          <div className="container mx-auto py-14 md:py-16">
            <ProofBar />
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto">
            <SectionHeading
              number="01"
              label="Experience"
              title="Software, ML, and research work across industry and academia."
              lede="Full-time roles, internships, and labs, from strategy consulting at EY to production AI at ADP."
            />
            <ExperienceTimeline roles={experience} />
            <FadeIn delay={0.15}>
              <div className="mt-12">
                <Button asChild variant="outline">
                  <Link href="/about">
                    Full experience and publications
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Selected work */}
        <section className="border-t border-border bg-sunken py-24 md:py-32">
          <div className="container mx-auto">
            <SectionHeading
              number="02"
              label="Selected work"
              title="Three pieces of work, and what each one had to solve."
              lede="Production ML at ADP, a shipped full-stack product, and peer-reviewed forecasting research."
            />
            <div className="space-y-16 md:space-y-20">
              {featuredProjects.map((project, i) => (
                <FadeIn key={project.title} delay={0.06}>
                  <CaseStudy project={project} index={i} />
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.15}>
              <div className="mt-16">
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">
                    All projects and publications
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto">
            <SectionHeading
              number="03"
              label="Capabilities"
              title="What I work on."
              lede="The three areas where I spend most of my time."
            />
            <div className="grid gap-px bg-border md:grid-cols-3">
              {capabilities.map((c, i) => (
                <FadeIn key={c.title} delay={Math.min(i * 0.08, 0.2)} className="h-full">
                  {/* Columns are uneven lengths, so the tag rows are pushed to
                      a shared baseline instead of floating mid-column. */}
                  <div className="flex h-full flex-col bg-background p-7 md:p-8">
                    <span className="font-mono text-xs text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-2xl">{c.title}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-8">
                      {c.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border bg-sunken py-24 md:py-32">
          <div className="container mx-auto">
            <FadeIn>
              <p className="label-rule max-w-md">
                <span className="text-primary">04</span>
                <span>Contact</span>
              </p>
              <h2 className="mt-8 max-w-3xl text-4xl md:text-5xl">
                Always happy to talk production ML, agentic systems, or
                forecasting research.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Starting at Deloitte in September. Fastest reply by email.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
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
                    <Linkedin className="mr-1 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
