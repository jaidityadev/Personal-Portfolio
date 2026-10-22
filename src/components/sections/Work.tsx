import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { projects } from "@/content/portfolio";

export function Work() {
  const [first, ...rest] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="ruler section-y scroll-mt-16 border-t border-hairline">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          index="03"
          label="Selected work"
          title="Projects that matter."
          description="A mix of professional, research and personal work. Professional projects are described at a high level only."
        />

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
          {first ? (
            <Reveal className="md:col-span-2">
              <ProjectCard project={first} index={0} featured />
            </Reveal>
          ) : null}
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
