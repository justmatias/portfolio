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
- `BASE_URL` — e.g. `http://localhost:3000` (used by pages to call internal API routes via axios)

## Architecture

Next.js 15 App Router site backed by MongoDB. All content (projects, skills, experience, resources) lives in MongoDB and is served through internal API routes at `/api/*`. Pages fetch their own data server-side by calling those API routes with axios using `BASE_URL`.

```
src/
  app/
    (pages)/          # Route segments: /, /skills, /projects, /resources
    api/              # Internal API routes: /api/skills, /api/project, /api/experience, /api/resource
    layout.tsx        # Root layout with ThemeProvider and Header
  components/
    ui/               # shadcn/ui primitives (button, card, badge, carousel…)
    providers/        # ThemeProvider wrapper
    header.tsx        # Client component — sticky nav with mobile menu
    particles.tsx     # Client component — tsParticles background
  database/
    database.ts       # MongoDB singleton (lazy init, cached connection)
  models/             # Mongoose schemas: Project, Skill, Experience, Resource
  types/              # TypeScript interfaces and the TechKey union type
  lib/utils.ts        # cn() helper (tailwind-merge + clsx)
```

### Data flow

1. Page component (server) calls `axios.get(BASE_URL + '/api/...')`
2. API route connects to MongoDB via the singleton, queries via Mongoose, returns JSON
3. Page passes data to client/server child components for rendering

Pages use `export const dynamic = 'force-dynamic'` and `fetchCache = 'force-no-store'` so content is always fresh.

### Key conventions

- **TechKey** (`src/types/tech-keys.ts`) is a strict union type for all supported tech stack icons. Extend it when adding new technologies to projects or skills.
- **shadcn/ui** components live in `src/components/ui/` — prefer extending those over creating new primitives.
- Dark mode via `next-themes` using the `class` strategy; theme-aware styles use CSS variables defined in `globals.css`.
- Framer Motion page entrance: `y: 20 → 0, opacity: 0 → 1, 500ms` — keep new animated sections consistent with this.
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
