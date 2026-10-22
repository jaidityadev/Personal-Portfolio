/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────
 *  Everything visitors read lives here: profile, links, experience,
 *  projects, research, skills and personal notes. Components only
 *  render this data, so you never need to touch layout code.
 *
 *  Conventions
 *  • `null` or an empty string means "not provided yet". The UI
 *    hides the field or link. It never renders a fake link.
 *  • Empty arrays hide their block entirely (e.g. publications).
 *  • Keep professional work high-level. Never add confidential
 *    client details, datasets, source code or internal architecture.
 */

/** One illustration per project. See ProjectVisual.tsx. */
export type ProjectVisualKind =
  | "agent-routing" // Agentic Tax Assistant & MCP Server
  | "document-sorting" // Tax Document Intelligence
  | "event-grid" // Foliyo 2.0
  | "ensemble-forecast" // Disease Outbreak Forecasting
  | "multilingual-outreach" // Health TrueInfo
  | "anomaly-band" // Tax Anomaly Detection
  | "logistic-factors" // Understanding Youth Mental Health
  | "story-mosaic" // Humans of South Asia in Toronto
  | "distribution"; // Data Analysis Activities

export interface Project {
  /** URL segment: /projects/<slug>. Lowercase, hyphenated, unique. */
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  /** Built-in illustration used on cards and the detail page. */
  visual: ProjectVisualKind;
  /** Short context line, e.g. "Professional · ADP Canada". */
  context: string;
  year?: string | null;
  overview: string[];
  focus: string[];
  /** Only confirmed, shareable results. Shown as "Impact". Leave empty if none. */
  outcomes?: string[];
  /** Your own trade-offs and lessons learned, in your words. Hidden while empty. */
  tradeoffs?: string[];
  links?: {
    github?: string | null;
    live?: string | null;
    /** DOI or publisher page for published work. */
    paper?: string | null;
  };
  /** Shows a confidentiality note on the detail page. */
  confidential?: boolean;
}

export interface Experience {
  organization: string;
  /** Locally hosted organization mark. Leave null until verified. */
  logo?: { src: string; width: number; height: number } | null;
  /** Leave empty until you want a title displayed. */
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  tags?: string[];
  /** Set true to keep an entry in the file without showing it. */
  hidden?: boolean;
}

export interface Publication {
  title: string;
  authors?: string;
  year?: string;
  venue?: string;
  abstract?: string;
  link?: string | null;
}

export interface WritingEntry {
  title: string;
  date?: string;
  href: string;
  blurb?: string;
}

export interface Photo {
  /** Import an image from src/assets and pass it here. */
  src: string;
  alt: string;
  caption?: string;
}

/* ───────────── Profile & links ───────────── */

export const profile = {
  name: "Jaiditya Dev",
  shortName: "Jai",
  role: "Data Scientist & AI Engineer",
  location: "Toronto, Canada",
  currentlyAt: "Deloitte Canada",
  /** Full deployed URL (e.g. "https://jaidityadev.com"), used for SEO. */
  siteUrl: "https://jaiditya-dev.netlify.app" as string | null,
  /** Portrait for the About section. Import from src/assets, or leave null. */
  portrait: "/profile.jpg" as string | null,
  portraitAlt: "Portrait of Jaiditya Dev",
};

export const links = {
  email: "jaidityadev1402@gmail.com" as string | null,
  linkedin: "https://www.linkedin.com/in/jaidityadev/" as string | null,
  github: "https://github.com/jaidityadev" as string | null,
  /** Google Drive copy of the résumé. Re-upload to the same file to keep this link. */
  resume: "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing" as
    string | null,
  orcid: "https://orcid.org/0009-0005-2095-4383" as string | null,
};

/* ───────────── Hero ───────────── */

export const hero = {
  eyebrow: ["Jaiditya Dev", "Toronto, Canada"],
  headline: {
    before: "Data scientist and AI engineer at",
    emphasis: "Deloitte",
    after: "Canada.",
  },
  intro:
    "I'm Jai. I work in Deloitte Canada's Data & AI practice. Before that, at ADP Canada, I built the ML systems behind payroll and tax operations: classification pipelines over 3M+ live records, an MCP server for enterprise LLM tooling, and an agentic tax assistant in production.",
  status: "Toronto · Data & AI at Deloitte Canada",
  /** "words" = word-by-word rise on load, "fade" = single soft fade. */
  headlineAnimation: "words" as "words" | "fade",
};

