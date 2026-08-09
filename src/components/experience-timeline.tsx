import type { ReactNode } from "react";
import FadeIn from "@/components/animations/fade-in";

export interface Role {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: ReactNode[];
}

/**
 * Experience as a continuous run of rows on a shared rail rather than a grid
 * of boxes. Read top to bottom it shows a trajectory, which is the thing a
 * consulting reader is actually looking for.
 */
export default function ExperienceTimeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="relative">
      {roles.map((job, i) => (
        <li key={`${job.role}-${job.org}`}>
          <FadeIn delay={Math.min(i * 0.06, 0.3)}>
            <article className="group relative grid gap-x-10 gap-y-3 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:py-10">
              {/* The rail marker sits on the rule, tying the row to the spine. */}
              <span
                aria-hidden
                className="absolute -top-px left-0 h-px w-10 bg-primary/70 transition-[width] duration-500 group-hover:w-20"
              />

              <div className="md:pt-1">
                <p className="font-mono text-xs tracking-wider text-muted-foreground">
                  {job.period}
                </p>
                {job.location && (
                  <p className="mt-1 font-mono text-[0.6875rem] tracking-wider text-muted-foreground/70">
                    {job.location}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-primary">
                  {job.org}
                </p>
                <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {job.bullets.map((bullet, j) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static copy
                    <li key={j} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.6em] h-px w-3 shrink-0 bg-border"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
