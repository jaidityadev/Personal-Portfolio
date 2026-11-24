import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { certifications, experience, getProject, projects, visibleExperience } from "@/content/portfolio";
import { routeTree } from "@/routeTree.gen";

describe("portfolio content", () => {
  it("links the AWS credential to the owner's public Credly verification", () => {
    expect(certifications.find((c) => c.id === "aws-ai-practitioner")?.verificationUrl).toBe(
      "https://www.credly.com/badges/e4c183a3-94e5-475a-ba77-717e560f40ae/public_url",
    );
  });

  it("links the Microsoft credential to the owner's public Microsoft verification", () => {
    expect(
      certifications.find((c) => c.id === "microsoft-fabric-analytics-engineer")?.verificationUrl,
    ).toBe(
      "https://learn.microsoft.com/api/credentials/share/en-us/JaidityaDev-9388/3DFE7008EFA9F9F5?sharingId=8B2FA4A8809E9E9C",
    );
  });

  it("records both earned credentials and their validity dates", () => {
    expect(certifications.find((c) => c.id === "aws-ai-practitioner")).toMatchObject({
      title: "AWS Certified AI Practitioner",
      earned: "November 24, 2026",
      expires: "November 24, 2029",
    });
    expect(certifications.find((c) => c.id === "microsoft-fabric-analytics-engineer")).toMatchObject({
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      exam: "DP-600",
      earned: "November 18, 2026",
      expires: "November 18, 2027",
    });
  });

  it("gives every certification a unique id", () => {
    const ids = certifications.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

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
