import { SectionHeading } from "@/components/site/SectionHeading";
import { Timeline } from "@/components/site/Timeline";
import { Reveal } from "@/components/site/Reveal";
import { experienceStats, visibleExperience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="ruler section-y scroll-mt-16 border-t border-hairline"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          index="02"
          label="Experience"
          title="Where I've made an impact."
          description="Data & AI consulting at Deloitte, production AI at ADP, strategy consulting at EY, and research and teaching at the University of Toronto."
        />
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-20 lg:grid-cols-4">
          {experienceStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="bg-card">
              <div className="flex h-full flex-col p-6 md:p-8">
                <dd className="display text-[clamp(2.75rem,5vw,4.25rem)] leading-none text-foreground">
                  {s.value}
                </dd>
                <dt className="mt-4 text-sm leading-snug text-foreground/85">{s.label}</dt>
                <p className="eyebrow mt-auto pt-4">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </dl>
        <div className="mt-16 md:mt-20">
          <Timeline items={visibleExperience()} />
        </div>
      </div>
    </section>
  );
}
