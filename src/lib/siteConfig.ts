/**
 * Client-neutral marketing config. Replace during @site-revamp (or hand-edit before first deploy).
 * Optional `logoUrl`: path under `public/` (e.g. `/brand/logo.svg`). `null` = text wordmark in header/footer.
 */
export const siteConfig = {
  name: "Your organization",
  tagline: "Replace this line with your positioning during @site-revamp.",
  logoUrl: null as string | null,

  /** Optional legacy / headless commerce URL for header + footer “Store” link; null hides those links. */
  storeUrl: null as string | null,

  /** Primary header CTA — use `/contact`, `/shop`, or an absolute URL. */
  headerCta: {
    label: "Contact",
    href: "/contact",
  } as const,

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  contact: {
    phoneDisplay: "(555) 010-0100",
    phoneTel: "tel:+15550100100",
    email: "hello@example.com",
    emailMailto: "mailto:hello@example.com",
  },
  address: {
    lines: ["123 Example Street", "Your City, ST 00000"],
    mapsUrl: "https://www.openstreetmap.org/search?query=Your%20City",
  },
} as const;

export function isAbsoluteUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
