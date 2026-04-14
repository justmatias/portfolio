# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm lint       # ESLint (next/core-web-vitals + TypeScript)
pnpm format     # Prettier write
tsc --noEmit    # Type check without emitting
```

No test suite is configured.

## Environment

Copy `.env.sample` to `.env.local` and populate:

- `DATABASE_URI` — MongoDB connection string
- `DATABASE_NAME` — database name

## Architecture

Next.js 15 App Router site backed by MongoDB. All content (projects, skills, experience, resources) lives in MongoDB and is queried directly from server components via typed query functions in `src/lib/queries/`.

```
src/
  app/
    (pages)/      # Route group: /, /skills, /projects, /resources
      layout.tsx      # Header, Footer, PageTransition
      page.tsx        # Home
      projects/       # page.tsx, loading.tsx, error.tsx
      skills/         # page.tsx, loading.tsx, error.tsx
      resources/      # page.tsx, loading.tsx, error.tsx
    layout.tsx        # Root: html/body/ThemeProvider only
    template.tsx      # Framer Motion page entrance animation
    not-found.tsx
  components/
    ui/               # shadcn/ui primitives only (button, card, badge, carousel)
    features/
      header/         # Header, MenuButton, ThemeToggle
      footer/         # Footer
      projects/       # ProjectCard
      skills/         # SkillSection, SkillCard
      home/           # WorkExperienceList
      shared/         # AnimatedCard, LinkPreview, PageTransition, ParticlesEffect, Logos
    providers/        # ThemeProvider wrapper
  lib/
    db.ts             # MongoDB singleton (lazy init, cached connection)
    queries/          # getProjects, getSkillsByCategory, getExperience, getResources, getBloggers, getPeople
    utils.ts          # cn() helper (tailwind-merge + clsx)
  models/             # Mongoose schemas with InferSchemaType — source of truth for types
```

### Data flow

1. Page component (server) calls a query function from `src/lib/queries/`
2. Query function connects to MongoDB via the singleton, queries via Mongoose, returns plain objects (`.lean()`)
3. Page passes data to child components for rendering

Pages use `export const dynamic = 'force-dynamic'` and `fetchCache = 'force-no-store'` so content is always fresh.

### Key conventions

- **TechKey** is derived from the `Logos` map in `src/components/features/shared/logos.tsx` via `export type TechKey = keyof typeof Logos`. To add a new tech icon, add the SVG component and an entry to `Logos` — `TechKey` updates automatically.
- **Types derive from models**: Mongoose schemas in `src/models/` export both the Mongoose model (value) and a plain type with the entity name (e.g. `export type Skill`, `export const Skill`) via `InferSchemaType`. Import the type with `import type { Skill } from '@/models/skill'`. There is no `src/types/` folder.
- **shadcn/ui** components live in `src/components/ui/` — primitives only. Feature components go in `src/components/features/<domain>/`.
- Dark mode via `next-themes` using the `class` strategy; theme-aware styles use CSS variables defined in `globals.css`.
- Framer Motion page entrance: `y: 20 -> 0, opacity: 0 -> 1, 500ms` — keep new animated sections consistent with this.
- External image domain `api.microlink.io` is whitelisted in `next.config.mjs` for resource link previews.

## Output

- Return code first. Explanation after, only if non-obvious.
- No inline prose. Use comments sparingly - only where logic is unclear.
- No boilerplate unless explicitly requested.

## Code Rules

- Simplest working solution. No over-engineering.
- No abstractions for single-use operations.
- No speculative features or "you might also want..."
- Read the file before modifying it. Never edit blind.
- No docstrings or type annotations on code not being changed.
- No error handling for scenarios that cannot happen.
- Three similar lines is better than a premature abstraction.

## Review Rules

- State the bug. Show the fix. Stop.
- No suggestions beyond the scope of the review.
- No compliments on the code before or after the review.

## Debugging Rules

- Never speculate about a bug without reading the relevant code first.
- State what you found, where, and the fix. One pass.
- If cause is unclear: say so. Do not guess.

## Simple Formatting

- No em dashes, smart quotes, or decorative Unicode symbols.
- Plain hyphens and straight quotes only.
- Natural language characters (accented letters, CJK, etc.) are fine when the content requires them.
- Code output must be copy-paste safe.
