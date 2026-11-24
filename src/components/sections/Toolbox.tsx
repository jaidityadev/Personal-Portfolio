import { CertificationCard } from "@/components/site/CertificationCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TagList } from "@/components/site/Tag";
import { certifications, toolbox } from "@/content/portfolio";

export function Toolbox() {
  return (
    <section
      id="toolbox"
      aria-labelledby="toolbox-title"
      className="ruler section-y scroll-mt-16 border-t border-hairline"
    >
      <div className="container-page">
        <SectionHeading
          id="toolbox-title"
          index="05"
          label="Toolbox"
          title="A technical toolbox."
          description="The languages, libraries and systems I reach for, grouped by how I use them, not ranked by percentage."
        />

        <dl className="mt-16 border-t border-border md:mt-20">
          {toolbox.map((group, i) => (
            <Reveal key={group.group} delay={i * 50}>
              <div className="grid gap-4 border-b border-border py-7 md:grid-cols-12 md:gap-10">
                <dt className="flex items-baseline gap-3 md:col-span-3">
                  <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.975rem] font-medium text-foreground">{group.group}</span>
                </dt>
                <dd className="md:col-span-9">
                  <TagList items={group.items} />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {certifications.length > 0 ? (
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-3">
              <h3 id="certifications" className="eyebrow scroll-mt-24">
                Certifications
              </h3>
            </Reveal>
            <div className="grid gap-4 md:col-span-9 lg:grid-cols-2">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 60} className="h-full">
                  <CertificationCard cert={cert} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
