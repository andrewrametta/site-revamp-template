import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { applyLayoutPresetFromEnv } from "./lib/applyLayout";
import { applyThemeFromEnv } from "./lib/applyTheme";
import App from "./App";
import "./index.css";

applyThemeFromEnv();
applyLayoutPresetFromEnv();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
