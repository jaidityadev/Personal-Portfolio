# Jaiditya Dev · Portfolio

Personal site of Jaiditya Dev, a data scientist and AI engineer in Deloitte Canada's Data & AI practice in Toronto.

**Live:** [jaiditya-dev.netlify.app](https://jaiditya-dev.netlify.app)

It covers production ML and agentic AI work from ADP Canada, four peer-reviewed publications in forecasting and public health, and teaching and research at the University of Toronto.

## Stack

- [TanStack Start](https://tanstack.com/start) with React 19, server-rendered
- Tailwind CSS v4
- Vite, with Nitro packaging the server for Netlify
- Vitest and Testing Library

## Running it locally

Requires [Bun](https://bun.sh) and Node 22+.

```sh
bun install
bun run dev      # http://localhost:8080
bun run test
bun run build    # outputs dist/ and .netlify/
```

## Editing content

All visitor-facing copy lives in [`src/content/portfolio.ts`](src/content/portfolio.ts): profile, links, experience, projects, publications, skills and contact. Components only render that data, so most updates never touch layout code.

- `null` or an empty array hides a field or block instead of showing a placeholder link.
- Each project gets a page at `/projects/<slug>` and an illustration picked by its `visual` field (drawn in `src/components/site/ProjectVisual.tsx`).
- Professional work stays high level. No confidential data, code or internal architecture.

## Project layout

```
src/
  content/portfolio.ts     all site copy
  routes/                  pages (home, /projects/$slug) and the root layout
  components/sections/     homepage sections
  components/site/         shared pieces: header, timeline, cards, visuals
public/                    portrait, favicons, robots.txt
```

## Deployment

Pushing to `main` deploys to Netlify. `netlify.toml` runs `bun run build` and publishes `dist/`, and the server-rendering function is picked up from `.netlify/functions-internal`.
