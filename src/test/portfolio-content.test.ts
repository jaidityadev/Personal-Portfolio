import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { experience, getProject, projects, visibleExperience } from "@/content/portfolio";
import { routeTree } from "@/routeTree.gen";

describe("portfolio content", () => {
  it("gives every project a unique, URL-safe slug", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("serves each project at /projects/<slug>", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const p of projects) {
      expect(router.matchRoutes(`/projects/${p.slug}`).at(-1)?.routeId).toBe("/projects/$slug");
      expect(getProject(p.slug)?.title).toBe(p.title);
    }
  });

  it("keeps hidden experience entries off the page", () => {
    const visible = visibleExperience();
    expect(visible.length).toBe(experience.filter((e) => !e.hidden).length);
    expect(visible.every((e) => !e.hidden)).toBe(true);
  });

  it("gives every project its own illustration", () => {
    const visuals = projects.map((p) => p.visual);
    expect(new Set(visuals).size).toBe(visuals.length);
  });
});
