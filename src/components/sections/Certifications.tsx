import { ArrowUpRight, Award, FileText } from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Reveal } from "@/components/site/Reveal";
import { certifications, certificationSection as copy } from "@/content/portfolio";

const linkClass = "inline-flex items-center gap-1.5 text-sm text-foreground link-underline";

export function Certifications() {
  if (!certifications.length) return null;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="mt-20 scroll-mt-24 border-t border-border pt-12 md:mt-24 md:pt-16"
    >
      <Reveal className="grid gap-5 md:grid-cols-12 md:gap-10">
        <p className="eyebrow md:col-span-3 md:pt-3">{copy.label}</p>
        <h3
          id="certifications-title"
          className="display text-4xl text-foreground md:col-span-9 md:text-5xl"
        >
          {copy.title}
        </h3>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {certifications.map((credential, index) => (
          <Reveal key={credential.id} delay={index * 70} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-28 w-24 shrink-0 items-center justify-center">
                  {credential.badge ? (
                    <img
                      src={credential.badge}
                      alt={`${credential.title} badge`}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="max-h-full w-full object-contain transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <Award aria-hidden className="size-16 text-primary" strokeWidth={1} />
                  )}
                </div>
                <div className="min-w-0 flex-1 pt-2">
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                    {credential.issuer}
                    {credential.exam ? ` · ${credential.exam}` : ""}
                  </p>
                  <h4 className="mt-3 text-lg font-medium leading-snug text-foreground">
                    {credential.title}
                  </h4>
                </div>
              </div>

              <dl className="mt-7 grid gap-4 border-t border-hairline pt-5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs text-muted-foreground">{copy.earnedLabel}</dt>
                  <dd className="mt-1.5 text-sm text-foreground">{credential.earned}</dd>
                </div>
                {credential.expires ? (
                  <div>
                    <dt className="font-mono text-xs text-muted-foreground">
                      {copy.expiresLabel}
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground">{credential.expires}</dd>
                  </div>
                ) : null}
              </dl>

              {credential.document || credential.verificationUrl ? (
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
                  {credential.verificationUrl ? (
                    <ExternalLink
                      href={credential.verificationUrl}
                      className={linkClass}
                      aria-label={`${copy.verificationLabel}: ${credential.title}`}
                    >
                      {copy.verificationLabel}
                      <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.6} />
                    </ExternalLink>
                  ) : null}
                  {credential.document ? (
                    <a
                      href={credential.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                      aria-label={`${copy.documentLabel}: ${credential.title} (PDF, opens in a new tab)`}
                    >
                      <FileText aria-hidden className="size-4" strokeWidth={1.6} />
                      {copy.documentLabel}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
