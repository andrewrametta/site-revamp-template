import { Container } from "../ui";
import "./layout.css";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p className="site-footer__copy">© {year} All rights reserved.</p>
      </Container>
    </footer>
  );
}
