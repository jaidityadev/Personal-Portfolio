import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ExternalLink } from "./ExternalLink";
import { ProjectVisual } from "./ProjectVisual";
import { TagList } from "./Tag";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const { github, live } = project.links ?? {};

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,transform,box-shadow] duration-500 ease-out-soft hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_24px_60px_-32px_color-mix(in_oklab,var(--foreground)_35%,transparent)] focus-within:border-foreground/40",
        featured && "lg:grid lg:grid-cols-12",
      )}
    >
      <ProjectVisual
        kind={project.visual}
        className={cn(
          "aspect-[16/10] border-b border-hairline",
          featured && "lg:col-span-7 lg:aspect-auto lg:min-h-[26rem] lg:border-b-0 lg:border-r",
        )}
      />

      <div className={cn("flex flex-1 flex-col p-6 md:p-8", featured && "lg:col-span-5 lg:p-10")}>
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow">
            <span className="text-primary">{num}</span>
            <span className="mx-2 text-border">/</span>
            {project.category}
          </span>
        </div>

        <h3
          className={cn(
            "display mt-5 text-foreground",
            featured ? "text-[clamp(2rem,3.4vw,2.9rem)]" : "text-[clamp(1.75rem,2.6vw,2.25rem)]",
          )}
        >
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            viewTransition
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>

        <p className="prose-body mt-4 text-muted-foreground">{project.summary}</p>

        <TagList items={project.tags} className="mt-6" />

        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            Read case study
            <ArrowUpRight
              className="size-4 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              strokeWidth={1.6}
              aria-hidden
            />
          </span>
          <div className="relative z-10 flex flex-wrap items-center gap-4">
            {github ? (
              <ExternalLink
                href={github}
                className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="size-4" strokeWidth={1.6} aria-hidden /> GitHub
              </ExternalLink>
            ) : null}
            {live ? (
              <ExternalLink
                href={live}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Visit ${project.title}`}
              >
                Visit site <ArrowUpRight className="size-4" strokeWidth={1.6} aria-hidden />
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
