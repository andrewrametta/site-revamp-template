# Site revamp — extended reference

## Client tailoring & delight (beyond presets)

Use the brief and `THEME.md` / `CHECKLIST.md` to make the site feel **commissioned**, not **configured**.

- [ ] **Audience & jobs-to-be-done** — Primary reader and their goal per major route; CTA verbs match (trial vs demo vs donate vs call).
- [ ] **Voice** — Reading level, industry terminology, inclusive language; no long-form paste from legacy CMS without rights and cleanup.
- [ ] **Imagery** — Strategy (people / product / place); first-party vs stock; credits and releases; **`siteMedia`** / `public/brand/` only, no mystery URLs.
- [ ] **Motion** — Prefer subtle, meaningful motion; honor **`prefers-reduced-motion`**; document exceptions in `THEME.md`.
- [ ] **Trust** — Privacy / cookies / disclaimers as required; logo & testimonial permissions; footer links to policies when live.
- [ ] **SEO & social** — Titles, meta, `SITE_MAP.md` redirects; plan OG/Twitter cards and canonicals before cutover.
- [ ] **Performance** — Hero image priority, font strategy, third-party script minimalism; smoke Lighthouse after deploy.
- [ ] **Conversion** — One clear primary CTA per key view; `siteConfig.headerCta` and store links match real funnels.
- [ ] **Analytics** — Client-approved, privacy-respecting measurement plan (events for hero CTA, form submit, outbound store).
- [ ] **Handoff** — Who edits copy, who swaps images, who owns DNS/forms; short update path in `README.md` or separate handoff note.
- [ ] **Deliverable surface** — Confirm **web SPA (this repo)** vs **PWA scope** vs **native app (separate repo/tooling)** in the brief; do not treat store apps as a layout preset here. For store-native work, use **`@native-app-revamp`** in the mobile workspace (see `.cursor/skills/native-app-revamp/`).

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
- [ ] Theme registered in **`src/lib/themePresets.ts`** and matching **`src/themes/<id>.css`** imported from `index.css`.
- [ ] `VITE_SITE_THEME` documented in `.env.example`.
- [ ] **Structural layout:** `VITE_LAYOUT_PRESET` set when home flow should differ; new ids only by extending **`src/lib/layoutPresets.ts`** (`HOME_SECTION_ORDER`; include **`stats`**, **`pricing`**, **`newsroom`**, **`docsHub`**, **`changelog`**, **`appShell`** only when the brief needs those bands) and **`src/pages/layoutPresets.css`**.
- [ ] **Baseline:** first client pass keeps **`PageMast`**, global **`sitePages.css`** + **`homeShowcase.css`** + **`layoutPresets.css`**, with distinct **theme + layout** choices so spin-offs diverge visually.

## Layout baseline (reference)

- **`PageMast`:** `src/components/layout/PageMast.tsx` — standard inner-page hero.
- **Shared CSS:** `src/pages/sitePages.css` (mast, splits, quotes, cards), `src/pages/homeShowcase.css` (home-only bands); both imported in `src/App.tsx`.
- **Config / media:** `src/lib/siteConfig.ts`, `src/lib/siteMedia.ts` — centralize facts and image paths; avoid one-off asset strings across pages when the same image repeats.
- **Layout presets:** `src/lib/layoutPresets.ts` (`HOME_SECTION_ORDER`) + `src/pages/layoutPresets.css` — home section flow and structural “wow” tuning via `html[data-layout]`.
