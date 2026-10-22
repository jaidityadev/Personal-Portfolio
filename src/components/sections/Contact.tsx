import { ArrowUpRight, BookOpen, Download, FileText, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { Reveal } from "@/components/site/Reveal";
import { contact, links } from "@/content/portfolio";

interface ContactRow {
  label: string;
  icon: LucideIcon;
  href: string | null;
  display: string | null;
  download?: boolean;
}

function offsite(url: string) {
  return /^https?:\/\//.test(url);
}

function displayUrl(url: string | null) {
  if (!url) return null;
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function Contact() {
  const rows: ContactRow[] = [
    { label: "Email", icon: Mail, href: links.email ? `mailto:${links.email}` : null, display: links.email },
    { label: "LinkedIn", icon: Linkedin, href: links.linkedin, display: displayUrl(links.linkedin) },
    { label: "GitHub", icon: Github, href: links.github, display: displayUrl(links.github) },
    // A résumé hosted off-site (e.g. Google Drive) opens in a new tab; only a same-site PDF downloads.
    {
      label: "Résumé",
      icon: FileText,
      href: links.resume,
      display: links.resume ? (offsite(links.resume) ? "View PDF" : "Download PDF") : null,
      download: links.resume ? !offsite(links.resume) : false,
    },
    ...(links.orcid
      ? [{ label: "ORCID", icon: BookOpen, href: links.orcid, display: displayUrl(links.orcid) }]
      : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="ruler section-y scroll-mt-16 border-t border-hairline">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">
            <span className="text-primary">07</span>
            <span className="mx-3 inline-block h-px w-8 bg-border align-middle" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="display mt-8 max-w-4xl text-[clamp(3rem,8vw,7rem)] text-foreground"
          >
            Have something <em className="text-primary">interesting</em> in mind?
          </h2>
          <p className="prose-body mt-8 max-w-xl text-lg text-muted-foreground">{contact.body}</p>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {rows.map((row, i) => {
            const Icon = row.icon;
            const inner = (
              <>
                <span className="flex items-center gap-4">
                  <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  <span className="display text-[clamp(1.75rem,3.2vw,2.6rem)] text-foreground">{row.label}</span>
                </span>
                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="hidden sm:inline">{row.display ?? "Coming soon"}</span>
                  {row.href ? (
                    row.download ? (
                      <Download className="size-5 text-foreground transition-transform duration-500 group-hover:translate-y-0.5 group-hover:text-primary" strokeWidth={1.5} aria-hidden />
                    ) : (
                      <ArrowUpRight className="size-5 text-foreground transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" strokeWidth={1.5} aria-hidden />
                    )
                  ) : null}
                </span>
              </>
            );
            return (
              <li key={row.label} className="border-b border-border">
                <Reveal delay={i * 60}>
                  {row.href ? (
                    <ExternalLink
                      href={row.href}
                      {...(row.download ? { download: "" } : {})}
                      className="group flex items-center justify-between gap-6 py-6 transition-[padding] duration-500 ease-out-soft hover:pl-2"
                    >
                      {inner}
                    </ExternalLink>
                  ) : (
                    <div
                      className="flex items-center justify-between gap-6 py-6 opacity-60"
                      aria-label={`${row.label}, coming soon`}
                    >
                      {inner}
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
