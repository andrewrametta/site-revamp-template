import { Link } from "react-router-dom";
import { Container } from "../ui";
import "./layout.css";

const nav = [{ to: "/", label: "Home" }];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link to="/" className="site-header__brand">
          Site
        </Link>
        <nav aria-label="Primary" className="site-header__nav">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="site-header__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
