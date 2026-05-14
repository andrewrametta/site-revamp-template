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

## New repository bootstrap

- **One client → one GitHub repo** created from the template (**Use this template**), then clone and open **that** folder in Cursor. See the main skill doc **New repository (client spin-up)** for GitHub vs CLI flows.
- After clone: `npm install`, `cp .env.example .env`, edit **`package.json`** `name`, first commit, `git push -u origin main` when the remote exists.
- Confirm **`.cursor/skills/`** and **`.cursor/rules/`** exist in the clone (they should if committed on the template default branch); copy from the template if anything is missing.

## Ingestion

### URL-first capture (recommended when starting from legacy URLs)

When **`revamp-input/urls.txt`**, **`urls.json`**, or URLs pasted in chat are the main input:

**Optional `urls.json` shape** (one file, easy for agents to parse):

```json
{
  "primary": "https://www.example.com",
  "staging": "https://staging.example.com",
  "pages": [
    "https://www.example.com/about",
    "https://www.example.com/pricing"
  ]
}
```

1. **Bootstrap inventory** — Copy **`URL_CAPTURE.example.md`** from this skill folder to **`revamp-input/url-capture.md`** and fill it while browsing (or have the agent draft it from live pages). Merge any overlap into **`brief.md`** if the team prefers a single doc.
2. **Crawl order** — Home → every **primary nav** target → **footer** destinations → high-traffic landings the client names (pricing, contact, careers, docs hub). Note **auth-gated** areas in `ASSUMPTIONS.md` instead of guessing.
3. **Per page, capture at minimum:** `<title>`, meta description, **H1**, ordered list of **main sections** (hero, logos, feature grid, testimonial, FAQ, …), **primary CTAs** and hrefs, **forms** (fields, action), **embeds** (maps, video, booking widgets), and **images** worth replacing (describe; source files go under `revamp-input/media/` or `public/brand/`).
4. **Site-wide:** cookie/consent UI, analytics snippets (names only), **hreflang** / alternate locales, **canonical** / `noindex` quirks, **third-party** scripts that affect layout (review widgets, chat).
5. **Reuse patterns** — Identify repeated modules (testimonial rows, pricing cards, icon feature grids) for shared components under `src/components/` rather than one-off pages.
6. **Parity** — Anything that must **not** ship without a migration note (PDFs, legal text, booking flows) goes into **`SITE_MAP.md`** or **`CHECKLIST.md`** with an explicit owner.

### General

- Capture primary nav, footer links, and CTA destinations even when the brief is prose-only.
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
