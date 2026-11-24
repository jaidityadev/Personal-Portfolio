import { ArrowUpRight, BadgeCheck } from "lucide-react";

import type { Certification } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

export function CertificationCard({ cert }: { cert: Certification }) {
  const meta = [cert.issuer, cert.code].filter(Boolean).join(" · ");
  return (
    <article className="group flex h-full items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/40 md:gap-6 md:p-6">
      <div className="flex size-20 shrink-0 items-center justify-center md:size-24">
        {cert.badge ? (
          <img
            src={cert.badge}
            alt={`${cert.name} badge`}
            width={96}
            height={96}
            loading="lazy"
            className="size-full object-contain transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden
            className="dot-grid flex size-full items-center justify-center rounded-xl border border-border"
          >
            <BadgeCheck className="size-8 text-primary" strokeWidth={1.4} />
          </div>
        )}
      </div>

      <div className="min-w-0">
        <p className="eyebrow">{meta}</p>
        <h3 className="mt-2 text-[1.05rem] font-medium leading-snug text-foreground">
          {cert.url ? (
            <ExternalLink href={cert.url} className="link-underline">
              {cert.name}
            </ExternalLink>
          ) : (
            cert.name
          )}
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>Earned {cert.earned}</span>
          {cert.url ? (
            <ExternalLink
              href={cert.url}
              className="inline-flex items-center gap-1 text-foreground link-underline"
              aria-label={`Verify ${cert.name}`}
            >
              Verify <ArrowUpRight className="size-4" strokeWidth={1.6} aria-hidden="true" />
            </ExternalLink>
          ) : null}
        </p>
      </div>
    </article>
  );
}
