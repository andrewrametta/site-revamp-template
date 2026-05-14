import { Link } from "react-router-dom";
import { Container, Section } from "../../components/ui";

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/ mo placeholder",
    blurb: "Swap tiers, entitlements, and annual billing toggles from your real catalog.",
    features: ["Up to 3 seats", "Community support", "Core API access"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$89",
    cadence: "/ mo placeholder",
    blurb: "Default hero tier during revamps—highlight the one you actually want to sell.",
    features: ["Unlimited projects", "SSO-ready hooks", "Priority email"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Let’s talk",
    cadence: "",
    blurb: "Enterprise procurement, SLAs, and security reviews land here.",
    features: ["Dedicated CSM", "Custom MSA", "Regional hosting"],
    highlighted: false,
  },
] as const;

const newsItems = [
  { date: "2026-05-01", href: "/contact", title: "Placeholder: announce a milestone or release" },
  { date: "2026-04-18", href: "/contact", title: "Wire a CMS collection or headless feed for this list" },
  { date: "2026-04-02", href: "/contact", title: "Add categories, authors, and reading time when content exists" },
] as const;

const docTopics = [
  { href: "/services", label: "Getting started" },
  { href: "/about", label: "Architecture overview" },
  { href: "/contact", label: "Authentication & SSO" },
  { href: "/shop", label: "Billing & invoices" },
] as const;

const changelogEntries = [
  { version: "2.14.0", date: "2026-05-10", body: "Describe customer-visible changes; link to docs from each bullet." },
  { version: "2.13.2", date: "2026-04-28", body: "Patch releases: security, fixes, and migration notes belong in this band." },
  { version: "2.13.0", date: "2026-04-12", body: "Pair with status subdomain or Betterstack / Statuspage embeds when live." },
] as const;

/** Placeholder pricing / comparison band — replace with real plan matrix during @site-revamp. */
export function HomePricingSection() {
  return (
    <Section className="home-pricing" surface>
      <Container>
        <p className="page-eyebrow">Plans</p>
        <h2 className="page-section-title show-heading">Comparison table shell (tiers are placeholders)</h2>
        <p className="page-prose home-pricing__intro">
          During a revamp, sync this grid with Stripe, Paddle, or internal CPQ. Keep semantic headings per column for
          accessibility.
        </p>
        <div className="home-pricing__grid" role="list">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`home-pricing__tier${tier.highlighted ? " home-pricing__tier--highlight" : ""}`}
              role="listitem"
            >
              <h3 className="home-pricing__tier-name">{tier.name}</h3>
              <p className="home-pricing__tier-price">
                <span className="home-pricing__amount">{tier.price}</span>
                {tier.cadence ? <span className="home-pricing__cadence">{tier.cadence}</span> : null}
              </p>
              <p className="home-pricing__tier-blurb">{tier.blurb}</p>
              <ul className="home-pricing__features">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link className="ui-button ui-button--primary" to="/contact">
                Choose {tier.name}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Reverse-chron list shell for blog / press — wire to CMS routes during revamp. */
export function HomeNewsroomSection() {
  return (
    <Section className="home-newsroom">
      <Container>
        <p className="page-eyebrow">Newsroom</p>
        <h2 className="page-section-title show-heading">Latest from the team</h2>
        <p className="page-prose home-newsroom__intro">
          Map each row to <code>/blog/:slug</code>, external Medium, or a headless collection—this block is structural
          only.
        </p>
        <ul className="home-newsroom__list">
          {newsItems.map((item) => (
            <li key={item.title} className="home-newsroom__item">
              <time className="home-newsroom__date" dateTime={item.date}>
                {item.date}
              </time>
              <Link className="home-newsroom__link" to={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="page-actions">
          <Link className="ui-button ui-button--ghost" to="/contact">
            View all posts
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/** Help-center style hub: search + popular topics (links are placeholders). */
export function HomeDocsHubSection() {
  return (
    <Section className="home-docs-hub" surface>
      <Container>
        <p className="page-eyebrow">Documentation</p>
        <h2 className="page-section-title show-heading">Find answers fast</h2>
        <form className="home-docs-hub__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            aria-label="Search documentation"
            className="home-docs-hub__input"
            placeholder="Search docs (wire Algolia, Orama, or static index)"
            type="search"
          />
          <button className="ui-button ui-button--primary" type="submit">
            Search
          </button>
        </form>
        <h3 className="home-docs-hub__topics-title">Popular topics</h3>
        <ul className="home-docs-hub__topics">
          {docTopics.map((topic) => (
            <li key={topic.href}>
              <Link className="home-docs-hub__topic-link" to={topic.href}>
                {topic.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/** Release notes / product updates strip — pair with real changelog source in production. */
export function HomeChangelogSection() {
  return (
    <Section className="home-changelog">
      <Container>
        <p className="page-eyebrow">Changelog</p>
        <h2 className="page-section-title show-heading">What shipped recently</h2>
        <ol className="home-changelog__list">
          {changelogEntries.map((entry) => (
            <li key={entry.version} className="home-changelog__entry">
              <div className="home-changelog__meta">
                <span className="home-changelog__version">{entry.version}</span>
                <time className="home-changelog__time" dateTime={entry.date}>
                  {entry.date}
                </time>
              </div>
              <p className="home-changelog__body">{entry.body}</p>
            </li>
          ))}
        </ol>
        <div className="page-actions">
          <Link className="ui-button ui-button--secondary" to="/contact">
            Full release history
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/** Suggests authenticated product chrome (subnav) above the marketing fold — tokens only, no real session. */
export function HomeAppShellSection() {
  const nav = [
    { href: "/services", label: "Overview" },
    { href: "/shop", label: "Projects" },
    { href: "/contact", label: "Settings" },
    { href: "/about", label: "Team" },
  ] as const;
  return (
    <div className="home-app-shell">
      <div className="home-app-shell__chrome">
        <Container className="home-app-shell__bar">
          <span className="home-app-shell__product">{/* placeholder app name */}Product surface</span>
          <nav aria-label="App sections (demo)" className="home-app-shell__nav">
            {nav.map((item) => (
              <Link key={item.href} className="home-app-shell__nav-link" to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
      <Section className="home-app-shell__note" surface={false}>
        <Container>
          <p className="page-prose home-app-shell__lede">
            This band previews <strong>sub-navigation density</strong> for logged-in surfaces. Replace links with real
            router outlets or embed your web app shell during <code>@site-revamp</code>.
          </p>
        </Container>
      </Section>
    </div>
  );
}
