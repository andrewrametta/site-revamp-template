# Themes

Each theme is a CSS file that defines a `.theme-<id>` class setting **the same custom properties** as `default.css` (plus header/footer/mast tokens used by the layout shell).

**Single source of truth for valid ids:** `src/lib/themePresets.ts` (`THEME_PRESET_MANIFEST`). `src/lib/applyTheme.ts` reads that list—add new ids only there and in a matching CSS file.

## Personality presets (differentiate spin-offs)

| Id | Mood | When to use |
|----|------|-------------|
| `modern` | Cool neutrals, indigo, geometric sans | SaaS, tech, startups |
| `classic` | Warm paper, serif display, burgundy | Heritage, finance, formal brands |
| `sports` | Navy arena, lime CTA, condensed type | Teams, gyms, high-energy |
| `retro` | Cream, coral + teal, soft radii | Playful throwback brands |
| `shop` | White surfaces, emerald CTA | Retail, catalog, commerce-forward |
| `info` | Blue-gray, restrained chrome | Docs, support, knowledge sites |
| `showcase` | Dark editorial, gold, black chrome | Luxury / editorial default |

## System / reference

| Id | Role |
|----|------|
| `default` | Minimal light shell for smoke tests. |
| `client-example` | Second dark reference (cyan on navy) for experiments. |

## Declare a preset when revamping

1. Put a single line in **`revamp-input/theme-preset.txt`** (for example `modern`) **or** state it in **`brief.md`** / the chat prompt (`Theme preset: sports`).
2. Set `VITE_SITE_THEME=<id>` in `.env` and `.env.example`.
3. See **`src/lib/themePresets.ts`** for `promptHints` you can match from natural language.

## Add a fully custom client theme

1. Copy the closest preset (often **`showcase.css`** or **`modern.css`**) to `your-client.css`.
2. Change the root selector to `.theme-your-client`.
3. Add `{ id: "your-client", ... }` to **`THEME_PRESET_MANIFEST`** in `src/lib/themePresets.ts`.
4. `@import` the file from `src/index.css` (near other theme files, before `showcase-tokens.css`).
5. Set `VITE_SITE_THEME=your-client` in `.env` or the host environment.

Keep variable names stable so components stay theme-agnostic.

## Structural home layouts

Home section order and `html[data-layout]` styling are controlled separately—see **`src/lib/layoutPresets.ts`** (optional bands: **`stats`**, **`pricing`**, **`newsroom`**, **`docsHub`**, **`changelog`**, **`appShell`**) and **`src/pages/layoutPresets.css`**, and set **`VITE_LAYOUT_PRESET`** alongside `VITE_SITE_THEME`.
