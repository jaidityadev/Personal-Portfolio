import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerIn from "@/components/animations/stagger-in";
import PageTransition from "@/components/animations/page-transition";
import SectionHeading from "@/components/section-heading";
import ProjectCaseStudyCard, {
  type CaseStudyProject,
} from "@/components/project-case-study-card";

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
    tags: ["Spring Boot", "React", "TypeScript", "MongoDB", "OpenAI", "JWT", "Docker"],
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
      "Manually classifying tax forms across 800K+ live records doesn't scale for production HR and payroll.",
    built:
      "Real-time ML classification system with refined keyword-search and stakeholder-facing visualizations (word clouds).",
    impact:
      "Live on production payroll data; now the foundation of the routing pipelines I own full-time at ADP.",
    tags: ["Python", "Classification", "NLP", "Data Visualization", "800K+ records"],
    links: [],
  },
  {
    title: "Disease Outbreak Forecasting (Springer, New Generation Computing)",
    category: "Research · Machine Learning",
    image: "/images/disease_prediction.png",
    problem:
      "Single-model outbreak forecasts for dengue and TB are brittle across regions and seasons.",
    built:
      "A heterogeneous ensemble (ARIMA, NNAR, CART, CTREE) blending statistical and tree-based learners to stabilize predictions.",
    impact:
      "Peer-reviewed in Springer's New Generation Computing; aids proactive public-health planning.",
    tags: ["R", "Ensemble Forecasting", "ARIMA", "NNAR", "CART", "CTREE"],
    links: [
      { label: "Publication", url: "https://doi.org/10.1007/s00354-020-00119-7" },
    ],
  },
  {
    title: "Health TrueInfo: Fighting Vaccine Misinformation in 3 Countries",
    category: "Public Health · Mobile",
    image: "/images/health_trueinfo.png",
    problem:
      "COVID-19 vaccine misinformation outpaced corrections across language and cultural barriers in Bolivia, India, and Canada.",
    built:
      "A multilingual Android app plus targeted social campaigns, co-created with community influencers for cultural relevance.",
    impact:
      "Measurable drops in vaccine hesitancy across 3 countries; published in the UofT Journal of Public Health.",
    tags: ["Android", "Public Health", "Social Media", "Multilingual"],
    links: [
      { label: "Publication", url: "https://doi.org/10.33137/utjph.v9999i1.38113" },
    ],
  },
  {
    title: "Time Series Forecasting for IoT (CRC Press Book Chapter)",
    category: "Research · Survey",
    image: "/images/iot_forecasting.png",
    problem:
      "Large-scale IoT generates time-series data with constraints standard forecasting surveys don't address.",
    built:
      "A comprehensive survey of forecasting methods, enabling technologies, protocols, and implementation challenges for IoT.",
    impact:
      "Published as a chapter in CRC Press's Handbook of Research on Machine Learning Foundations and Applications.",
    tags: ["Time Series", "IoT", "Forecasting", "ARIMA", "Survey"],
    links: [
      { label: "DOI", url: "https://doi.org/10.1201/9781003277330-13" },
      {
        label: "Download PDF",
        url: "https://drive.google.com/file/d/1KcsjoFHFaHqDlrcvc3WPUNjAn0bmwDI4/view?usp=sharing",
      },
    ],
  },
];

const otherProjects = [
  {
    title: "Customer Admin Console (foliyo v1)",
    description:
      "A single-page React + TypeScript app for managing customer records: secure login, persistent sessions, search and filtering, and full CRUD against a remote API. The precursor to Foliyo 2.0.",
    tags: ["React", "TypeScript", "Vite", "REST API"],
    links: [
      { label: "Repository", url: "https://github.com/jaidityadev/foliyo" },
      { label: "Live Demo", url: "https://react-project-sghu.onrender.com/" },
    ],
  },
  {
    title: "ARIMA Modelling for Time Series Forecasting",
    description:
      "Published research exploring ARIMA-based techniques to optimize parameter selection and improve forecasting precision across diverse datasets.",
    tags: ["R", "ARIMA", "Time Series", "Published"],
    links: [
      { label: "Publication", url: "https://doi.org/10.37418/amsj.9.6.75" },
    ],
  },
  {
    title: "3D Printing Market Analysis at Ernst & Young",
    description:
      "Statistical modeling and market assessment of the Asia Pacific 3D printing market for the I.I.T. Delhi Incubation Center, including regression-based procurement optimization.",
    tags: ["Statistical Modeling", "Regression", "Market Analysis"],
    links: [],
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            number="01"
            label="Work"
            title="Projects & Research"
            lede="Production ML, full-stack products, and peer-reviewed research, framed as problem, build, impact."
          />

          {/* Featured Projects */}
          <section className="mb-20">
            <StaggerIn className="space-y-8" staggerDelay={0.12}>
              {featuredProjects.map((project) => (
                <ProjectCaseStudyCard key={project.title} project={project} />
              ))}
            </StaggerIn>
          </section>

          {/* Other Projects */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8">More Work</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <FadeIn key={project.title} delay={0.1 + i * 0.08} direction="up">
                  <div className="card-premium h-full p-6 flex flex-col">
                    <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.links.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <Button
                            key={link.url}
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <ArrowUpRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
