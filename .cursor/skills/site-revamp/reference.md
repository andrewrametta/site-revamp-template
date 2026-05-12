# Site revamp — extended reference

## Ingestion

- Capture primary nav, footer links, and CTA destinations.
- Identify duplicated modules (testimonial rows, pricing cards, feature grids) for extraction into components under `src/components/`.
- For JS-heavy legacy pages, rely on `revamp-input/screenshots/` plus user-provided HTML exports when the DOM is not fully visible to automation.

## Accessibility (minimum)

- One `h1` per page; heading levels do not skip.
- Visible focus for all interactive elements (`:focus-visible` is already global).
- Images: `alt` text; decorative images use empty `alt` and `role="presentation"` when appropriate.
- Forms: associated labels, error text, and logical tab order.

## Performance (minimum)

- Use lazy `React.lazy` for large secondary routes when they measurably help bundle size.
- Prefer modern image formats where sourced from `revamp-input/media/`; size for layout widths.
- Avoid blocking fonts unless the brief requires a specific licensed face.

## SEO (marketing sites)

- Unique `<title>` and meta description per major route (extend `index.html` pattern or add a small head helper if the project introduces one).
- Stable URLs documented in `SITE_MAP.md` for redirects from legacy hosts.

## Legal / policy

- Respect legacy site terms, robots, and asset licenses. Do not copy third-party prose or media without rights confirmation in `brief.md`.

## Theming checklist

- [ ] All new colors introduced in `src/themes/<id>.css` variables, not inline in TSX.
- [ ] Theme registered in `applyTheme.ts` and imported from `index.css`.
- [ ] `VITE_SITE_THEME` documented in `.env.example`.
