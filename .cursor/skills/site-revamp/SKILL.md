---
name: site-revamp
disable-model-invocation: false
description: >-
  Revamps a legacy marketing or content site into this repository’s React +
  Vite template: ingests live URLs and brand assets, maps information
  architecture to routes, applies theme tokens and shared UI primitives, and
  produces SITE_MAP.md, THEME.md, and CHECKLIST.md. Use when the user mentions
  site revamp, redesign from a URL, migrating a website into this template,
  themed spin-ups, or drops materials under revamp-input/.
---

# Site revamp (team template)

## Preconditions

- Workspace is this **site-revamp-template** (or a fork) unless the user explicitly names another root.
- Prefer materials under `revamp-input/` (see `revamp-input/README.md`). If the user only pastes a URL or assets in chat, copy them into that structure (or list assumptions in `ASSUMPTIONS.md` at repo root).

## Non‑negotiables

- **Do not** vendor the legacy codebase into `src/` wholesale. Use it as reference only; new UI uses this template’s layout and `src/components/ui/*`.
- **Styling**: colors, type rhythm, and radii come from **`src/themes/*.css`** CSS variables on `.theme-*` (see `src/themes/README.md`). No one-off hex in components except inside theme files or documented exceptions in `THEME.md`.
- **Primitives**: use `Button`, `Container`, `Section` from `src/components/ui` for new work; extend there if a pattern repeats three times.
- **Routing**: `react-router-dom`; register new pages in `src/App.tsx`.
- **Secrets**: never commit API keys or `.env` values; use `.env.example` only.

## Workflow

1. **Ingest** — Open `revamp-input/brief.md` and URLs. Use browser tools for live pages when available. Record sections, nav, footer, forms, and critical user journeys.
2. **Spec** — Add or update `SITE_MAP.md` (legacy URL → new route), `THEME.md` (token decisions, brand overrides), and note gaps in `ASSUMPTIONS.md` if inputs are incomplete.
3. **Theme** — Add or adjust `src/themes/<client>.css`, import in `src/index.css`, register id in `src/lib/applyTheme.ts`. Set `VITE_SITE_THEME` in `.env.example` and user’s local `.env`.
4. **Implement** — Shell (`SiteHeader`, `SiteFooter`, `main` landmark) first, then home, then remaining routes. Replace placeholder `HomePage` content. Move static assets to `public/` when appropriate.
5. **Harden** — Semantic headings, labels on controls, focus styles, responsive checks, meaningful `lang` on `<html>` if multi-language. Prefer responsive layouts with theme spacing tokens.
6. **Handoff** — Ensure `CHECKLIST.md` reflects a11y/perf/SEO smoke results; update root `README.md` “Project” section with site name and deploy notes.

## Outputs (create or refresh)

| Artifact | Role |
|----------|------|
| `SITE_MAP.md` | Route and content mapping from legacy to new. |
| `THEME.md` | Token and typography decisions tied to theme files. |
| `CHECKLIST.md` | Ship gate: a11y, performance, SEO, content parity. |
| `ASSUMPTIONS.md` | Only when required inputs were missing. |

## Extra detail

- Long checklists and edge cases: [reference.md](reference.md)
