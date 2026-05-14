# Brand assets (`/brand/*`)

Static files served from `public/brand/` appear at URLs like `/brand/logo.svg`.

During a revamp:

1. Add the client logo (SVG or PNG) here.
2. Set `logoUrl` in `src/lib/siteConfig.ts` (for example `"/brand/logo.svg"`).
3. Replace Unsplash URLs in `src/lib/siteMedia.ts` with local paths as photography arrives.

Do not commit proprietary assets without client approval.
