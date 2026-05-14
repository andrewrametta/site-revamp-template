import { Link } from "react-router-dom";
import { Container } from "../ui";
import { siteConfig } from "../../lib/siteConfig";
import "./layout.css";

const footerNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/feeder-menu", label: "Feeder menu" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
] as const;

const hasSocial = Boolean(siteConfig.social.facebook || siteConfig.social.instagram);

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            {siteConfig.logoUrl ? (
              <img alt="" aria-hidden className="site-footer__logo" height={56} src={siteConfig.logoUrl} width={200} />
            ) : (
              <p className="site-footer__wordmark">{siteConfig.name}</p>
            )}
            <p className="site-footer__muted">{siteConfig.tagline}</p>
            <p className="site-footer__muted">{siteConfig.address.lines.join(" · ")}</p>
          </div>
          <nav aria-label="Footer" className="site-footer__nav">
            {footerNav.map((item) => (
              <Link key={item.to} to={item.to} className="site-footer__link">
                {item.label}
              </Link>
            ))}
          </nav>
          {hasSocial || siteConfig.storeUrl ? (
            <div className="site-footer__social">
              {siteConfig.social.facebook ? (
                <a href={siteConfig.social.facebook} rel="noopener noreferrer" target="_blank">
                  Facebook
                </a>
              ) : null}
              {siteConfig.social.instagram ? (
                <a href={siteConfig.social.instagram} rel="noopener noreferrer" target="_blank">
                  Instagram
                </a>
              ) : null}
              {siteConfig.storeUrl ? (
                <a href={siteConfig.storeUrl} rel="noopener noreferrer" target="_blank">
                  External store
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <p className="site-footer__copy">
          © {year} {siteConfig.name}. Marketing template — replace copy, routes, and assets per client.
        </p>
      </Container>
    </footer>
  );
}
