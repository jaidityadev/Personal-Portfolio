## Project rules

- No em dashes in visitor-facing copy, and no AI attribution (co-author trailers, "Generated with" lines) in commits or PRs.
- All visitor-facing copy, links, experience, projects, research and skills live in `src/content/portfolio.ts`; components only render it. Why: the owner edits content without touching layout.
- Missing info is `null`/empty in content and the UI hides it or shows a muted "coming soon" state — never a fake link. Why: no dead links or invented facts.
- Theme is a `dark` class on `<html>` set by a pre-hydration inline script (`themeInitScript`), which also adds `js` so `.reveal` only hides content when JS runs. Why: no flash and no hidden content without JS.
- Site chrome (header, footer) lives in `__root.tsx`; sections in `src/components/sections`, reusable pieces in `src/components/site`. Project detail pages are `/projects/$slug`.
- Project illustrations are seeded, deterministic SVGs in `ProjectVisual.tsx` (no random at render). Why: SSR/client markup must match.