/* ───────────── About ───────────── */

export const about = {
  lead: "I work where statistics, machine learning and software meet, and I'm drawn to problems that need all three.",
  paragraphs: [
    "I studied Applied Statistics at the University of Toronto, with minors in Computer Science and Mathematics, as a Lester B. Pearson International Scholar. The Pearson is the university's most prestigious award for international students: I was one of 37 scholars chosen across all three UofT campuses, and one of 9 at Mississauga.",
    "It's a full four-year scholarship worth more than $350,000. It covers tuition, books, residence, meals and a living stipend, so for four years I could put everything into the degree, research and teaching.",
    "At ADP Canada I started as a data science intern classifying tax forms, and stayed on as an Associate Application Developer: I owned the ML document classification and routing pipelines that HR and payroll operations depend on daily, built an MCP server around enterprise REST endpoints, and re-architected a production tax assistant from custom RAG to an agentic design.",
    "Research came first, though. I have four peer-reviewed publications in forecasting and public health (Springer, CRC Press, the UofT Journal of Public Health and AMSJ), the first of them before I finished high school. I've also spent 3+ years teaching probability, statistics and machine learning.",
    "Since September 2026 I've been a Business Analyst in Deloitte Canada's Data & AI practice in Toronto, working on agentic and AI-integrated solutions for client engagements.",
  ],
  highlights: [
    { label: "Education", value: "University of Toronto", detail: "H.B.Sc. Applied Statistics" },
    {
      label: "Pearson Scholar",
      value: "1 of 37 across UofT",
      detail: "$350K+ full four-year award",
    },
    { label: "Research", value: "4 publications", detail: "First published in high school" },
  ],
};

/* ───────────── Experience ───────────── */

/** Large figures above the timeline. Only confirmed numbers. */
export const experienceStats = [
  { value: "3M+", label: "Live payroll records classified", note: "Production ML · ADP" },
  { value: "5", label: "Tool endpoints in an agentic tax assistant", note: "Strands Agents · ADP" },
  { value: "4", label: "Peer-reviewed publications", note: "Springer · CRC Press · UTJPH" },
  { value: "3+", label: "Years teaching ML and statistics", note: "UofT · LearnAI" },
];

