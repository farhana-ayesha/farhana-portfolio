<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack and layout

- Next.js 16.4.3 (App Router, Turbopack by default) + React 19.3, plain JavaScript. There is no `tsconfig.json`; only `jsconfig.json`, which maps `@/*` to `src/*`.
- All app code is under `src/app` (`page.js`, `layout.js`, `globals.css`). There is no root `app/` directory — the README still says `app/page.js` and is wrong.
- Version-matched framework docs are bundled at `node_modules/next/dist/docs/` (same tree as nextjs.org/docs). Trust them over training data for anything Next.js-specific.

## Commands

- `npm run dev` — dev server on :3000.
- `npm run lint` — runs the ESLint 9 flat config (`next lint` was removed in Next 16). Single file: `npx eslint src/app/page.js`.
- `npm run build` — the only meaningful verification; it runs the Cache Components/prerender checks that dev mode only surfaces as overlay hints.
- There is no test runner, typecheck script, or CI workflow. Don't invent commands like `npm test`.

## Cache Components changes how pages behave

`next.config.mjs` sets `cacheComponents: true` and `partialPrefetching: true`. Keep both: `cacheComponents` makes PPR/static shells the default, and `partialPrefetching` is required alongside it.

- `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` are Promises — `await` them.
- Uncached request/runtime data read outside `<Suspense>` fails the build (`blocking-prerender-dynamic`). Fix by wrapping the reading component in `<Suspense fallback={...}>`, caching with `use cache`, or opting the segment out with `export const instant = false` (blocking route).
- Synchronous IO during prerender (`new Date()`, `Date.now()`, `Math.random()`, `crypto.randomUUID()`) also fails the build (`blocking-prerender-current-time`). The usual trap is a footer printing the current year — wrap it in `<Suspense>` with `await connection()` before the call, cache it, or make it a Client Component.
- Do not export `runtime` from a route (not even `'nodejs'`); Cache Components is Node-only and rejects it.

## Styling

- Tailwind v4 is configured entirely in CSS: `src/app/globals.css` uses `@import "tailwindcss"` plus `@theme inline` for design tokens. There is no `tailwind.config.*` or PostCSS config, so tokens belong in `@theme`.
- The Tailwind pipeline is the `@tailwindcss/turbopack` loader registered under `turbopack.rules` in `next.config.mjs`; keep that rule in place when editing config.
- `layout.js` loads Geist and maps it to `--font-sans`, but the `body` rule in `globals.css` overrides it with Arial. Change that rule if Geist should apply site-wide.

## Current state

`src/app/page.js` is still the create-next-app template; no real portfolio content exists yet. The single `master` branch has only the initial scaffold commit, so there are no established PR/release conventions to follow.
