# URL capture — legacy site inventory

**Purpose:** When the revamp starts from **live URLs** (with or without `revamp-input/urls.txt`), use this as a **checklist** so nothing critical is missed before `SITE_MAP.md` and implementation.

**How to use**

1. Copy this file to **`revamp-input/url-capture.md`** (recommended) or paste sections into **`revamp-input/brief.md`**.
2. For each important URL, fill one **row** in the per-URL table (or add subsections).
3. Prefer **browser tools** on reachable pages; if the DOM is gated or heavy-JS, lean on **`revamp-input/screenshots/`** and exports noted in `ASSUMPTIONS.md`.

---

## Scope

| Item | Value |
|------|--------|
| Primary domain(s) | |
| Staging / preview URL(s) | |
| Locales / languages | |
| Auth-gated or member-only areas (Y/N + notes) | |

---

## Site-wide (crawl once)

- [ ] **Primary nav** — labels, order, nested/mega menus, mobile drawer behavior.
- [ ] **Secondary nav** — utility bar, “Sign in”, language switcher, region picker.
- [ ] **Footer** — columns, legal (Privacy, Terms, Cookies), social icons + destinations, newsletter, address block.
- [ ] **Global CTAs** — header button, sticky CTAs, phone `tel:` / `mailto:` links.
- [ ] **Trust** — badges, certifications, partner logos, review widgets (name vendor if third-party).
- [ ] **Analytics / tags** — GTM, Segment, pixels (list; do not paste secrets); cookie consent banner copy and categories if visible.
- [ ] **Forms (global)** — search, newsletter signup (fields + submit behavior).
- [ ] **Assets** — favicon, default OG image, social handles in meta.
- [ ] **Technical** — obvious CMS, CDN, or framework hints (for migration risk only).

---

## Per-URL capture (repeat for each key page)

| URL | Page intent | `<title>` | Meta description | H1 | Main sections (top → bottom) | Primary CTA(s) + target | Forms (purpose / fields) | Notable embeds (maps, video, iframes) | Images worth sourcing (describe; path later) |
|-----|-------------|-----------|------------------|-----|------------------------------|-------------------------|--------------------------|----------------------------------------|-----------------------------------------------|
| | | | | | | | | | |

**Also note per URL (short bullets OK):**

- **SEO:** canonical link, `noindex`, hreflang alternates if any.
- **Structured content:** pricing tables, FAQs, team grids, job listings, docs sidebar patterns.
- **Redirects:** old paths that 301 elsewhere (for `SITE_MAP.md`).

---

## Content & parity

- [ ] **Copy source** — marketing claims, legal disclaimers, regulated industry text (flag for legal review).
- [ ] **Downloads** — PDFs, whitepapers (list URLs; confirm rights to host in new build).
- [ ] **Blog / news** — listing URL pattern, pagination, categories/tags (for route planning).
- [ ] **Shop / app links** — external store, booking SaaS, or login (document outbound only vs in-app).

---

## Handoff to `SITE_MAP.md`

- [ ] Every **legacy URL** that must survive maps to a **new route** (or explicit 301/410 decision).
- [ ] **Dropped** legacy routes listed with rationale (consolidation, deprecated product).
