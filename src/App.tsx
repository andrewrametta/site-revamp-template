import { Routes, Route } from "react-router-dom";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { HomePage } from "./pages/HomePage";
import "./components/ui/ui.css";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
