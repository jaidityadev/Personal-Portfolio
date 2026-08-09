import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface CaseStudyProject {
  title: string;
  category: string;
  image?: string;
  /** The headline result, pulled out so it is read first. */
  outcome: string;
  problem: string;
  built: string;
  impact: string;
  tags: string[];
  links: ProjectLink[];
  priority?: boolean;
}

/**
 * A case in the shape a consulting reader expects: the result first, then
 * context, approach, and why it mattered. The stack is present but demoted,
 * because it is evidence rather than the headline.
 */
export default function CaseStudy({
  project,
  index,
}: {
  project: CaseStudyProject;
  index: number;
}) {
  return (
    <article className="grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_1.15fr] md:gap-14 md:pt-12">
      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-3xl md:text-4xl">{project.title}</h3>

        {/* The result, set as a pull quote rather than buried in a list. */}
        <p className="mt-6 border-l-2 border-primary/40 pl-5 text-lg leading-snug text-foreground">
          {project.outcome}
        </p>

        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable group inline-flex items-center gap-1 border-b border-foreground/25 pb-0.5 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        {project.image && (
          <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={project.priority}
              className="object-cover object-top"
            />
          </div>
        )}

        <dl className="space-y-5">
          {[
            { term: "Context", detail: project.problem },
            { term: "Approach", detail: project.built },
            { term: "Why it matters", detail: project.impact },
          ].map((row) => (
            <div key={row.term} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted-foreground sm:pt-1">
                {row.term}
              </dt>
              <dd className="text-[0.9375rem] leading-relaxed text-foreground/85">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
