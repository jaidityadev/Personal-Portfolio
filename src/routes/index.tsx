import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Toolbox } from "@/components/sections/Toolbox";
import { Work } from "@/components/sections/Work";
import { hero, links, profile } from "@/content/portfolio";

const title = "Jaiditya Dev | Data Scientist & AI Engineer in Toronto";
const description =
  "Jaiditya (Jai) Dev is a data scientist and AI engineer at Deloitte Canada. Production ML over 3M+ records, MCP servers and agentic AI at ADP, and four peer-reviewed publications in forecasting and public health.";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Jai Dev",
  jobTitle: profile.role,
  description: hero.intro,
  worksFor: { "@type": "Organization", name: profile.currentlyAt },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Toronto" },
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressCountry: "CA" },
  knowsAbout: ["Machine Learning", "Agentic AI", "Model Context Protocol", "Time-Series Forecasting", "Statistics", "Natural Language Processing", "Causal Inference"],
  ...(profile.siteUrl ? { url: profile.siteUrl } : {}),
  sameAs: [links.linkedin, links.github, links.orcid].filter(Boolean),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <Work />
      <Research />
      <Toolbox />
      <Beyond />
      <Contact />
    </>
  );
}
