# Themes

Each theme is a CSS file that defines a `.theme-<id>` class setting **the same custom properties** as `default.css`.

1. Copy `client-example.css` to `your-client.css`.
2. Change the root selector to `.theme-your-client`.
3. Add `your-client` to `VALID_THEMES` in `src/lib/applyTheme.ts`.
4. Import the file from `src/index.css`.
5. Set `VITE_SITE_THEME=your-client` in `.env` or the host environment.

Keep variable names stable so components stay theme-agnostic.
