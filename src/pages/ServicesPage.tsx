import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery } from "../lib/siteMedia";

export function ServicesPage() {
  return (
    <>
      <PageMast
        actions={
          <Link className="ui-button ui-button--primary" to="/contact">
            Book a consult
          </Link>
        }
        eyebrow="Services"
        image={{ alt: "Lush planted glass terrarium with tropical vines", src: stockImagery.habitatTerrarium }}
        lede={
          <p>
            Use this page as a two-column services narrative: lead with outcomes, then support with process bullets.
            Replace titles and body during <code>@site-revamp</code> while keeping the <code>show-split</code> rhythm.
          </p>
        }
        title="Programs your clients can understand in one scroll"
      />

      <Section surface>
        <Container>
          <div className="show-split">
            <div>
              <p className="page-eyebrow">Core delivery</p>
              <h2 className="page-section-title show-heading">Implementation &amp; support</h2>
              <p className="page-prose">
                Describe retainers, sprints, or managed offerings here. Call out SLAs, environments you cover, and how
                handoffs work when the client team grows.
              </p>
              <p className="page-prose">
                Second paragraph: ideal for capacity notes, regions served, or compliance framing—whatever differentiates
                you from a generic brochure.
              </p>
              <ul className="page-list">
                <li>Discovery through launch with a single accountable lead</li>
                <li>Documentation and training packaged with delivery</li>
                <li>Post-go-live office hours or tiered support (edit to match reality)</li>
              </ul>
            </div>
            <figure className="show-split__visual">
              <img
                alt="Macro detail of snake scales in warm light"
                decoding="async"
                height={900}
                loading="lazy"
                src={stockImagery.snakeScalesMacro}
                width={1200}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="show-split show-split--reverse">
            <div>
              <p className="page-eyebrow">Experiences</p>
              <h2 className="page-section-title show-heading">Workshops &amp; onsite engagements</h2>
              <p className="page-prose">
                Swap this block for trainings, audits, executive briefings, or experiential marketing—anything that
                benefits from a photo-forward split layout.
              </p>
              <ul className="page-list">
                <li>Agenda templates you can reuse across industries</li>
                <li>Clear safety, access, and insurance callouts when relevant</li>
                <li>CTA pair: availability check + trust-building link</li>
              </ul>
              <div className="page-actions">
                <Link className="ui-button ui-button--primary" to="/contact">
                  Check availability
                </Link>
                <Link className="ui-button ui-button--ghost" to="/about">
                  {`Why ${siteConfig.name}`}
                </Link>
              </div>
            </div>
            <figure className="show-split__visual">
              <img
                alt="Tarantula on mossy forest floor"
                decoding="async"
                height={900}
                loading="lazy"
                src={stockImagery.tarantula}
                width={1200}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <h2 className="page-section-title show-heading">Location</h2>
          <p className="page-prose">{siteConfig.address.lines.join(", ")}</p>
          <div className="page-actions">
            <a className="ui-button ui-button--secondary" href={siteConfig.address.mapsUrl} rel="noopener noreferrer" target="_blank">
              Directions
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
