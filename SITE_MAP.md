# Site map — template (example IA)

This repository ships a **neutral marketing shell** with routes you can rename or drop per client. After `@site-revamp`, replace the table below with **legacy URL → new route** rows for the specific site.

| Legacy / source URL | New route | Notes |
|---------------------|-----------|-------|
| _(brief TBD)_ | `/` | Home — hero + showcase bands (`HomePage`). |
| _(brief TBD)_ | `/about` | Story / team — `PageMast` + split + quote pattern. |
| _(brief TBD)_ | `/services` | Offerings grid — adjust copy and cards. |
| _(brief TBD)_ | `/feeder-menu` | Example long-form list page — rename route if irrelevant. |
| _(brief TBD)_ | `/shop` | Department / merchandising overview; wire `siteConfig.storeUrl` for external checkout. |
| _(brief TBD)_ | `/contact` | Contact + map link from `siteConfig`. |

## Redirect guidance

When the SPA is served at the apex domain:

- Configure the host to **SPA-fallback** all app paths to `index.html`.
- Document any paths that must continue to hit a **legacy CMS**, **store**, or **API** so edge rules can proxy or subdomain them.

Update this file whenever routes or commerce integration change.
