import { ArrowUpRight } from "lucide-react";

import type { Publication } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

export function PublicationCard({ pub }: { pub: Publication }) {
  const meta = [pub.authors, pub.venue, pub.year].filter(Boolean).join(" · ");
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/40 md:p-8">
      {meta ? <p className="eyebrow">{meta}</p> : null}
      <h4 className="display mt-3 text-2xl text-foreground">
        {pub.link ? (
          <ExternalLink href={pub.link} className="link-underline">
            {pub.title}
          </ExternalLink>
        ) : (
          pub.title
        )}
      </h4>
      {pub.abstract ? <p className="prose-body mt-4 text-muted-foreground">{pub.abstract}</p> : null}
      {pub.link ? (
        <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground" aria-hidden>
          Read paper <ArrowUpRight className="size-4" strokeWidth={1.6} />
        </span>
      ) : null}
    </article>
  );
}
