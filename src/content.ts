/**
 * Central content for the Nexaflow concept site.
 *
 * Copy and data live here, separated from markup, so the page reads like a
 * small CMS: change a price or a headline in one place and every component
 * stays in sync. All figures are illustrative — see the disclaimer in README.
 */

export const BRAND = {
  name: "Nexaflow",
  shortName: "nexaflow",
  portfolioUrl: "https://premium-web-demos.dg2018egg.chatgpt.site",
  /**
   * Where the contact form posts. Swap this for your own Formspree form ID
   * (https://formspree.io) or any endpoint that accepts a JSON POST.
   * Left as a placeholder so the form degrades gracefully until configured.
   */
  formEndpoint: "https://formspree.io/f/your-form-id",
} as const;

export const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

export const LOGOS = ["atlas", "North/", "MONO", "aperture", "sequence"] as const;

/** Assumptions behind the ROI calculator, made explicit instead of hidden. */
export const ROI_DEFAULTS = {
  people: 8,
  hoursPerWeek: 7,
  hourlyCost: 42,
  weeksPerYear: 52,
  weeksPerMonth: 4,
  /** Share of lost hours a connected automation layer can realistically return. */
  recoveryRate: 0.6,
} as const;

export interface PricingTier {
  id: string;
  name: string;
  blurb: string;
  monthly: number | null;
  annual: number | null;
  priceLabel?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const PRICING: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "For small teams automating their first core workflows.",
    monthly: 49,
    annual: 39,
    features: ["10 active workflows", "5,000 monthly runs", "Standard integrations"],
    cta: "Start free",
  },
  {
    id: "scale",
    name: "Scale",
    blurb: "For operating teams building automation into every process.",
    monthly: 149,
    annual: 119,
    features: [
      "Unlimited workflows",
      "50,000 monthly runs",
      "AI decision steps",
      "Priority support",
    ],
    cta: "Start free",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "For organisations that need governance, scale and control.",
    monthly: null,
    annual: null,
    priceLabel: "Let's talk",
    features: ["Custom run volume", "SSO & advanced roles", "Dedicated success lead"],
    cta: "Contact sales",
  },
];