export const experience: Experience[] = [
  {
    organization: "Deloitte Canada",
    logo: { src: "/logos/deloitte.svg", width: 90, height: 17 },
    role: "Business Analyst, Data & AI",
    period: "Sep 2026 – Present",
    location: "Toronto, ON",
    summary:
      "AI-enabled delivery for client engagements in the Data & AI practice: agentic and AI-integrated solutions, cloud engineering and technical solutioning alongside client teams.",
    tags: ["Agentic AI", "GenAI", "Cloud", "Consulting"],
  },
  {
    organization: "ADP Canada",
    logo: { src: "/logos/adp.svg", width: 66, height: 30 },
    role: "Associate Application Developer",
    period: "Jul 2025 – Sep 2026",
    location: "Toronto, ON",
    summary: "Production AI for payroll and tax operations.",
    highlights: [
      "Re-architected a production tax assistant from custom RAG to an agentic design (Strands Agents) routing across 5 tool endpoints, improving modularity, routing accuracy and observability.",
      "Built an MCP server wrapping enterprise REST endpoints for structured, auditable LLM tool use in production.",
      "Owned the ML document classification and routing pipelines that HR and payroll operations depend on daily.",
    ],
    tags: ["Python", "MCP", "Strands Agents", "RAG", "NLP"],
  },
  {
    organization: "University of Toronto Mississauga",
    logo: { src: "/logos/university-of-toronto.svg", width: 94, height: 35 },
    role: "Teaching Assistant, STA107",
    period: "Jan 2025 – Apr 2025",
    location: "Mississauga, ON",
    summary: "Weekly tutorials for Introduction to Probability and Modelling.",
    highlights: [
      "Covered discrete distributions, sampling and statistical inference.",
      "Coached students through R programming for probability simulation and assessed work against course learning outcomes.",
    ],
    tags: ["R", "Probability", "Teaching"],
  },
  {
    organization: "ADP Canada",
    logo: { src: "/logos/adp.svg", width: 66, height: 30 },
    role: "Data Science Intern",
    period: "May 2024 – Aug 2024",
    location: "Toronto, ON",
    summary: "Machine learning for tax document classification.",
    highlights: [
      "Built an ML model classifying tax form types over a real-time dataset of 800,000+ records.",
      "Refined keyword-search algorithms and shipped stakeholder-facing dashboards that sped up analysis.",
    ],
    tags: ["Python", "scikit-learn", "NLP", "SQL"],
  },
  {
    organization: "University of Toronto Mississauga",
    logo: { src: "/logos/university-of-toronto.svg", width: 94, height: 35 },
    role: "Research Assistant",
    period: "May 2023 – Aug 2023",
    location: "Mississauga, ON",
    summary:
      "Research on causal inference models with Prof. Sonya Allin: literature reviews and findings presented at lab meetings.",
    tags: ["Causal Inference", "Applied Statistics"],
  },
  {
    organization: "UofT AI · LearnAI",
    logo: { src: "/logos/learnai.png", width: 88, height: 43 },
    role: "Program Teaching Assistant",
    period: "Oct 2022 – Apr 2023",
    location: "Toronto, ON",
    summary:
      "Delivered tutorials on machine learning, neural networks and computer vision, mentored student AI projects and gave assessment feedback.",
    tags: ["Machine Learning", "Neural Networks", "Computer Vision"],
  },
  {
    organization: "EY",
    logo: { src: "/logos/ey.svg", width: 43, height: 47 },
    role: "Strategy Analyst Intern",
    period: "May 2022 – Aug 2022",
    location: "New Delhi, India",
    summary: "Technology strategy work for enterprise clients.",
    highlights: [
      "Facilitated requirements-gathering workshops and wrote executive-ready narratives on complex technical topics that senior stakeholders acted on.",
      "Built quantitative models in Excel and KPI storylines linking technology investment to measurable business outcomes.",
      "Mapped current-state processes and shaped future-state modernization roadmaps, identifying digital transformation and automation opportunities.",
    ],
    tags: ["Strategy", "Business Cases", "Excel Modeling"],
  },
  {
    organization: "National Institute of Technology Jalandhar",
    logo: { src: "/logos/nit-jalandhar.png", width: 48, height: 48 },
    role: "Machine Learning Research Intern",
    period: "Sep 2019 – Apr 2021",
    location: "Jalandhar, India",
    summary: "Forecasting research that turned into my first publications.",
    highlights: [
      "Led research on dengue and TB outbreak prediction using ensemble forecasting, published in Springer's New Generation Computing.",
      "Co-authored and presented at international venues, including the International Conference on AI and the Swiss OpenTox Conference.",
    ],
    tags: ["R", "Time Series", "Ensemble Forecasting"],
  },
];

/* ───────────── Projects ───────────── */

