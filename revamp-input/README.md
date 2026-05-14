Place **per-project** materials here while running the site-revamp skill (or the same layout in a **mobile app repo** when using **`@native-app-revamp`**). Paths are relative to the repo root. **Client web work** should live in a **dedicated repository** created from the template (see root `README.md` § Using Cursor skills); do not mix multiple clients into one checkout.

| File / folder | Purpose |
|---------------|---------|
| `brief.md` | Goals, audience, **deliverable** (web SPA in this repo vs **native app elsewhere** vs **PWA**), **voice & imagery notes**, motion tolerance, trust/compliance, integrations, hosting, **post-launch ownership**. |
| `theme-preset.txt` | Optional single line: theme id (`modern`, `sports`, …) for `VITE_SITE_THEME`. See `src/lib/themePresets.ts`. |
| `layout-preset.txt` | Optional single line: structural layout id (`image-forward`, `story`, …) for `VITE_LAYOUT_PRESET`. See `src/lib/layoutPresets.ts`. |
| `urls.txt` or `urls.json` | Legacy site URL(s); staging if relevant. Optional **`urls.json`** shape: `{ "primary": "https://…", "staging": "https://…", "pages": ["https://…/about", "…"] }`. |
| `url-capture.md` | Optional; **paste starter:** `.cursor/skills/site-revamp/URL_CAPTURE.example.md` → copy here as `url-capture.md`. Checklist inventory from live URLs (nav, footer, per-page sections, CTAs, forms, SEO) before `SITE_MAP.md`. |
| `brand/` | Logos (SVG preferred), favicon, font files or licensed links. |
| `media/` | Imagery referenced by the new build. |
| `content/` | Optional copy in Markdown or JSON. |
| `screenshots/` | Full-page captures (mobile + desktop) for visual parity. |

This folder is **gitignored except this README** so client assets stay local. Duplicate this structure when starting a revamp, or copy from a prior project.
