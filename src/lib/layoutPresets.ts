/**
 * Structural layout presets — control home page **section flow** and **visual weight**
 * (imagery vs copy vs decorative chrome). Pair with `VITE_SITE_THEME` for a unique site.
 *
 * Prompt examples: `Layout preset: image-forward`, `VITE_LAYOUT_PRESET=data-forward`
 * or drop `revamp-input/layout-preset.txt` with a single id line.
 */

export type HomeSectionKey =
  | "hero"
  | "stats"
  | "splitIntro"
  | "bento"
  | "visit"
  | "quote"
  | "proof"
  | "pricing"
  | "newsroom"
  | "docsHub"
  | "changelog"
  | "appShell";

export const LAYOUT_PRESET_MANIFEST = [
  {
    id: "balanced",
    category: "structural",
    summary: "Default flow: hero → story split → bento → visit → quote → proof.",
    promptHints: ["balanced", "default layout", "standard flow"],
  },
  {
    id: "image-forward",
    category: "structural",
    summary: "Photography-led: taller hero, bento grid up front, larger frame crops.",
    promptHints: ["image forward", "photo first", "portfolio", "visual", "gallery"],
  },
  {
    id: "text-forward",
    category: "structural",
    summary: "Copy-led: stronger hero type, wider prose, proof and quote before deep imagery.",
    promptHints: ["text forward", "copy heavy", "editorial text", "reading", "thought leadership"],
  },
  {
    id: "design-forward",
    category: "structural",
    summary: "Chrome-led: bold bento rhythm, reversed split, amplified cards and quote glass.",
    promptHints: ["design forward", "bold ui", "experimental", "high design", "wow ui"],
  },
  {
    id: "story",
    category: "structural",
    summary: "Narrative arc: testimonial band early, then story split and routes.",
    promptHints: ["story", "narrative", "testimonial first", "journal"],
  },
  {
    id: "commerce",
    category: "structural",
    summary: "Conversion-led: route tiles immediately after hero, visit/CTA before long copy.",
    promptHints: ["commerce", "shop forward", "ecommerce layout", "conversion", "funnel"],
  },
  {
    id: "event-forward",
    category: "structural",
    summary: "Conferences & IRL: date/venue band immediately after hero, then routes and narrative.",
    promptHints: ["event forward", "conference", "meetup", "summit", "registration", "venue first"],
  },
  {
    id: "data-forward",
    category: "structural",
    summary: "Metrics-led: KPI strip after hero, then story and imagery—ideal for analytics, infra, finance.",
    promptHints: ["data forward", "metrics", "kpi", "dashboard vibe", "analytics", "numbers first"],
  },
  {
    id: "academy",
    category: "structural",
    summary: "Learning & curriculum: establish the program, then route tiles, social proof, logistics.",
    promptHints: ["academy", "course", "lms", "bootcamp", "training", "education", "certification"],
  },
  {
    id: "community",
    category: "structural",
    summary: "Engagement-led: quote or social proof before discovery tiles and the long-form split.",
    promptHints: ["community", "members", "forum", "club", "social proof first", "belonging"],
  },
  {
    id: "launch",
    category: "structural",
    summary: "Product ship: social proof + KPI strip up top, then narrative, tiles, and closing CTAs.",
    promptHints: ["launch", "saas homepage", "startup", "product launch", "trusted by", "metrics and logos"],
  },
  {
    id: "minimal",
    category: "structural",
    summary: "Short marketing shell: hero → flagship story → visit/CTA only—ideal for MVPs, waitlists, or single-offer landings.",
    promptHints: ["minimal layout", "mvp page", "simple landing", "one pager", "waitlist", "single offer"],
  },
  {
    id: "local",
    category: "structural",
    summary: "Geo & service: explain the offer before the map/hours band, then routes and proof—retail, trades, clinics.",
    promptHints: [
      "local business",
      "service area",
      "hours and directions",
      "brick and mortar",
      "restaurant site",
      "gbp",
      "google business",
    ],
  },
  {
    id: "nonprofit",
    category: "structural",
    summary: "Impact narrative: story quote → KPI impact strip → programs split → routes → logistics → proof.",
    promptHints: ["nonprofit", "ngo", "charity", "donation", "mission driven", "impact report"],
  },
  {
    id: "lead-gen",
    category: "structural",
    summary: "Tight funnel: hero → trust micro-row → value split → visit/CTA—no bento or quote bands by default.",
    promptHints: ["lead gen", "lead magnet", "squeeze page", "request demo", "book a call", "short funnel"],
  },
  {
    id: "trust",
    category: "structural",
    summary: "Enterprise evaluation: logos + testimonial + KPIs before capabilities and route tiles.",
    promptHints: ["trust layout", "enterprise", "b2b evaluation", "vendor", "procurement", "security buyer"],
  },
  {
    id: "pricing",
    category: "structural",
    summary: "SaaS / services: tier comparison after the story split, optional KPI row, then routes and proof.",
    promptHints: ["pricing layout", "plans and pricing", "saas tiers", "subscription tiers", "compare plans"],
  },
  {
    id: "newsroom",
    category: "structural",
    summary: "Publishing-forward: reverse-chron list after hero, then editorial split and routes.",
    promptHints: ["newsroom", "blog home", "press releases", "media hub", "articles first"],
  },
  {
    id: "docs",
    category: "structural",
    summary: "Help-center hub: search + popular topics before deeper marketing bands.",
    promptHints: ["documentation home", "help center", "docs hub", "knowledge base home", "support portal"],
  },
  {
    id: "changelog",
    category: "structural",
    summary: "Product updates: release notes strip near top, optional docs hub link, then standard bands.",
    promptHints: ["changelog", "release notes", "what's new", "product updates", "ship log"],
  },
  {
    id: "app-shell",
    category: "structural",
    summary: "Productized app: chrome / subnav preview after hero before marketing narrative (SPA shell feel).",
    promptHints: ["app shell", "dashboard marketing", "logged in chrome", "product chrome", "subnav"],
  },
] as const;

