# Ship checklist — site-revamp-template (spin-off)

## Accessibility

- [ ] Landmark shell: `SiteHeader`, `main#main-content`, `SiteFooter`.
- [ ] One `h1` per routed page; subsequent sections use `h2` / `h3` in order.
- [ ] Primary nav uses `NavLink` with visible active state.
- [ ] External links include `rel="noopener noreferrer"` and `target="_blank"` where appropriate.
- [ ] Global `:focus-visible` styles use theme `--color-focus`.

## Performance

- [ ] Google Fonts use `display=swap` and preconnect hints (adjust when swapping typefaces).
- [ ] Run Lighthouse on the production build after deploy; optimize hero and mast imagery.
- [ ] Consider `React.lazy` for heavy routes if bundle analysis shows regressions.

## SEO

- [ ] Root `index.html` title + meta description match the client.
- [ ] Add per-route titles/descriptions when you introduce a head manager or SSR.
- [ ] Publish `sitemap.xml` + `robots.txt` aligned with the final host.

## Content / legal

- [ ] Replace placeholder copy in pages, `siteConfig`, and `siteMedia`.
- [ ] Confirm phone, email, address, and hours with the client before cutover.
- [ ] Rights for logos, photography, fonts, and testimonials documented in `revamp-input/` or contract.

## Commerce (if applicable)

- [ ] `siteConfig.storeUrl` points at the live cart host; header/footer store links verified.
- [ ] Document subdomain or proxy plan for legacy `/cart`, `/checkout`, or admin paths.

## Smoke tests (manual)

- [ ] `npm run build` passes locally and in CI.
- [ ] Hit every route; confirm SPA fallback on refresh in the target host.
- [ ] Verify `tel:` and `mailto:` links on a handset.
