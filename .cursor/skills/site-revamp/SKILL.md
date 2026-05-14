---
name: site-revamp
disable-model-invocation: false
description: >-
  Revamps a legacy marketing or content site into this repository’s React +
  Vite **web** template: ingests live URLs and brand assets, maps information
  architecture to routes, applies theme tokens and shared UI primitives, and
  produces SITE_MAP.md, THEME.md, and CHECKLIST.md. Use when the user mentions
  site revamp, redesign from a URL, migrating a website into this template,
  themed spin-ups, or drops materials under revamp-input/. **Native mobile app
  builds** use **`@native-app-revamp`** in the mobile repo—not a preset in this repo.
---

# Site revamp (team template)

## Preconditions

- Workspace is this **site-revamp-template** (or a fork) unless the user explicitly names another root.
- Prefer materials under `revamp-input/` (see `revamp-input/README.md`). If the user only pastes a URL or assets in chat, copy them into that structure (or list assumptions in `ASSUMPTIONS.md` at repo root).

## Web vs native mobile deliverable

- This skill targets a **web marketing SPA** in this repository (Vite + React + `react-router-dom`).
- **App Store / Play Store native apps** (Expo, React Native, Flutter, Swift, Kotlin, etc.) need a **different project**: build/signing, navigation primitives, and distribution differ from a static or SPA **website**. Do **not** fake that with a “mobile app” theme or layout preset here—this codebase does not produce store binaries. Use **`@native-app-revamp`** with the **mobile repo** as the workspace root (see `.cursor/skills/native-app-revamp/`).
- **Operational model:** keep **one agent at a time** (no orchestrator required). For web + app, use **this workspace for the site** and a **separate mobile starter repo** for the app; the same agent can switch **serially** between roots when one milestone is done.
- If the client needs **mobile-friendly web** or a **PWA** (responsive, installable shell, light offline), stay in this template and document scope in `brief.md` / `CHECKLIST.md`.

## Non‑negotiables

- **Do not** vendor the legacy codebase into `src/` wholesale. Use it as reference only; new UI uses this template’s layout and `src/components/ui/*`.
- **Styling**: colors, type rhythm, and radii come from **`src/themes/*.css`** CSS variables on `.theme-*` (see `src/themes/README.md`). No one-off hex in components except inside theme files or documented exceptions in `THEME.md`.
- **Primitives**: use `Button`, `Container`, `Section` from `src/components/ui` for new work; extend there if a pattern repeats three times.
- **Routing**: `react-router-dom`; register new pages in `src/App.tsx`.
- **Secrets**: never commit API keys or `.env` values; use `.env.example` only.

## Theme personality (initial prompt + brief)

Each spin-off should **pick a different visual preset** so sites do not all look like `showcase`. Registered ids and prompt keywords live in **`src/lib/themePresets.ts`** (`THEME_PRESET_MANIFEST`).

**In the user’s first message (or `revamp-input/brief.md`), require one of:**

- Explicit id: `Theme preset: modern` or `VITE_SITE_THEME=sports`
- Or natural language mapped by hints in the manifest (for example “retro 70s vibe”, “ecommerce shop look”, “docs-style info site”).

**Agent actions**

1. Resolve the id (use `matchThemePresetId()` mentally: normalize to lowercase, match `id` or any `promptHints` substring).
2. Set **`VITE_SITE_THEME=<resolved-id>`** in the user’s `.env` and in **`.env.example`** for the repo.
3. Document the choice in **`THEME.md`** (preset name, why it fits the brand, any overrides).
4. Only fork **`src/themes/<client>.css`** when the brand needs **custom colors or fonts** beyond the preset; then add the new id to **`THEME_PRESET_MANIFEST`** in `themePresets.ts` (and import the CSS in `src/index.css` if it is a new file).

Available personality presets (high level): **`modern`**, **`classic`**, **`sports`**, **`retro`**, **`shop`**, **`info`**, plus **`showcase`** (dark editorial default) and system themes **`default`**, **`client-example`**.

## Structural layout presets (home “wow” shape)

Independently from theme color, pick how the **home page prioritizes imagery, copy, and conversion bands**. Ids and hints live in **`src/lib/layoutPresets.ts`** (`LAYOUT_PRESET_MANIFEST`, `HOME_SECTION_ORDER`).

**Prompt / brief examples**

- `Layout preset: image-forward` or `VITE_LAYOUT_PRESET=commerce`
- Natural language: “photo-first portfolio”, “long-form editorial”, “put testimonials early”, “shop tiles above the fold” (match `promptHints`).

**Agent actions**

1. Resolve id via **`matchLayoutPresetId()`** (same normalization idea as themes).
2. Set **`VITE_LAYOUT_PRESET=<id>`** in `.env` and `.env.example` (`balanced` when unspecified).
3. Note the choice in **`THEME.md`** or `SITE_MAP.md` under a short “Layout” heading.
4. Extend **`HOME_SECTION_ORDER`** / **`layoutPresets.css`** only when the brief needs a genuinely new flow (keep variable-driven “wow” in CSS first).

