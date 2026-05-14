import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery } from "../lib/siteMedia";

export function FeederMenuPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            {siteConfig.storeUrl ? (
              <a
                className="ui-button ui-button--primary"
                href={siteConfig.storeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Shop this category online
              </a>
            ) : (
              <Link className="ui-button ui-button--primary" to="/contact">
                Connect your storefront URL
              </Link>
            )}
            <Link className="ui-button ui-button--ghost" to="/contact">
              Ask a specialist
            </Link>
          </>
        }
        eyebrow="Nutrition"
        image={{ alt: "Tarantula on mossy substrate", src: stockImagery.tarantula }}
        lede={
          <p>
            Gut-loaded insects and responsibly sourced rodents are the backbone of most carnivorous setups. We rotate
            inventory quickly so you are taking home lively feeders—not stale bins.
          </p>
        }
        title="Feeder menu built for picky eaters"
      />

      <Section surface>
        <Container>
          <p className="page-eyebrow">Insects</p>
          <h2 className="page-section-title show-heading">Live feeder insects</h2>
          <p className="page-prose page-prose--spaced-below">
            From pinheads to adults—tell us what you are feeding and we will size the order so nothing arrives DOA.
          </p>
          <div className="card-grid card-grid--2">
            <article className="info-card">
              <h3 className="info-card__title">Crickets &amp; banded crickets</h3>
              <p className="info-card__body">Sized for hatchlings through adults; ask about bulk pricing for multi-tank rooms.</p>
            </article>
            <article className="info-card">
              <h3 className="info-card__title">Roaches</h3>
              <p className="info-card__body">Dubia and other species staples for geckos, monitors, and arachnids.</p>
            </article>
            <article className="info-card">
              <h3 className="info-card__title">Worms</h3>
              <p className="info-card__body">Mealworms, superworms, and specialty larvae depending on the week.</p>
            </article>
            <article className="info-card">
              <h3 className="info-card__title">Flies &amp; specialty items</h3>
              <p className="info-card__body">Seasonal additions for picky eaters—call ahead for culturing tips.</p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="show-split show-split--reverse">
            <div>
              <p className="page-eyebrow">Rodents</p>
              <h2 className="page-section-title show-heading">Frozen-thawed first</h2>
              <p className="page-prose">
                Frozen-thawed is our default recommendation for safety and welfare, but we also stock live feeders when
                local regulations and store policy allow. Staff will walk you through sizing and switching stubborn
                feeders.
              </p>
              <ul className="page-list">
                <li>Live and frozen mice in common weights</li>
                <li>Live and frozen rats for growing colubrids and constrictors</li>
              </ul>
            </div>
            <figure className="show-split__visual">
              <img
                alt="Macro insect wing texture in jewel tones"
                decoding="async"
                height={1200}
                loading="lazy"
                src={stockImagery.visitBackdrop}
                width={1600}
              />
            </figure>
          </div>
        </Container>
      </Section>
    </>
  );
}