export type LayoutPresetId = (typeof LAYOUT_PRESET_MANIFEST)[number]["id"];

export const LAYOUT_PRESET_IDS = LAYOUT_PRESET_MANIFEST.map((e) => e.id);

/** Canonical section order per layout id */
export const HOME_SECTION_ORDER: Record<LayoutPresetId, readonly HomeSectionKey[]> = {
  balanced: ["hero", "splitIntro", "bento", "visit", "quote", "proof"],
  "image-forward": ["hero", "bento", "splitIntro", "visit", "quote", "proof"],
  "text-forward": ["hero", "splitIntro", "quote", "proof", "bento", "visit"],
  "design-forward": ["hero", "bento", "splitIntro", "visit", "quote", "proof"],
  story: ["hero", "quote", "splitIntro", "bento", "visit", "proof"],
  commerce: ["hero", "bento", "visit", "splitIntro", "quote", "proof"],
  "event-forward": ["hero", "visit", "bento", "splitIntro", "quote", "proof"],
  "data-forward": ["hero", "stats", "splitIntro", "bento", "quote", "visit", "proof"],
  academy: ["hero", "splitIntro", "bento", "quote", "visit", "proof"],
  community: ["hero", "quote", "bento", "splitIntro", "visit", "proof"],
  launch: ["hero", "proof", "stats", "splitIntro", "bento", "quote", "visit"],
  minimal: ["hero", "splitIntro", "visit"],
  local: ["hero", "splitIntro", "visit", "bento", "quote", "proof"],
  nonprofit: ["hero", "quote", "stats", "splitIntro", "bento", "visit", "proof"],
  "lead-gen": ["hero", "proof", "splitIntro", "visit"],
  trust: ["hero", "proof", "quote", "stats", "splitIntro", "bento", "visit"],
  pricing: ["hero", "splitIntro", "pricing", "stats", "bento", "visit", "quote", "proof"],
  newsroom: ["hero", "newsroom", "splitIntro", "bento", "visit", "quote", "proof"],
  docs: ["hero", "docsHub", "splitIntro", "bento", "visit", "quote", "proof"],
  changelog: ["hero", "changelog", "docsHub", "splitIntro", "bento", "visit", "quote", "proof"],
  "app-shell": ["hero", "appShell", "splitIntro", "bento", "visit", "quote", "proof"],
};

export function getLayoutPresetId(): LayoutPresetId {
  const raw = import.meta.env.VITE_LAYOUT_PRESET?.trim() || "balanced";
  return (LAYOUT_PRESET_IDS as readonly string[]).includes(raw) ? (raw as LayoutPresetId) : "balanced";
}

export function matchLayoutPresetId(input: string): LayoutPresetId | null {
  const t = input.trim().toLowerCase();
  if (!t) {
    return null;
  }
  const direct = LAYOUT_PRESET_MANIFEST.find((e) => e.id === t);
  if (direct) {
    return direct.id;
  }
  for (const e of LAYOUT_PRESET_MANIFEST) {
    if (e.promptHints.some((h) => t.includes(h) || h === t)) {
      return e.id;
    }
  }
  /** Hyphenated ids spoken as two words, e.g. "lead gen" → lead-gen */
  const normalized = t.replace(/\s+/g, "-");
  const fuzzy = LAYOUT_PRESET_MANIFEST.find((e) => e.id === normalized);
  return fuzzy ? fuzzy.id : null;
}
