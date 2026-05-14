# site-revamp-template

Team template for **rebuilding legacy marketing sites** in React (Vite) with **shared UI**, **token-based themes**, and two Cursor skills:

| Skill | Use when | Workspace root must be |
|-------|-----------|-------------------------|
| **`@site-revamp`** | Migrating or redesigning a **website** into this template | **This repo** (the Vite app) |
| **`@native-app-revamp`** | Building or revamping a **native** iOS/Android app (store binaries) | The **Expo / React Native** (or other native) **app repo** — not this Vite project |

This README is the **web** template. Native work uses the same skill **files** (see below) but a **different** git root in Cursor.

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

## Using Cursor skills

Skills are invoked in **Cursor chat** with **`@site-revamp`** or **`@native-app-revamp`** (type `@` and pick the skill, or paste the name). The project **rule** in `.cursor/rules/revamp-template.mdc` applies automatically when this web repo is open; it encodes layout and theme conventions for the Vite app.

### A. Marketing website only (default)

1. Open **this repository** as the Cursor **workspace root** (File → Open Folder).
2. Add client materials under `revamp-input/` following `revamp-input/README.md` (`brief.md`, URLs, brand assets, screenshots, optional `theme-preset.txt` / `layout-preset.txt`).
3. Start a chat and run **`@site-revamp`**, pasting the brief or pointing at `revamp-input/brief.md`.
4. Let the agent update routes, `siteConfig`, themes, and root artifacts **`SITE_MAP.md`**, **`THEME.md`**, **`CHECKLIST.md`** (and **`ASSUMPTIONS.md`** if anything was unclear).

### B. Native app only

1. Open your **mobile application repository** as the Cursor workspace root (not this template).
2. **Install the skill in that repo** if it is not already there: copy the folder `native-app-revamp` from this template into the app repo, e.g.  
   `cp -R /path/to/site-revamp-template/.cursor/skills/native-app-revamp /path/to/your-mobile-app/.cursor/skills/`  
   so you have `your-mobile-app/.cursor/skills/native-app-revamp/SKILL.md`.
3. Optionally mirror the same **`revamp-input/`** layout in the mobile repo for briefs, store links, and designs (`revamp-input` can be gitignored the same way).
4. Run **`@native-app-revamp`** in chat with the product brief.
5. The agent should maintain **`APP_FLOW.md`**, **`THEME.md`**, and **`CHECKLIST.md`** at the **mobile repo root** (optional **`STORE.md`**). To bootstrap navigation docs, copy **`APP_FLOW.example.md`** from `.cursor/skills/native-app-revamp/` to the mobile root as **`APP_FLOW.md`** and fill it in (or have the agent do it).

### C. Website and native app

Use **two workspace roots** (two Cursor windows or switch folders when a milestone is done):

1. **Web:** this template → **`@site-revamp`** → `SITE_MAP.md`, `THEME.md`, `CHECKLIST.md`.
2. **Mobile:** app repo → **`@native-app-revamp`** → `APP_FLOW.md`, `THEME.md`, `CHECKLIST.md`.

Keep **visual tokens** (palette, type, radii, motion intent) consistent across both `THEME.md` files. The web `THEME.md` in this repo has a short **“Related skills (web + native)”** section that points here.

## GitHub “Use this template”

1. Publish this repo to GitHub.
2. Enable **Template repository** in repo **Settings → General**.
3. New sites: **Use this template** → clone → update `package.json` name → set remote → first commit → add `revamp-input/` materials → run **`@site-revamp`** with the client brief.

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

**Native app (mobile repo root, `@native-app-revamp`):** `APP_FLOW.md` (start from `.cursor/skills/native-app-revamp/APP_FLOW.example.md` in the skill you copied), `THEME.md`, `CHECKLIST.md`, optional `STORE.md`. Skill source: `.cursor/skills/native-app-revamp/SKILL.md`.

## Stack

Vite 6, React 19, TypeScript (strict), React Router 7.
