import { PublicationCard } from "@/components/site/PublicationCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TagList } from "@/components/site/Tag";
import { research } from "@/content/portfolio";

export function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="ruler section-y scroll-mt-16 border-t border-hairline"
    >
      <div className="container-page">
        <SectionHeading
          id="research-title"
          index="04"
          label="Research"
          title={
            <>
              Research &amp; <em className="text-primary">intellectual</em> curiosity.
            </>
          }
          description={research.intro}
        />

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-4">
            <Reveal>
              <h3 className="eyebrow">Research interests</h3>
            </Reveal>
            <ol className="mt-6 border-t border-hairline">
              {research.interests.map((topic, i) => (
                <li key={topic}>
                  <Reveal delay={i * 50}>
                    <div className="flex items-baseline gap-6 border-b border-hairline py-5">
                      <span className="eyebrow w-6 shrink-0 text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[clamp(1.5rem,2.4vw,2rem)] text-foreground">
                        {topic}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-9 md:col-start-4">
            <article className="rounded-2xl border border-border bg-card p-7 md:p-10">
              <p className="eyebrow">Academic collaboration</p>
              <h3 className="display mt-4 text-[clamp(1.75rem,2.8vw,2.4rem)] text-foreground">
                {research.collaboration.title}
              </h3>
              <p className="prose-body mt-4 max-w-2xl text-muted-foreground">
                {research.collaboration.body}
              </p>
              <TagList items={research.collaboration.areas} className="mt-6" />
            </article>
          </Reveal>

          {research.publications.length ? (
            <div className="md:col-span-9 md:col-start-4">
              <h3 className="eyebrow mt-10">Publications</h3>
              <div className="mt-6 grid gap-5">
                {research.publications.map((pub) => (
                  <Reveal key={pub.title}>
                    <PublicationCard pub={pub} />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
