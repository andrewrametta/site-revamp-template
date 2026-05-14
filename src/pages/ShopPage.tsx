import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { stockImagery } from "../lib/siteMedia";

const categories = [
  {
    title: "Starter kits",
    description: "Replace with SKUs, bundles, or consulting packages that map to your commerce data.",
  },
  {
    title: "Enclosures & hardware",
    description: "Physical goods, warranties, and fulfillment notes belong in this lane.",
  },
  {
    title: "Subscriptions",
    description: "Recurring revenue or replenishment programs—link out when checkout stays external.",
  },
  {
    title: "Education",
    description: "Workshops, downloads, or onboarding flows that do not need a cart.",
  },
  {
    title: "Support",
    description: "SLA tiers, onboarding hours, or concierge contact paths.",
  },
] as const;

export function ShopPage() {
  return (
    <>
      <PageMast
        actions={
          siteConfig.storeUrl ? (
            <a className="ui-button ui-button--primary" href={siteConfig.storeUrl} rel="noopener noreferrer" target="_blank">
              Open live store
            </a>
          ) : (
            <Link className="ui-button ui-button--primary" to="/contact">
              Connect your storefront URL
            </Link>
          )
        }
        eyebrow="Shop"
        image={{ alt: "Gecko perched on wood", contain: true, src: stockImagery.geckoLizard }}
        lede={
          <p>
            Wire <code>siteConfig.storeUrl</code> when the client keeps checkout on Shopify, WooCommerce, or another host.
            This page stays in-app for storytelling; the CTA jumps to the transactional system.
          </p>
        }
        title="Merchandising overview—checkout optional"
      />

      <Section surface>
        <Container>
          <p className="page-eyebrow">Catalog</p>
          <h2 className="page-section-title show-heading">Featured departments</h2>
          <p className="page-prose page-prose--spaced-below">
            Rename these cards to mirror the client taxonomy. Each description should map to a collection URL when the
            data is available.
          </p>
          <div className="card-grid card-grid--4">
            {categories.map((c) => (
              <article key={c.title} className="info-card">
                <h3 className="info-card__title">{c.title}</h3>
                <p className="info-card__body">{c.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <blockquote className="show-quote">
            <p className="show-quote__text">
              Need a compatibility check before you buy? Add concierge messaging here and route to CRM or SMS workflows.
            </p>
            <footer className="show-quote__cite">Concierge placeholder</footer>
          </blockquote>
        </Container>
      </Section>
    </>
  );
}