export const projects: Project[] = [
  {
    slug: "agentic-tax-assistant",
    title: "Agentic Tax Assistant & MCP Server",
    category: "GenAI / Agentic Systems",
    summary:
      "Re-architecting a production tax assistant from custom RAG to an agent that routes across five tool endpoints, backed by an MCP server for auditable access to enterprise systems.",
    tags: ["Python", "Strands Agents", "MCP", "RAG", "REST APIs"],
    visual: "agent-routing",
    context: "Professional · ADP Canada",
    year: "2025–2026",
    overview: [
      "The original assistant answered tax questions through a custom retrieval pipeline. It worked, but every new capability meant more custom glue, and it was hard to see why it answered the way it did.",
      "I moved it to an agentic design built on Strands Agents, where the model chooses between five purpose-built tool endpoints. Alongside it, I built an MCP server that wraps enterprise REST endpoints so language models get structured, auditable access to them instead of free-form calls.",
    ],
    focus: [
      "Designing the tool surface the agent routes across",
      "Building an MCP server over existing enterprise REST endpoints",
      "Making tool calls structured and auditable for production use",
      "Improving routing accuracy and observability during the migration",
    ],
    outcomes: [
      "Production assistant re-architected to route across 5 tool endpoints",
      "More modular design with better routing accuracy and observability",
    ],
    links: { github: null },
    confidential: true,
  },
  {
    slug: "tax-document-classification",
    title: "Tax Document Intelligence",
    category: "Applied Machine Learning / NLP",
    summary:
      "Real-time machine learning classification of tax forms across live payroll data, which grew into the routing pipelines I later owned full time.",
    tags: ["Python", "scikit-learn", "NLP", "SQL", "Data Visualization"],
    visual: "document-sorting",
    context: "Professional · ADP Canada",
    year: "2024–2026",
    overview: [
      "Tax documents are dense, inconsistent in structure, and often differ from one another in small but important ways. Sorting them by hand across millions of live records doesn't scale.",
      "As an intern I built a classifier for tax form types over a real-time dataset of 800,000+ records, combining text processing, refined keyword search and statistical learning. When I returned full time, that work became the classification and routing pipelines HR and payroll operations rely on daily.",
    ],
    focus: [
      "Text processing and normalization for noisy, domain-specific documents",
      "Feature engineering that combines keyword signals with statistical features",
      "Training and evaluating classifiers with scikit-learn",
      "Stakeholder-facing dashboards and visualizations of the results",
    ],
    outcomes: [
      "Classification running across 3M+ live payroll records",
      "Became the foundation of the routing pipelines I owned full time",
    ],
    links: { github: null },
    confidential: true,
  },
  {
    slug: "foliyo",
    title: "Foliyo 2.0",
    category: "Full-Stack / GenAI",
    summary:
      "An event management platform with role-aware dashboards and an OpenAI copilot for natural-language event discovery, built solo from data model to deployment.",
    tags: ["Spring Boot", "React", "TypeScript", "MongoDB", "OpenAI", "Docker"],
    visual: "event-grid",
    context: "Personal project",
    overview: [
      "Event organizers juggle registration, roles and attendee questions across disconnected tools. Foliyo brings them into one platform.",
      "I owned every layer: JWT authentication, the MongoDB data model, the Spring Boot REST APIs, a React and TypeScript front end with role-aware dashboards, and an OpenAI copilot that lets attendees find events in plain language. It's containerized and deployed.",
    ],
    focus: [
      "Role-aware dashboards for organizers and attendees",
      "JWT authentication and a REST API in Spring Boot",
      "LLM integration for natural-language event discovery",
      "Containerizing and deploying the full stack",
    ],
    outcomes: ["Live, deployed application owned end to end"],
    links: {
      github: "https://github.com/jaidityadev/foliyo_2.0",
      live: "https://foliyo-2-0.onrender.com",
    },
  },
  {
    slug: "disease-outbreak-forecasting",
    title: "Disease Outbreak Forecasting",
    category: "Research / Time Series",
    summary:
      "A heterogeneous ensemble of statistical and tree-based forecasters for dengue and tuberculosis outbreaks, published in Springer's New Generation Computing.",
    tags: ["R", "ARIMA", "NNAR", "CART", "CTREE"],
    visual: "ensemble-forecast",
    context: "Research · National Institute of Technology",
    year: "2021",
    overview: [
      "Single-model outbreak forecasts for dengue and TB are brittle across regions and seasons, which makes them hard to plan around.",
      "The model blends ARIMA, NNAR, CART and CTREE learners so that each covers the others' weaknesses, giving more stable predictions to support proactive public-health planning.",
    ],
    focus: [
      "Building and tuning statistical and tree-based forecasters in R",
      "Combining them into a heterogeneous ensemble",
      "Evaluating forecast accuracy across diseases and time periods",
    ],
    outcomes: ["Peer-reviewed in New Generation Computing (Springer), January 2021"],
    links: { paper: "https://doi.org/10.1007/s00354-020-00119-7" },
  },
  {
    slug: "health-trueinfo",
    title: "Health TrueInfo",
    category: "Public Health / Mobile",
    summary:
      "A multilingual Android app and social media campaign against COVID-19 vaccine misinformation in Bolivia, India and Canada.",
    tags: ["Android", "Public Health", "Multilingual", "Social Media"],
    visual: "multilingual-outreach",
    context: "Research · Public health",
    year: "2022",
    overview: [
      "During COVID-19, vaccine misinformation moved faster than corrections, especially across language and cultural barriers.",
      "We built a multilingual Android app and ran targeted social campaigns, co-created with community influencers so the message felt local in each of the three countries.",
    ],
    focus: [
      "Multilingual Android app for accurate vaccine information",
      "Targeted social media campaigns with community influencers",
      "Measuring changes in vaccine hesitancy",
    ],
    outcomes: [
      "Measurable drops in vaccine hesitancy across three countries",
      "Published in the University of Toronto Journal of Public Health, February 2022",
    ],
    links: { paper: "https://doi.org/10.33137/utjph.v9999i1.38113" },
  },
  {
    slug: "tax-anomaly-detection",
    title: "Tax Anomaly Detection Using Deep Learning",
    category: "Deep Learning / Time Series",
    summary:
      "An LSTM-based approach to identifying irregularities in quarterly taxation patterns using historical financial data.",
    tags: ["Python", "LSTM", "TensorFlow", "Time Series"],
    visual: "anomaly-band",
    context: "Professional · ADP Canada",
    overview: [
      "Quarterly taxation data carries rhythm: seasonality, trends, and the occasional value that doesn't belong. The goal was to learn what normal looks like from history so that irregularities stand out.",
      "I explored a recurrent neural network approach, using LSTMs to model sequential patterns in historical financial data and flag deviations from expected behaviour.",
    ],
    focus: [
      "Framing anomaly detection as a sequence modeling problem",
      "Designing and training LSTM models in TensorFlow",
      "Time-series preparation across a large historical dataset",
    ],
    outcomes: [
      "Approximately 96% accuracy in project evaluation",
      "Patterns analyzed across more than 2 million data points",
    ],
    links: { github: null },
    confidential: true,
  },
  {
    slug: "youth-mental-health",
    title: "Understanding Youth Mental Health",
    category: "Statistical Research / Data Science",
    summary:
      "An applied statistical research project examining associations between substance use, sleep quality, social factors and mental health outcomes.",
    tags: ["R", "Statistical Modeling", "Logistic Regression", "Data Visualization"],
    visual: "logistic-factors",
    context: "Research",
    overview: [
      "Youth mental health is shaped by many overlapping factors. This project used applied statistics to examine how substance use, sleep quality and social factors are associated with mental health outcomes.",
      "The emphasis was on careful modeling and honest interpretation: describing associations clearly without overstating what observational data can say.",
    ],
    focus: [
      "Exploratory analysis and data visualization in R",
      "Logistic regression modeling of mental health outcomes",
      "Communicating statistical findings for a general audience",
    ],
    links: { github: null },
  },
  {
    slug: "humans-of-south-asia-toronto",
    title: "Humans of South Asia in Toronto",
    category: "Web Development / Storytelling",
    summary:
      "A personal initiative highlighting the diverse experiences and stories of South Asians living in Toronto.",
    tags: ["Web Development", "JavaScript", "HTML/CSS"],
    visual: "story-mosaic",
    context: "Personal initiative",
    overview: [
      "Toronto's South Asian community is wide-ranging, and its stories rarely fit into a single narrative. This project is a place to share them, one person at a time.",
      "It's where engineering meets storytelling for me: a simple, respectful web experience that puts people, rather than features, at the centre.",
    ],
    focus: [
      "Designing a story-first reading experience",
      "Front-end development with JavaScript, HTML and CSS",
      "Shaping the editorial direction of the initiative",
    ],
    links: { github: null, live: "https://jaidityadev.github.io/SAH200/" },
  },
];

