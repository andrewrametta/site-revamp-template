import { LAYOUT_PRESET_IDS, type LayoutPresetId } from "./layoutPresets";

const VALID = new Set<string>(LAYOUT_PRESET_IDS);

/**
 * Sets `document.documentElement.dataset.layout` for structural CSS in `layoutPresets.css`.
 * Preset id comes from `VITE_LAYOUT_PRESET` or defaults to `balanced`.
 */
export function applyLayoutPresetFromEnv(): void {
  const raw = import.meta.env.VITE_LAYOUT_PRESET?.trim() || "balanced";
  const name: LayoutPresetId = VALID.has(raw) ? (raw as LayoutPresetId) : "balanced";
  document.documentElement.dataset.layout = name;
}
