import { useState } from "react";
import { PRICING, type PricingTier } from "../content";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="nexa-pricing" id="pricing">
      <header className="pricing-head">
        <div>
          <span>03 / Simple pricing</span>
          <h2>
            Start small.
            <br />
            Automate <em>everything.</em>
          </h2>
        </div>
        <div className="billing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={!annual ? "active" : ""}
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={annual ? "active" : ""}
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
          >
            Annual <span>Save 20%</span>
          </button>
        </div>
      </header>

      <div className="pricing-grid">
        {PRICING.map((tier) => (
          <PricingCard key={tier.id} tier={tier} annual={annual} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ tier, annual }: { tier: PricingTier; annual: boolean }) {
  const price = annual ? tier.annual : tier.monthly;

  return (
    <article className={tier.featured ? "pricing-featured" : undefined}>
      {tier.featured && <em>Most popular</em>}
      <span>{tier.name}</span>
      <p>{tier.blurb}</p>
      <h3>
        {price === null ? (
          tier.priceLabel
        ) : (
          <>
            ${price}
            <small>/month</small>
          </>
        )}
      </h3>
      <ul>
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href="#contact">
        {tier.cta} <b aria-hidden="true">↗</b>
      </a>
    </article>
  );
}
