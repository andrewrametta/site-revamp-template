import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery } from "../lib/siteMedia";

export function AboutPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            <Link className="ui-button ui-button--primary" to="/services">
              Services we offer
            </Link>
            <Link className="ui-button ui-button--ghost" to="/contact">
              Visit or reach out
            </Link>
          </>
        }
        eyebrow="About"
        image={{ alt: "Macro photograph of wildlife on natural substrate", src: stockImagery.tarantula }}
        lede={
          <>
            <p>
              Replace this mast copy with the client&apos;s founding story, certifications, and what makes their team
              different. Keep the layout—swap only the narrative and photography paths in <code>siteMedia</code> or{" "}
              <code>public/brand</code>.
            </p>
            <p>
              The second paragraph is ideal for proof: years in business, notable customers, or process guarantees. The
              revamp skill maps legacy “About” pages into this structure automatically.
            </p>
          </>
        }
        title="Built by practitioners, for clients"
      />

      <Section surface>
        <Container>
          <div className="show-split">
            <div>
              <p className="page-eyebrow">Standards</p>
              <h2 className="page-section-title show-heading">How decisions get made</h2>
              <p className="page-prose">
                Use this column for operating principles: how you scope work, communicate risk, or onboard new clients.
                Pair it with a strong visual to keep the page feeling premium without extra components.
              </p>
              <div className="page-actions">
                <Link className="ui-button ui-button--secondary" to="/services">
                  Services
                </Link>
                <Link className="ui-button ui-button--ghost" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <figure className="show-split__visual">
              <img
                alt="Macro detail of scales in warm light"
                decoding="async"
                height={1200}
                loading="lazy"
                src={stockImagery.snakeScalesMacro}
                width={900}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <blockquote className="show-quote">
            <p className="show-quote__text">
              Lead with a crisp value statement—swap this line with a client-approved quote once legal signs off.
            </p>
            <footer className="show-quote__cite">Placeholder · replace with approved quote</footer>
          </blockquote>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <h2 className="page-section-title show-heading">Visit in person</h2>
          <p className="page-prose">
            <strong>{siteConfig.name}</strong> · {siteConfig.address.lines.join(", ")}
          </p>
          <div className="page-actions">
            <a className="ui-button ui-button--primary" href={siteConfig.address.mapsUrl} rel="noopener noreferrer" target="_blank">
              Open in Maps
            </a>
            <Link className="ui-button ui-button--ghost" to="/contact">
              Call the desk
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
