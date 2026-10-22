import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { about, profile } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="ruler section-y scroll-mt-16">
      <div className="container-page">
        <SectionHeading id="about-title" index="01" label="About" title="Beyond the job title." />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5 lg:col-span-4 md:col-start-1">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                {profile.portrait ? (
                  <img
                    src={profile.portrait}
                    alt={profile.portraitAlt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                ) : (
                  <div
                    className="dot-grid flex size-full items-center justify-center gap-3"
                    role="img"
                    aria-label="Monogram for Jaiditya Dev"
                  >
                    <span className="display text-[8rem] italic leading-none text-foreground/80">
                      J
                    </span>
                    <span className="display text-[8rem] leading-none text-primary">D</span>
                  </div>
                )}
              </div>
              <figcaption className="eyebrow mt-3">
                {profile.name} · {profile.location}
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.2] text-foreground">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className="prose-body">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {about.highlights.map((h) => (
                  <div key={h.label} className="bg-card p-5">
                    <dt className="eyebrow">{h.label}</dt>
                    <dd className="mt-3 text-[0.975rem] font-medium leading-snug text-foreground">
                      {h.value}
                      <span className="block font-normal text-muted-foreground">{h.detail}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
