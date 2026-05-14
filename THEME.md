# Theme — showcase (spin-off baseline)

## Choosing a preset (so each site looks different)

This file documents **one** active theme for the project. **Before implementation**, pick a personality id from **`src/lib/themePresets.ts`** (`modern`, `classic`, `sports`, `retro`, `shop`, `info`, `showcase`, …) and set `VITE_SITE_THEME` accordingly. State the id in `revamp-input/theme-preset.txt` or the user prompt (`Theme preset: retro`).

**Structural layout (home page):** independently set **`VITE_LAYOUT_PRESET`** using ids from **`src/lib/layoutPresets.ts`** (`balanced`, `image-forward`, `text-forward`, `design-forward`, `story`, `commerce`, `event-forward`, `data-forward`, `academy`, `community`, `launch`, `minimal`, `local`, `nonprofit`, `lead-gen`, `trust`, `pricing`, `newsroom`, `docs`, `changelog`, `app-shell`) or `revamp-input/layout-preset.txt`. This controls section **order** on the home page (including optional **`stats`**, **`pricing`**, **`newsroom`**, **`docsHub`**, **`changelog`**, **`appShell`** bands) and CSS “wow” weighting in `src/pages/layoutPresets.css` without forking the whole template.

## Theme id

- **File:** `src/themes/showcase.css` (+ shared layout tokens in `src/themes/showcase-tokens.css`)
- **Class:** `.theme-showcase`
- **Env:** `VITE_SITE_THEME=showcase` (see `.env.example`). If the variable is omitted locally, `applyThemeFromEnv()` still defaults to **`showcase`** so new clones match this baseline.

## Direction

- **Palette:** deep forest page background, lifted surface panels, muted sage supporting text, warm gold primary for CTAs and highlights.
- **Chrome:** near-black header so a light logo or wordmark reads clearly; gold hairline accent, pill nav, scroll-tightened bar. Footer uses a deeper slab with a gold top accent. Dedicated tokens: `--color-header-*`, `--color-footer-*`, `--rail-*`, `--color-page-mast-*`.
- **Typography:** `Oswald` for display headings, `Source Sans 3` for body (Google Fonts in `index.html`). Swap faces in `index.html` and theme `--font-*` tokens when the client supplies a licensed kit.
- **Imagery:** demo pages use **Unsplash** URLs in `src/lib/siteMedia.ts`. Replace with assets under `public/brand/` during a client revamp and update `siteMedia` / page `alt` text accordingly.

## Layout baseline (carry forward on new sites)

- **`PageMast`** (`src/components/layout/PageMast.tsx`) for inner-page heroes: eyebrow, title, lede, optional image, primary actions.
- **Global page chrome:** `src/pages/sitePages.css` (section rhythm, `show-split`, `show-quote`, `info-card`, mast utilities) and `src/pages/homeShowcase.css` (home hero, bento, visit band). Both are imported from `src/App.tsx` so every route shares the same visual language.
- **Config:** `src/lib/siteConfig.ts` (name, tagline, optional `logoUrl` / `storeUrl`, header CTA, contact, address) and `src/lib/siteMedia.ts` (imagery). Keep marketing facts in config, not scattered in JSX.

## Token overrides (summary)

Colors and radii live on `.theme-showcase` using the same variable names as `default.css` so primitives stay theme-agnostic.

| Token | Role |
|-------|------|
| `--color-bg` / `--color-surface` | Page + panel backgrounds |
| `--color-text` / `--color-text-muted` | Primary + supporting copy |
| `--color-primary` | Buttons, emphasis |
| `--color-link` | Inline links |
| `--color-focus` | `:focus-visible` outline |

## Client fork

Copy `showcase.css` to `src/themes/<client>.css`, rename the root class to `.theme-<client>`, register the id in `src/lib/applyTheme.ts`, import from `src/index.css`, and set `VITE_SITE_THEME=<client>` in `.env` / hosting.