Built-in structural ids: **`balanced`**, **`image-forward`**, **`text-forward`**, **`design-forward`**, **`story`**, **`commerce`**, **`event-forward`**, **`data-forward`**, **`academy`**, **`community`**, **`launch`**, **`minimal`**, **`local`**, **`nonprofit`**, **`lead-gen`**, **`trust`**, **`pricing`**, **`newsroom`**, **`docs`**, **`changelog`**, **`app-shell`**.

## Differentiation beyond theme & layout (client delight)

Theme + structural presets control **look** and **home flow**. Clients also perceive quality from **content, media, motion, trust, and operations**. Capture these in **`revamp-input/brief.md`** (and reflect outcomes in **`THEME.md`** / **`CHECKLIST.md`**) so each site feels bespoke, not “template + new colors.”

- **Voice & narrative** — audience (buyer vs end user), reading level, jargon vs clarity, **one primary job-to-be-done per key page**. Align hero kicker, `siteConfig.tagline`, and CTA verbs (e.g. “Book” vs “Contact sales” vs “Donate”) with that audience.
- **Imagery strategy** — people vs product vs place; illustration vs photo; **first-party vs licensed stock**; representation and context that match the brand (not generic filler). Centralize paths in **`siteMedia`** / `public/brand/`; document photo credits and model releases in the brief.
- **Motion & restraint** — prefer **purposeful** motion (existing hero respects **`prefers-reduced-motion`**). Avoid gratuitous parallax; document any extra animation in **`THEME.md`** so handoff matches client expectations.
- **Trust & compliance** — privacy/cookie stance, industry disclaimers (health, finance, legal), **testimonial and logo permissions**, terms links in footer when required. Never ship unapproved third-party copy or media.
- **SEO & sharing** — unique titles/descriptions, stable URLs in **`SITE_MAP.md`**, Open Graph / social preview strategy (even if implemented post–v1). Note redirect and canonical policy for legacy hosts.
- **Performance as polish** — hero `fetchPriority`, image dimensions, font loading strategy; defer non-critical scripts. Poor LCP reads as “cheap” regardless of theme.
- **Conversion clarity** — **`siteConfig.headerCta`** and per-page actions: **one dominant primary CTA** per viewport where possible; secondary actions visually quieter. Match CTA destinations to real booking / CRM / storefront flows.
- **Analytics & proof of value** — document recommended event names or tooling in the brief (privacy-respecting); helps the client justify the revamp after launch.
- **Post-launch ownership** — who updates copy, who swaps seasonal imagery, who owns DNS and forms. Short “how to change X” in **`README.md`** or handoff doc reduces buyer’s remorse.

These items do not all need new code presets; they need **explicit brief capture** and disciplined implementation during the workflow steps below.

## First-run layout baseline (styling standard)

On the **first implementation pass** for a new site (or right after “Use this template”), keep the shared **layout system** (`PageMast`, `sitePages.css`, `homeShowcase.css`, `siteConfig` / `siteMedia`) while applying:

- **Theme preset** — colors, type, chrome (`VITE_SITE_THEME` from **`themePresets.ts`**); **`showcase`** when unspecified.
- **Structural layout preset** — home section order + imagery vs copy weighting (`VITE_LAYOUT_PRESET` from **`layoutPresets.ts`**); **`balanced`** when unspecified.
- **Custom theme fork:** add `src/themes/<client>.css` only when palette or fonts diverge from every existing theme preset; register the new id in **`src/lib/themePresets.ts`** and import the file in **`src/index.css`**.
- **Shell:** implement `SiteHeader` / `SiteFooter` first; wire **`src/lib/siteConfig.ts`** and **`src/lib/siteMedia.ts`**.
- **Inner pages:** use **`PageMast`** and patterns from **`src/pages/sitePages.css`**.
- **Home:** follow **`src/pages/homeShowcase.css`** and structural overrides in **`src/pages/layoutPresets.css`**; keep global imports in **`src/App.tsx`**. `applyLayoutPresetFromEnv()` in **`src/main.tsx`** must run next to `applyThemeFromEnv()` so `document.documentElement.dataset.layout` is set before paint.

## Workflow

1. **Ingest** — Open `revamp-input/brief.md` and URLs; read **`revamp-input/theme-preset.txt`** and **`revamp-input/layout-preset.txt`** when present. Extract **audience, voice, imagery rules, motion tolerance, trust/compliance, SEO, and post-launch ownership** (see **Differentiation beyond theme & layout** above). Use browser tools for live pages when available. Record sections, nav, footer, forms, and critical user journeys.
2. **Spec** — Add or update `SITE_MAP.md` (legacy URL → new route), `THEME.md` (theme + **layout** preset ids), and note gaps in `ASSUMPTIONS.md` if inputs are incomplete.
3. **Theme + layout presets** — Resolve **theme personality** and **structural layout** from the prompt or brief; set **`VITE_SITE_THEME`** and **`VITE_LAYOUT_PRESET`** in `.env` and `.env.example`. Prefer existing entries in **`themePresets.ts`** / **`layoutPresets.ts`**. Fork CSS or extend order maps only when nothing fits.
4. **Implement** — Shell (`SiteHeader`, `SiteFooter`, `main` landmark) first, then home, then remaining routes. Replace placeholder copy and imagery via `siteConfig` / `siteMedia`; keep **`PageMast`**, **`sitePages.css`**, and **`homeShowcase.css`** patterns unless the brief opts out. Move static assets to **`public/brand/`** when appropriate.
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
