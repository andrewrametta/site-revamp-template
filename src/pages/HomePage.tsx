import type { ReactNode } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import {
  HomeAppShellSection,
  HomeChangelogSection,
  HomeDocsHubSection,
  HomeNewsroomSection,
  HomePricingSection,
} from "./home/extendedPlaceholders";
import { getLayoutPresetId, HOME_SECTION_ORDER, type HomeSectionKey, type LayoutPresetId } from "../lib/layoutPresets";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery, supplementalPhotoCredit } from "../lib/siteMedia";

const railItems = ["Strategy", "Experience", "Performance", "Ship-ready", "Your city"] as const;

const categoryTiles = [
  {
    to: "/services",
    title: "What we do",
    body: "Programs, retainers, and workshops—replace with your real service lanes.",
    src: stockImagery.habitatTerrarium,
    variant: "default" as const,
    gridClass: "show-bento__tile--inv",
  },
  {
    to: "/about",
    title: "Who we are",
    body: "Team story, proof points, and the standards clients should expect.",
    src: stockImagery.redEyedTreeFrog,
    variant: "default" as const,
    gridClass: "show-bento__tile--amp",
  },
  {
    to: "/shop",
    title: "Offerings",
    body: "Productized packages or a hand-off to your existing commerce stack.",
    src: stockImagery.snakeScalesMacro,
    variant: "default" as const,
    gridClass: "show-bento__tile--sna",
  },
  {
    to: "/contact",
    title: "Let’s talk",
    body: "Book a walkthrough, request a quote, or plan an on-site visit.",
    src: stockImagery.geckoLizard,
    variant: "contain" as const,
    gridClass: "show-bento__tile--liz",
  },
] as const;

