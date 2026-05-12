# Theme

**Active theme id:** `default` (override with `VITE_SITE_THEME` in `.env`)

**Source files:** `src/themes/default.css`, optional `src/themes/<client>.css`

## Decisions

- Base tokens live on `.theme-default` (see `src/themes/default.css`).
- Per-client palettes: add a new theme file, import in `src/index.css`, register in `src/lib/applyTheme.ts`.

_Update with brand colors, type choices, and radius/shadow tweaks for each engagement._