/* ───────────── Research ───────────── */

export const research = {
  intro:
    "I started publishing before university, on forecasting disease outbreaks. I still like the slower side of the work: framing a question carefully, choosing a method that fits it, and being honest about what the data can and can't tell us.",
  interests: [
    "Time-Series Forecasting",
    "Agentic AI and LLM Tooling",
    "Causal Inference",
    "Statistical Modeling",
    "Natural Language Processing",
    "Public Health Data Science",
  ],
  collaboration: {
    title: "Causal inference research at the University of Toronto",
    body: "In summer 2023 I worked as a research assistant with Prof. Sonya Allin at UofT Mississauga on causal inference models, writing literature reviews and presenting findings at lab meetings.",
    areas: ["Causal Inference", "Applied Statistics", "Computing Education"],
  },
  publications: [
    {
      title:
        "Health TrueInfo: A multilingual Android app and social media approach in tackling COVID-19 vaccine misinformation and hesitancy in Bolivia, India, and Canada",
      venue: "University of Toronto Journal of Public Health",
      year: "2022",
      abstract:
        "A multilingual Android app and targeted social campaigns that measurably reduced vaccine hesitancy across three countries.",
      link: "https://doi.org/10.33137/utjph.v9999i1.38113",
    },
    {
      title: "Time Series Forecasting Techniques for Internet of Things: A Survey",
      venue: "Handbook of Research on Machine Learning Foundations and Applications (CRC Press)",
      year: "2022",
      abstract:
        "A survey of time-series forecasting methods, enabling technologies and implementation challenges for large-scale IoT.",
      link: "https://doi.org/10.1201/9781003277330-13",
    },
    {
      title: "A Heterogeneous Ensemble Forecasting Model for Disease Prediction",
      venue: "New Generation Computing (Springer)",
      year: "2021",
      abstract:
        "An ensemble of forecasting algorithms that improved outbreak-prediction accuracy for dengue and tuberculosis.",
      link: "https://doi.org/10.1007/s00354-020-00119-7",
    },
    {
      title: "ARIMA Modelling for Time Series Forecasting",
      venue: "Advances in Mathematics: Scientific Journal",
      year: "2020",
      abstract:
        "ARIMA-based techniques for parameter selection and better forecasting precision across diverse datasets.",
      link: "https://doi.org/10.37418/amsj.9.6.75",
    },
  ] as Publication[],
};

