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
  "https://drive.google.com/file/d/1Mime_QXRtmFHFVR_BPnpifTOcWbbIYaZ/view?usp=sharing";

const pillars = [
  {
    title: "ML & Forecasting",
    description:
      "Classification, ensemble forecasting, and statistical modeling, grounded in an Applied Statistics degree and peer-reviewed research.",
    tags: ["Python", "R", "scikit-learn", "PyTorch", "ARIMA", "Ensembles"],
  },
  {
    title: "GenAI & Agentic Systems",
    description:
      "RAG pipelines, MCP servers, and agentic architectures running in production. Structured tool use for LLM assistants over enterprise APIs.",
    tags: ["MCP", "Strands Agents", "RAG", "OpenAI API", "Hugging Face"],
  },
  {
    title: "Full-Stack Engineering",
    description:
      "The product around the model: secure APIs, dashboards, and deployed apps with auth, persistence, and CI-ready tooling.",
    tags: ["React", "TypeScript", "Spring Boot", "MongoDB", "Docker"],
  },
];

const highlights = [
  {
    role: "AI Engineering @ ADP Canada",
    period: "2024 – Present",
    detail:
      "Production MCP server, a RAG-to-agentic migration across five tool endpoints, and ML document pipelines for HR and payroll tax systems.",
  },
  {
    role: "Published Researcher",
    period: "2020 – 2022",
    detail:
      "Four peer-reviewed publications, including Springer's New Generation Computing, a CRC Press book chapter, and the UofT Journal of Public Health.",
  },
  {
    role: "Teaching ML & Statistics",
    period: "3+ years",
    detail:
      "TA for probability and modelling at UofT and for the LearnAI program, covering everything from regression to neural networks and computer vision.",
  },
  {
    role: "President, UTM Residence Council",
    period: "2022 – 2024",
    detail:
      "Led a 25-person team, managed $20K+ annual budgets, and delivered events for 200+ attendees over two years.",
  },
];

const featuredProjects: CaseStudyProject[] = [
  {
    title: "Foliyo 2.0: AI-Powered Event Management Platform",
    category: "Full-Stack · GenAI",
    image: "/images/foliyo2.png",
    problem:
      "Event organizers juggle registration, role management, and attendee questions across disconnected tools.",
    built:
      "A Spring Boot + React platform with role-aware dashboards, RS256 JWT auth, MongoDB persistence, OpenAPI-documented REST APIs, and an OpenAI-powered copilot for natural-language event discovery, all containerized and deployed.",
    impact:
      "I owned every layer in one codebase: auth, the data model, API design, LLM integration, and deployment.",
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
    problem:
      "Classifying tax forms manually across 800,000+ live records doesn't scale.",
    built:
      "An ML classification system identifying tax form types in real time, with refined keyword-search algorithms and stakeholder-facing visualizations.",
    impact:
      "Runs against production payroll data and became the foundation for the document-routing pipelines I now own full-time.",
    tags: ["Python", "Classification", "NLP", "Data Viz", "800K+ records"],
    links: [],
  },
  {
    title: "Disease Outbreak Forecasting (Springer)",
    category: "Research · Machine Learning",
    image: "/images/disease_prediction.png",
    problem:
      "Single-model forecasts of dengue and tuberculosis outbreaks are brittle across regions and seasons.",
    built:
      "A heterogeneous ensemble (ARIMA, NNAR, CART, CTREE) combining statistical and tree-based learners to stabilize outbreak predictions.",
    impact:
      "Peer-reviewed and published in New Generation Computing (Springer); supports proactive public-health planning.",
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
                      Currently: building agentic AI for tax systems at ADP
                      Canada
                    </span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
                    Published at 17.
                    <br />
                    Shipping production AI at{" "}
                    <span className="text-primary">ADP</span>.
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
                    I&apos;m Jaiditya Dev, a data scientist and AI engineer. I
                    own the whole pipeline: data, models, APIs, and the product
                    around them.
                  </p>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
                    <DecodeText text="DATA SCIENCE · ML ENGINEERING · GENAI SYSTEMS" />
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

        {/* About */}
        <section className="py-24 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              number="01"
              label="About"
              title="From research papers to production systems"
              lede="I started in research, co-authoring peer-reviewed papers on ensemble disease forecasting before I finished high school. A Lester B. Pearson Scholarship (one of about 37 full-ride awards worldwide) took me to the University of Toronto for Applied Statistics, with minors in Computer Science and Mathematics. These days I build production AI at ADP Canada. Whatever the project, my goal stays the same: statistical rigor where it matters, engineering discipline everywhere else, and a finished product at the end."
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
            <FadeIn delay={0.3}>
              <div className="mt-10">
                <Button asChild variant="outline">
                  <Link href="/about">
                    Full background & publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Experience highlights */}
        <section className="py-24 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              number="02"
              label="Experience"
              title="Where the work happened"
              lede="Real roles at real companies, plus the leadership work alongside them."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <FadeIn key={item.role} delay={0.1 + i * 0.08} direction="up">
                  <div className="card-premium h-full p-6">
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold">{item.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
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
              lede="Each one is framed the way I approach work: a real problem, a system built to solve it, and why it matters."
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
                  Let&apos;s build something that ships.
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Open to Data Science, ML/AI Engineering, and technology
                  consulting roles. Always happy to talk research, too.
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
