import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery } from "../lib/siteMedia";

export function ContactPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            <a className="ui-button ui-button--primary" href={siteConfig.contact.phoneTel}>
              Call {siteConfig.contact.phoneDisplay}
            </a>
            <a className="ui-button ui-button--secondary" href={siteConfig.contact.emailMailto}>
              Email us
            </a>
          </>
        }
        eyebrow="Contact"
        image={{ alt: "Abstract macro texture in deep jewel tones", src: stockImagery.visitBackdrop }}
        lede={
          <p>
            Drop hours, service regions, or escalation paths here. During <code>@site-revamp</code>, mirror the legacy
            contact page while keeping this mast + split layout.
          </p>
        }
        title="Call, email, or walk in"
      />

      <Section surface>
        <Container>
          <div className="show-split">
            <div>
              <p className="page-eyebrow">Direct</p>
              <h2 className="page-section-title show-heading">Lines we monitor daily</h2>
              <ul className="page-plain-list">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={siteConfig.contact.phoneTel}>{siteConfig.contact.phoneDisplay}</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={siteConfig.contact.emailMailto}>{siteConfig.contact.email}</a>
                </li>
              </ul>
            </div>
            <figure className="show-split__visual show-split__visual--portrait">
              <img
                alt="Lush planted terrarium interior"
                decoding="async"
                height={1400}
                loading="lazy"
                src={stockImagery.habitatTerrarium}
                width={1100}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="page-section-title show-heading">Visit</h2>
          <p className="page-prose">
            <strong>{siteConfig.address.lines.join(", ")}</strong>
          </p>
          <div className="page-actions">
            <a className="ui-button ui-button--primary" href={siteConfig.address.mapsUrl} rel="noopener noreferrer" target="_blank">
              Directions
            </a>
            {siteConfig.storeUrl ? (
              <a
                className="ui-button ui-button--ghost"
                href={siteConfig.storeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open online storefront
              </a>
            ) : null}
            <Link className="ui-button ui-button--secondary" to="/">
              Back to home
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
