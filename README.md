# site-revamp-template

Team template for **rebuilding legacy sites** in React with **shared UI**, **token-based themes**, and a **Cursor Agent Skill** that encodes the revamp workflow.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

- **Theme:** set `VITE_SITE_THEME` to a registered id (`default`, `client-example`). See `src/themes/README.md`.
- **Revamp inputs:** see `revamp-input/README.md` (folder is gitignored except that README).

## Cursor (team)

1. **Rule:** `.cursor/rules/revamp-template.mdc` applies project-wide standards.
2. **Skill:** `.cursor/skills/site-revamp/` — invoke with **`@site-revamp`** (or describe a revamp; `disable-model-invocation` is off so discovery works in this repo).
3. Drop client materials into `revamp-input/`, then ask the agent to run the skill workflow.

## GitHub “Use this template”

1. Publish this repo to GitHub.
2. Enable **Template repository** in repo **Settings → General**.
3. New sites: **Use this template** → clone → rename package in `package.json` → set remote → first commit.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |

## Artifacts maintained per project

| File | Purpose |
|------|---------|
| `SITE_MAP.md` | Legacy URL → new route mapping |
| `THEME.md` | Token / brand decisions |
| `CHECKLIST.md` | Ship gate |
| `ASSUMPTIONS.md` | Optional; when inputs were incomplete |

## Stack

Vite 6, React 19, TypeScript (strict), React Router 7.
