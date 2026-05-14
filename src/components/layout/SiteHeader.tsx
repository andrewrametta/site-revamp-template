import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../ui";
import { isAbsoluteUrl, siteConfig } from "../../lib/siteConfig";
import "./layout.css";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/feeder-menu", label: "Feeder menu" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
] as const;

function HeaderCta() {
  const { label, href } = siteConfig.headerCta;
  const className = "ui-button ui-button--primary site-header__cta";
  const external = isAbsoluteUrl(href);
  if (external) {
    return (
      <a className={className} href={href} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    );
  }
  return (
    <Link className={className} to={href}>
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${raised ? " site-header--raised" : ""}`}>
      <Container className="site-header__inner">
        <Link to="/" className="site-header__brand">
          {siteConfig.logoUrl ? (
            <img alt={siteConfig.name} className="site-header__logo" height={48} src={siteConfig.logoUrl} width={180} />
          ) : (
            <span className="site-header__wordmark">{siteConfig.name}</span>
          )}
        </Link>
        <nav aria-label="Primary" className="site-header__nav">
          <NavLink end className={({ isActive }) => `site-header__link${isActive ? " site-header__link--active" : ""}`} to="/">
            Home
          </NavLink>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__link${isActive ? " site-header__link--active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="site-header__ctas">
          {siteConfig.storeUrl ? (
            <a
              className="ui-button ui-button--secondary site-header__cta site-header__cta--store"
              href={siteConfig.storeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Store
            </a>
          ) : null}
          <HeaderCta />
        </div>
      </Container>
    </header>
  );
}
