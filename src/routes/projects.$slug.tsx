import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ShieldCheck } from "lucide-react";

import { ExternalLink } from "@/components/site/ExternalLink";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { Reveal } from "@/components/site/Reveal";
import { TagList } from "@/components/site/Tag";
import { getProject, profile, projects } from "@/content/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: `Project unavailable | ${profile.name}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} | ${profile.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.summary },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            genre: project.category,
            keywords: project.tags.join(", "),
            author: { "@type": "Person", name: profile.name },
          }),
        },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length]!;
  const num = String(idx + 1).padStart(2, "0");
  const { github, live, paper } = project.links ?? {};
  const hasLinks = Boolean(github || live || paper);

  return (
    <article className="page-enter pt-28 md:pt-36">
      <div className="container-page">
        <Link
          to="/"
          hash="work"
          viewTransition
          className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" strokeWidth={1.6} aria-hidden /> All work
        </Link>

        <header className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9">
            <p className="eyebrow">
              <span className="text-primary">{num}</span>
              <span className="mx-2 text-border">/</span>
              {project.category}
            </p>
            <h1 className="display mt-6 text-[clamp(2.75rem,6.5vw,5.5rem)] text-foreground">
              {project.title}
            </h1>
            <p className="prose-body mt-8 max-w-2xl text-lg text-muted-foreground">
              {project.summary}
            </p>
          </div>
        </header>

        <dl
          className={`mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border ${hasLinks ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          <div className="bg-card p-5">
            <dt className="eyebrow">Context</dt>
            <dd className="mt-2 text-[0.975rem] text-foreground">{project.context}</dd>
          </div>
          <div className="bg-card p-5">
            <dt className="eyebrow">{project.year ? "Year" : "Discipline"}</dt>
            <dd className="mt-2 text-[0.975rem] text-foreground">
              {project.year ?? project.category}
            </dd>
          </div>
          {hasLinks ? (
            <div className="bg-card p-5">
              <dt className="eyebrow">Links</dt>
              <dd className="mt-2 flex flex-wrap gap-4 text-[0.975rem] text-foreground">
                {github ? (
                  <ExternalLink
                    href={github}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    <Github className="size-4" strokeWidth={1.6} aria-hidden /> GitHub
                  </ExternalLink>
                ) : null}
                {live ? (
                  <ExternalLink
                    href={live}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    Visit <ArrowUpRight className="size-4" strokeWidth={1.6} aria-hidden />
                  </ExternalLink>
                ) : null}
                {paper ? (
                  <ExternalLink
                    href={paper}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    Read paper <ArrowUpRight className="size-4" strokeWidth={1.6} aria-hidden />
                  </ExternalLink>
                ) : null}
              </dd>
            </div>
          ) : null}
        </dl>

        <ProjectVisual
          kind={project.visual}
          className="mt-6 aspect-[16/10] rounded-2xl border border-border md:aspect-[16/8]"
        />

        <div className="section-y grid gap-14 md:grid-cols-12 md:gap-10">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <p className="eyebrow">Stack</p>
              <TagList items={project.tags} className="mt-4" />
            </div>
          </aside>

          <div className="space-y-16 md:col-span-8 md:col-start-5">
            <Reveal>
              <section aria-labelledby="overview">
                <h2 id="overview" className="eyebrow">
                  <span className="text-primary">A</span> / The problem &amp; approach
                </h2>
                <div className="mt-5 space-y-5">
                  {project.overview.map((p, i) =>
                    i === 0 ? (
                      <p
                        key={i}
                        className="display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.3] text-foreground"
                      >
                        {p}
                      </p>
                    ) : (
                      <p key={i} className="prose-body">
                        {p}
                      </p>
                    ),
                  )}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="focus">
                <h2 id="focus" className="eyebrow">
                  <span className="text-primary">B</span> / What the work involved
                </h2>
                <ul className="mt-5 border-t border-hairline">
                  {project.focus.map((f, i) => (
                    <li
                      key={f}
                      className="flex gap-6 border-b border-hairline py-4 text-[1.02rem] text-foreground/90"
                    >
                      <span className="eyebrow w-6 shrink-0 pt-1 text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {project.outcomes?.length ? (
              <Reveal>
                <section aria-labelledby="outcomes">
                  <h2 id="outcomes" className="eyebrow">
                    <span className="text-primary">C</span> / Impact
                  </h2>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.outcomes.map((o) => (
                      <li key={o} className="rounded-2xl border border-border bg-card p-6">
                        <span className="display text-2xl leading-snug text-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}

            {project.tradeoffs?.length ? (
              <Reveal>
                <section aria-labelledby="tradeoffs">
                  <h2 id="tradeoffs" className="eyebrow">
                    <span className="text-primary">D</span> / Trade-offs &amp; lessons
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {project.tradeoffs.map((t) => (
                      <li
                        key={t}
                        className="flex gap-4 text-[1.02rem] leading-relaxed text-foreground/90"
                      >
                        <span aria-hidden className="mt-[0.8rem] h-px w-4 shrink-0 bg-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}

            {project.confidential ? (
              <Reveal>
                <p className="flex gap-3 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  This was professional work. It's described at a high level only. No confidential
                  data, source code or internal architecture is shared here.
                </p>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>

      <nav aria-label="Next project" className="border-t border-hairline">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          viewTransition
          className="group container-page flex items-center justify-between gap-6 py-14 md:py-20"
        >
          <span>
            <span className="eyebrow">Next project</span>
            <span className="display mt-3 block text-[clamp(2rem,4.5vw,3.75rem)] text-foreground transition-colors group-hover:text-primary">
              {next.title}
            </span>
          </span>
          <ArrowRight
            className="size-8 shrink-0 text-foreground transition-transform duration-500 ease-out-soft group-hover:translate-x-1 group-hover:text-primary"
            strokeWidth={1.2}
            aria-hidden
          />
        </Link>
      </nav>
    </article>
  );
}

function ProjectNotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-5xl text-foreground">That project isn't here.</h1>
      <p className="prose-body mt-4 text-muted-foreground">It may have been renamed or removed.</p>
      <Link to="/" hash="work" className="btn-secondary mt-8">
        <ArrowLeft className="size-4" strokeWidth={1.6} aria-hidden /> Back to all work
      </Link>
    </div>
  );
}
