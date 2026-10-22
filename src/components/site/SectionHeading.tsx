import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("grid gap-6 md:grid-cols-12 md:gap-10", className)}>
      <div className="flex items-center gap-3 md:col-span-3 md:items-start md:pt-3">
        <span className="eyebrow text-primary">{index}</span>
        <span aria-hidden className="h-px w-8 bg-border md:mt-[0.4rem]" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="md:col-span-9">
        <h2 id={id} className="display text-[clamp(2.25rem,5vw,3.75rem)] text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="prose-body mt-5 max-w-2xl text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
