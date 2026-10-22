import { ArrowUpRight } from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TagList } from "@/components/site/Tag";
import { beyond } from "@/content/portfolio";

export function Beyond() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="ruler section-y scroll-mt-16 border-t border-hairline bg-surface">
      <div className="container-page">
        <SectionHeading id="beyond-title" index="06" label="Beyond the code" title="Off the clock, still curious." />

        <div className="mt-14 grid md:grid-cols-12">
          <Reveal className="md:col-span-9 md:col-start-4">
            <p className="display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.25] text-foreground">{beyond.lead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {beyond.notes.map((note, i) => (
            <Reveal key={note.title} delay={(i % 2) * 80} className="bg-card">
              <article className="h-full p-7 md:p-9">
                <p className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-4 text-[1.85rem] text-foreground">{note.title}</h3>
                <p className="prose-body mt-3 text-muted-foreground">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {beyond.interests.length ? (
          <Reveal className="mt-12">
            <h3 className="eyebrow">Interests</h3>
            <TagList items={beyond.interests} className="mt-4" />
          </Reveal>
        ) : null}

        {beyond.photos.length ? (
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {beyond.photos.map((photo) => (
              <Reveal key={photo.src}>
                <figure>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full rounded-xl border border-border object-cover"
                  />
                  {photo.caption ? <figcaption className="eyebrow mt-2">{photo.caption}</figcaption> : null}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : null}

        {beyond.writing.length ? (
          <div className="mt-14">
            <h3 className="eyebrow">Writing</h3>
            <ul className="mt-4 border-t border-border">
              {beyond.writing.map((post) => (
                <li key={post.href} className="border-b border-border">
                  <ExternalLink href={post.href} className="group flex items-baseline justify-between gap-6 py-5">
                    <span>
                      <span className="display text-2xl text-foreground">{post.title}</span>
                      {post.blurb ? <span className="mt-1 block text-sm text-muted-foreground">{post.blurb}</span> : null}
                    </span>
                    <span className="eyebrow flex shrink-0 items-center gap-2">
                      {post.date}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.6} aria-hidden />
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
