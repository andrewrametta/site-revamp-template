/**
 * Theme personality presets — each id maps to `src/themes/<id>.css` as `.theme-<id>`
 * and must be listed in `VALID_THEME_IDS` for `VITE_SITE_THEME`.
 *
 * Use in prompts: "Apply theme preset: modern" or "VITE_SITE_THEME=sports".
 */
export const THEME_PRESET_MANIFEST = [
  {
    id: "default",
    category: "system",
    summary: "Minimal light shell for quick smoke tests.",
    promptHints: ["minimal", "bare", "system default"],
  },
  {
    id: "client-example",
    category: "system",
    summary: "Second dark reference theme (cyan on navy) — fork for experiments.",
    promptHints: ["example", "cyan dark"],
  },
  {
    id: "showcase",
    category: "editorial",
    summary: "Dark editorial baseline — forest palette, gold accents, black header chrome.",
    promptHints: ["showcase", "luxury dark", "editorial", "gold accent", "creature-style baseline"],
  },
  {
    id: "modern",
    category: "personality",
    summary: "Cool neutrals, indigo primary, geometric sans — SaaS / tech marketing.",
    promptHints: ["modern", "clean", "tech", "startup", "minimal color", "geometric"],
  },
  {
    id: "classic",
    category: "personality",
    summary: "Warm paper, serif display, burgundy accent — law, finance, heritage brands.",
    promptHints: ["classic", "traditional", "elegant", "serif", "heritage", "formal"],
  },
  {
    id: "sports",
    category: "personality",
    summary: "Arena navy, electric lime CTA, condensed display — teams, gyms, energy brands.",
    promptHints: ["sports", "athletic", "team", "bold", "stadium", "high energy"],
  },
  {
    id: "retro",
    category: "personality",
    summary: "Cream field, coral + teal accents, rounded display — playful throwback.",
    promptHints: ["retro", "70s", "throwback", "playful", "vintage vibe", "warm pastel"],
  },
  {
    id: "shop",
    category: "personality",
    summary: "Bright commerce — white surfaces, emerald CTA, friendly rounded sans.",
    promptHints: ["shop", "ecommerce", "store", "catalog", "retail", "buy now"],
  },
  {
    id: "info",
    category: "personality",
    summary: "Documentation-forward — cool gray, blue links, restrained chrome.",
    promptHints: ["info", "docs", "knowledge base", "support", "readable", "neutral"],
  },
] as const;

export type ThemePresetManifestEntry = (typeof THEME_PRESET_MANIFEST)[number];

export const THEME_PRESET_IDS = THEME_PRESET_MANIFEST.map((e) => e.id);

export type ThemePresetId = (typeof THEME_PRESET_MANIFEST)[number]["id"];

/** Resolve a user phrase to a theme id, or null if unknown. */
export function matchThemePresetId(input: string): ThemePresetId | null {
  const t = input.trim().toLowerCase();
  if (!t) {
    return null;
  }
  const direct = THEME_PRESET_MANIFEST.find((e) => e.id === t);
  if (direct) {
    return direct.id;
  }
  for (const e of THEME_PRESET_MANIFEST) {
    if (e.promptHints.some((h) => t.includes(h) || h === t)) {
      return e.id;
    }
  }
  return null;
}