function HomeHero(): ReactNode {
  return (
    <header className="hero-cinema">
      <div className="hero-cinema__bg" aria-hidden>
        <img
          alt="Macro wildlife photograph suitable for a cinematic hero"
          className="hero-cinema__photo"
          decoding="async"
          fetchPriority="high"
          height={1600}
          loading="eager"
          src={stockImagery.heroChameleon}
          width={2400}
        />
        <div className="hero-cinema__scrim" />
        <div className="hero-cinema__vignette" />
      </div>

      <Container className="hero-cinema__content">
        <p className="hero-cinema__kicker">{siteConfig.tagline}</p>
        <h1 className="hero-cinema__title">
          <span className="hero-cinema__title-line">Bold story.</span>{" "}
          <span className="hero-cinema__title-line hero-cinema__title-line--accent">Sharp delivery.</span>
        </h1>
        <p className="hero-cinema__lede">
          This home page demonstrates the default marketing shell: cinematic hero, split bands, bento navigation, and
          glass quote panels—swap every line during <code>@site-revamp</code> while keeping the layout system.
        </p>
        <div className="hero-cinema__actions">
          <Link className="ui-button ui-button--primary" to="/contact">
            Book a walkthrough
          </Link>
          <a className="ui-button ui-button--secondary" href="#visit">
            Plan a visit
          </a>
          <Link className="ui-button ui-button--ghost" to="/about">
            Why us
          </Link>
        </div>
        <p className="hero-cinema__note">
          Hook your CMS, booking tool, or storefront URL in <code>src/lib/siteConfig.ts</code> when the client stack is
          known.
        </p>
        <p className="hero-cinema__credit">
          {supplementalPhotoCredit}{" "}
          <a href="https://unsplash.com/?utm_source=site-revamp-template&utm_medium=referral" rel="noopener noreferrer" target="_blank">
            Unsplash
          </a>
        </p>
      </Container>

      <Container>
        <ul className="show-rail">
          {railItems.map((label) => (
            <li key={label} className="show-rail__item">
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}

function HomeSplitIntro({ layoutId }: { layoutId: LayoutPresetId }): ReactNode {
  const reverse = layoutId === "design-forward";
  return (
    <Section surface>
      <Container>
        <div className={`show-split${reverse ? " show-split--reverse" : ""}`.trim()}>
          <div>
            <p className="page-eyebrow">Systems thinking</p>
            <h2 className="page-section-title show-heading">Design the narrative like a product—not a brochure.</h2>
            <p className="page-prose">
              Messaging, proof, and conversion paths should reinforce each other. Use this band for your flagship
              story, then route visitors to the routes that match their intent.
            </p>
            <div className="page-actions">
              <Link className="ui-button ui-button--primary" to="/shop">
                Explore offers
              </Link>
              <Link className="ui-button ui-button--ghost" to="/services">
                Capabilities
              </Link>
            </div>
          </div>
          <figure className="show-split__visual">
            <span className="show-split__badge">Editorial-ready</span>
            <img
              alt="Lush planted terrarium with glass panels"
              decoding="async"
              height={1200}
              loading="lazy"
              src={stockImagery.habitatTerrarium}
              width={1600}
            />
          </figure>
        </div>
      </Container>
    </Section>
  );
}

function HomeBento(): ReactNode {
  return (
    <Section>
      <Container>
        <p className="page-eyebrow">Collections</p>
        <h2 className="page-section-title show-heading">Route visitors with intention.</h2>
        <p className="page-prose show-bento-intro">
          Each tile can deep-link to a SPA route or an external system. Update labels, imagery, and destinations per
          client during the revamp workflow.
        </p>

        <div className="show-bento">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.title}
              className={`show-tile${tile.variant === "contain" ? " show-tile--contain" : ""} ${tile.gridClass}`}
              to={tile.to}
            >
              <img alt="" className="show-tile__img" decoding="async" loading="lazy" src={tile.src} />
              <div className="show-tile__scrim" aria-hidden />
              <div className="show-tile__body">
                <h3 className="show-tile__label">{tile.title}</h3>
                <p className="show-tile__meta">{tile.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HomeVisit({ layoutId }: { layoutId: LayoutPresetId }): ReactNode {
  const mode = layoutId === "event-forward" ? "event" : layoutId === "local" ? "local" : "default";

  const eyebrow = mode === "event" ? "When & where" : mode === "local" ? "Location & hours" : "Visit";

  const primaryMapLabel = mode === "event" ? "Venue map" : mode === "local" ? "Directions" : "Open in Maps";

  return (
    <div className="show-visit" id="visit">
      <div className="show-visit__bg" aria-hidden>
        <img alt="" decoding="async" loading="lazy" src={stockImagery.visitBackdrop} />
      </div>
      <div className="show-visit__wash" aria-hidden />
      <Section className="show-visit__inner" surface={false}>
        <Container>
          <p className="page-eyebrow">{eyebrow}</p>
          <h2 className="page-section-title">{siteConfig.address.lines.join(" · ")}</h2>
          <p className="page-prose">
            {mode === "event" ? (
              <>
                Swap for schedule blocks, timezone, venue accessibility, and registration CTAs. Map link still pulls from{" "}
                <code>siteConfig.address</code>.
              </>
            ) : mode === "local" ? (
              <>
                Use for service area, parking, accessibility, holiday hours, and click-to-call. Map link pulls from{" "}
                <code>siteConfig.address</code>.
              </>
            ) : (
              <>
                Drop in showroom copy, hours, and parking notes here. The map link pulls from <code>siteConfig.address</code>.
              </>
            )}
          </p>
          <div className="page-actions">
            <a className="ui-button ui-button--primary" href={siteConfig.address.mapsUrl} rel="noopener noreferrer" target="_blank">
              {primaryMapLabel}
            </a>
            {mode === "event" ? (
              <Link className="ui-button ui-button--secondary" to="/contact">
                Tickets / RSVP
              </Link>
            ) : null}
            <Link
              className={`ui-button${mode === "event" ? " ui-button--ghost" : " ui-button--secondary"}`}
              to="/contact"
            >
              {mode === "local" ? "Book or call" : "Contact"}
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

const statsPlaceholders = [
  { hint: "Wire real telemetry or finance figures during @site-revamp.", label: "Uptime / SLA", value: "99.98%" },
  { hint: "Replace with customers, seats, or ARR depending on the brief.", label: "Active accounts", value: "12.4k" },
  { hint: "Latency, satisfaction (NPS), or conversion lift.", label: "Median response", value: "142ms" },
  { hint: "Use for YoY growth, funding, or impact totals.", label: "YoY growth", value: "+38%" },
] as const;

function HomeStatsBand(): ReactNode {
  return (
    <Section className="stats-strip" surface>
      <Container>
        <p className="page-eyebrow">Proof by numbers</p>
        <h2 className="page-section-title show-heading">Lead with metrics your buyers already care about.</h2>
        <p className="page-prose stats-strip__intro">
          This band exists for <strong>data-forward</strong> and <strong>launch</strong> layouts—swap labels and values
          from CMS, warehouse, or BI exports.
        </p>
        <ul className="stats-strip__grid">
          {statsPlaceholders.map((s) => (
            <li key={s.label} className="stats-strip__card">
              <p className="stats-strip__value">{s.value}</p>
              <p className="stats-strip__label">{s.label}</p>
              <p className="stats-strip__hint">{s.hint}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function HomeQuote(): ReactNode {
  return (
    <Section surface>
      <Container>
        <div className="show-split">
          <blockquote className="show-quote">
            <p className="show-quote__text">
              “Replace this pull-quote with a vetted testimonial once legal approves the language—keep the glass card
              treatment for instant polish.”
            </p>
            <footer className="show-quote__cite">Voiceover placeholder</footer>
          </blockquote>
          <figure className="show-split__visual show-split__visual--portrait">
            <img
              alt="Gecko perched on wood"
              decoding="async"
              height={1600}
              loading="lazy"
              src={stockImagery.geckoLizard}
              width={1200}
            />
          </figure>
        </div>
      </Container>
    </Section>
  );
}

function HomeProof(): ReactNode {
  return (
    <Section className="home-proof">
      <Container>
        <div className="home-proof__logos" aria-label="Placeholder partner logos">
          {["Northwind", "Contoso", "Fabrikam", "Litware"].map((name) => (
            <span key={name} className="home-proof__logo-chip">
              {name}
            </span>
          ))}
        </div>
        <h2 className="page-section-title show-heading">Social proof layer</h2>
        <p className="page-prose">
          Embed reviews, logos, or press mentions when you have rights. Until then, this section explains where those
          modules will live without blocking launch.
        </p>
      </Container>
    </Section>
  );
}

function renderHomeSection(key: HomeSectionKey, layoutId: LayoutPresetId): ReactNode {
  switch (key) {
    case "hero":
      return <HomeHero />;
    case "splitIntro":
      return <HomeSplitIntro layoutId={layoutId} />;
    case "bento":
      return <HomeBento />;
    case "visit":
      return <HomeVisit layoutId={layoutId} />;
    case "stats":
      return <HomeStatsBand />;
    case "quote":
      return <HomeQuote />;
    case "proof":
      return <HomeProof />;
    case "pricing":
      return <HomePricingSection />;
    case "newsroom":
      return <HomeNewsroomSection />;
    case "docsHub":
      return <HomeDocsHubSection />;
    case "changelog":
      return <HomeChangelogSection />;
    case "appShell":
      return <HomeAppShellSection />;
    default: {
      const _exhaustive: never = key;
      return _exhaustive;
    }
  }
}

export function HomePage() {
  const layoutId = getLayoutPresetId();
  const order = HOME_SECTION_ORDER[layoutId];

  return (
    <>
      {order.map((key) => (
        <Fragment key={key}>{renderHomeSection(key, layoutId)}</Fragment>
      ))}
    </>
  );
}
