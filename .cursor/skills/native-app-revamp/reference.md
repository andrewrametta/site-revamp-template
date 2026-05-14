# Native app revamp — reference

## Expo / EAS

- `npx expo-doctor` — baseline health before big changes.
- **EAS Build**: confirm `eas.json` profiles (development, preview, production); CI secrets for tokens, never commit keystores/passwords.
- **Updates**: clarify OTA (EAS Update) vs store-only releases with stakeholders.

## Navigation

- **Expo Router**: file-based routes; document dynamic segments and layouts in `APP_FLOW.md`.
- **React Navigation**: explicit navigators; document param lists in TypeScript.

## Store submission (short list)

- **Privacy policy URL** and data collection disclosure (ATT, analytics, crash reporters).
- **App icons** and **screenshots** per device class; localized listings if multi-locale.
- **Permissions strings** (`Info.plist` / Android rationale) must match actual API usage.

## Accessibility

- `accessibilityLabel` / `accessibilityRole` on tappable surfaces; don’t rely on color alone for state.
- Hit targets ~44pt minimum; respect **reduced motion** on RN (`AccessibilityInfo.isReduceMotionEnabled()` and updates, or Reanimated’s `useReducedMotion`) where animations are decorative—not only CSS `prefers-reduced-motion` (web).

## Performance

- List virtualization for long feeds; image sizing and caching; avoid re-renders from inline objects/functions in hot paths.

## When the client wants “app + website”

1. **Web** workspace → `@site-revamp` → `SITE_MAP.md`, `THEME.md`, `CHECKLIST.md`.
2. **Mobile** workspace → `@native-app-revamp` → `APP_FLOW.md`, `THEME.md`, `CHECKLIST.md`.
3. Keep **brand tokens** aligned across both (copy hex/radius decisions into each repo’s theme layer).
