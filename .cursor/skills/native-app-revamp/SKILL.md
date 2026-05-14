---
name: native-app-revamp
description: Revamps or builds a true native mobile app (store binaries) using Expo + React Native + TypeScript—navigation, screens, theming, platform concerns, EAS/build, and ship checklists. Use when the user wants an iOS/Android app, Expo/React Native project, App Store or Play Store deliverable, or says mobile app (not responsive web). Requires the active workspace to be the mobile app repository, not the marketing web template alone.
disable-model-invocation: false
---

# Native app revamp (Expo + React Native)

## Preconditions

- **Workspace**: The Cursor root must be the **mobile app repository** (Expo app or React Native monorepo app package). This template repo (`site-revamp-template`) is for **marketing web**; do not pretend a Vite site is a store app.
- **Skill location**: If the mobile repo was not forked from this template, **copy** `.cursor/skills/native-app-revamp/` (this folder) into that repo’s `.cursor/skills/` so **`@native-app-revamp`** resolves, or merge the skill into the team’s shared rules bundle.
- **Companion site**: If the client also needs a marketing site, use **`@site-revamp`** in the **web** workspace after or in parallel (separate chat is fine).

## Default stack

- **Expo** + **React Native** + **TypeScript** (managed workflow unless the repo already locks a bare workflow).
- **Other native stacks** (Flutter, Kotlin Multiplatform, SwiftUI): keep the same **artifacts and ingest discipline**; follow the repo’s idioms for navigation, theming, and store tooling instead of forcing Expo patterns.
- Match the repo’s existing tooling (package manager, router: Expo Router vs React Navigation, styling: StyleSheet vs NativeWind) before introducing new layers.

## What this skill produces

At the **mobile repo root** (unless the team standard says otherwise):

| Artifact | Purpose |
|----------|---------|
| `APP_FLOW.md` | Navigation graph, tabs/stacks, modals, deep links |
| `THEME.md` | Colors, type scale, spacing tokens, dark mode |
| `CHECKLIST.md` | Ship gate: a11y, perf, permissions, store compliance, release |

Optional: `STORE.md` (listing copy, screenshots plan, privacy URL) if scope includes store submission.

**Paste starter:** copy `APP_FLOW.example.md` from this folder to the mobile repo root as `APP_FLOW.md`, then fill it in (or let the agent expand it during the revamp).

## Workflow

1. **Ingest**: URLs to existing apps (store links), design files, API docs, `revamp-input/` drops (same pattern as web—no secrets in git). Confirm **iOS / Android / both**, min OS, offline needs, auth, push, IAP.
2. **Map flows**: User journeys → screens; list dead ends and back behavior; note platform differences (permissions, share sheet, background modes).
3. **Implement**: Screens and navigation first; then data layer; then polish (animations, empty states, errors). Prefer **semantic structure** and **screen reader** labels on interactive controls.
4. **Theme**: Align with brand tokens; document in `THEME.md`; avoid hard-coded hex scattered without tokens.
5. **Build & release**: `eas.json` / credentials, versioning, OTA vs store updates—document decisions in `CHECKLIST.md`.

## Non-goals

- Replacing a **responsive web** brief—use **`@site-revamp`** for the Vite marketing site.
- Guaranteeing App Store approval—follow Apple/Google guidelines and document open risks.

## Quality bar

- TypeScript **strict** where the repo allows it.
- **Keyboard / Switch / VoiceOver / TalkBack** paths for primary flows.
- **Safe areas**, notches, and dynamic type where applicable.

## Reference

See `reference.md` in this folder for Expo/EAS, store assets, and common permission pitfalls. Use **`APP_FLOW.example.md`** as the starter body for root-level `APP_FLOW.md`.
