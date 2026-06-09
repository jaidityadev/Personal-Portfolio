import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface CaseStudyProject {
  title: string;
  category: string;
  image?: string;
  problem: string;
  built: string;
  impact: string;
  tags: string[];
  links: ProjectLink[];
  priority?: boolean;
}

export default function ProjectCaseStudyCard({
  project,
}: {
  project: CaseStudyProject;
}) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="grid md:grid-cols-2">
        {project.image && (
          <div className="relative w-full h-0 pb-[56.25%] md:pb-0 md:h-full md:min-h-[320px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={project.priority}
              className="object-cover object-top"
            />
          </div>
        )}
        <div className="p-6 md:p-8 flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-5">
            {project.title}
          </h3>
          <dl className="space-y-3 mb-6 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Problem
              </dt>
              <dd className="text-foreground/90">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Built
              </dt>
              <dd className="text-foreground/90">{project.built}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Why it matters
              </dt>
              <dd className="text-foreground/90">{project.impact}</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {project.links.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button key={link.url} variant="outline" size="sm" asChild>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
