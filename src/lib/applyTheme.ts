const VALID_THEMES = new Set(["default", "client-example"]);

/**
 * Sets `document.documentElement` class `theme-<name>` for CSS variable scopes.
 * Theme name comes from `VITE_SITE_THEME` or defaults to `default`.
 */
export function applyThemeFromEnv(): void {
  const raw = import.meta.env.VITE_SITE_THEME?.trim() || "default";
  const name = VALID_THEMES.has(raw) ? raw : "default";

  document.documentElement.classList.remove(
    ...Array.from(document.documentElement.classList).filter((c) =>
      c.startsWith("theme-"),
    ),
  );
  document.documentElement.classList.add(`theme-${name}`);
  document.documentElement.dataset.siteTheme = name;
}
