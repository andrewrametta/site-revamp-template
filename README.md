# site-revamp-template

Team template for **rebuilding legacy sites** in React with **shared UI**, **token-based themes**, and Cursor Agent Skills: **`@site-revamp`** (this web repo) and **`@native-app-revamp`** (use with a separate Expo/React Native app root when the deliverable is a store app, not responsive web).

## Project

The app is a **client-neutral marketing shell**: placeholder copy in `src/lib/siteConfig.ts`, demo **Unsplash** imagery in `src/lib/siteMedia.ts`, and defaults **`showcase`** (theme) + **`balanced`** (home structure) when env vars are unset. **Pick a different theme per client** via `VITE_SITE_THEME`, and a **structural preset** via **`VITE_LAYOUT_PRESET`** (see **`src/lib/layoutPresets.ts`** for the full list, including `pricing`, `newsroom`, `docs`, `changelog`, and `app-shell`) so each spin-off differs in both **palette** and **page architecture**—see also **`src/lib/themePresets.ts`**. Inner pages use **`PageMast`** plus shared CSS (`sitePages.css`, `homeShowcase.css`, and `layoutPresets.css` imported from `src/App.tsx`).

Example routes: Home, About, Services, Feeder menu (rename or remove per client), Shop overview, Contact.

- **Brand assets:** add files under `public/brand/` (see `public/brand/README.md`) and set `siteConfig.logoUrl` when a logo ships.
- **Deploy:** static build via `npm run build` → `dist/`; configure the host for SPA fallback on all app routes.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

- **Theme + layout:** set `VITE_SITE_THEME` and **`VITE_LAYOUT_PRESET`** (see **`src/lib/themePresets.ts`** and **`src/lib/layoutPresets.ts`**). If omitted, the app defaults to **`showcase`** + **`balanced`**. See `src/themes/README.md`.
- **Revamp inputs:** see `revamp-input/README.md` (folder is gitignored except that README).

## Cursor (team)

1. **Rule:** `.cursor/rules/revamp-template.mdc` applies project-wide standards for this **web** template.
2. **Web revamp:** `.cursor/skills/site-revamp/` — **`@site-revamp`**. Drop client materials into `revamp-input/`, then run the workflow.
3. **Native app revamp:** `.cursor/skills/native-app-revamp/` — **`@native-app-revamp`**. Open the **mobile app repository** as the workspace (Expo + React Native + TypeScript by default); copy this skill folder into that repo if it is missing. It produces `APP_FLOW.md`, `THEME.md`, and `CHECKLIST.md` at that repo’s root.

## GitHub “Use this template”

1. Publish this repo to GitHub.
2. Enable **Template repository** in repo **Settings → General**.
3. New sites: **Use this template** → clone → update `package.json` name → set remote → first commit → run `@site-revamp` with the client brief.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |

## Artifacts maintained per project

**Marketing web (this template, `@site-revamp`):**

| File | Purpose |
|------|---------|
| `SITE_MAP.md` | Legacy URL → new route mapping |
| `THEME.md` | Token / brand decisions |
| `CHECKLIST.md` | Ship gate |
| `ASSUMPTIONS.md` | Optional; when inputs were incomplete |

**Native app (mobile repo root, `@native-app-revamp`):** `APP_FLOW.md`, `THEME.md`, `CHECKLIST.md` (optional `STORE.md`); see `.cursor/skills/native-app-revamp/SKILL.md`.

## Stack

Vite 6, React 19, TypeScript (strict), React Router 7.