/* ───────────── Technical toolbox ───────────── */

export const toolbox: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "R", "SQL", "TypeScript", "Java", "Kotlin", "SAS"] },
  {
    group: "Machine Learning & Data Science",
    items: [
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Pandas / NumPy",
      "Statistical Modeling",
      "Time-Series Forecasting",
    ],
  },
  {
    group: "GenAI & Agents",
    items: ["MCP", "Strands Agents", "RAG Pipelines", "OpenAI API", "Agentic Architectures"],
  },
  {
    group: "Software Engineering",
    items: ["React", "Next.js", "Spring Boot", "Flask", "REST APIs", "JUnit", "Git"],
  },
  {
    group: "Data & Infrastructure",
    items: ["MongoDB", "Relational Databases", "Databricks", "Docker", "AWS"],
  },
];

/* ───────────── Beyond the code ───────────── */

export const beyond = {
  lead: "Outside of work I'm usually teaching, organizing, or chasing a question in a dataset that refused to stay small.",
  notes: [
    {
      title: "Published before university",
      body: "My first peer-reviewed papers came out of research at the National Institute of Technology in New Delhi, on forecasting dengue and TB outbreaks, before I'd finished high school.",
    },
    {
      title: "Teaching",
      body: "Three-plus years of tutorials: machine learning, neural networks and computer vision for UofT AI's LearnAI program, and probability with R for STA107. Explaining something is the fastest way to find out whether I understand it.",
    },
    {
      title: "Student leadership",
      body: "As President of the UTM Residence Council for two years, I led a 25-person team running events for 200+ attendees on $20,000+ annual budgets, and sat as a voting member on Food Quality Services.",
    },
    {
      title: "Engineering, with creativity",
      body: "My favourite projects mix the two, like Humans of South Asia in Toronto, a storytelling project built around people rather than features.",
    },
  ],
  /** Personal interests shown as quiet tags. Leave empty to hide. */
  interests: [] as string[],
  /** Photography strip. Leave empty to hide. */
  photos: [] as Photo[],
  /** Occasional writing. Leave empty to hide. */
  writing: [] as WritingEntry[],
};

/* ───────────── Contact & footer ───────────── */

export const contact = {
  headline: "Have something interesting in mind?",
  body: "Always happy to talk production ML, agentic systems or forecasting research. Email gets the fastest reply.",
};

export const footer = {
  copyright: "© 2026 Jaiditya Dev",
};

/* ───────────── Helpers ───────────── */

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function visibleExperience() {
  return experience.filter((e) => !e.hidden);
}
