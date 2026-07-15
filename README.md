# Nexaflow — SaaS Website Concept

A product-led marketing site for a **fictional** AI-automation SaaS, built as a
front-end portfolio piece. It demonstrates clean React + TypeScript
architecture, responsive CSS, accessibility, and real, working interactivity.

[View the full interactive portfolio →](https://premium-web-demos.dg2018egg.chatgpt.site)

## Highlights

- **Transparent ROI calculator** — three sliders (team size, hours lost, hourly
  cost) with the recovery-rate assumption stated in the open, so the estimate
  reads as a model, not a black box. Results announce to screen readers.
- **Working contact form** — client-side validation, accessible error messaging,
  loading / success / error states, and a real `fetch` submission. Posts to a
  configurable endpoint (Formspree by default); runs in a graceful "demo mode"
  until one is set.
- **Monthly / annual pricing toggle** driven from a single typed data source.
- **Animated workflow mockup** in the hero, marked up so assistive tech skips
  the decorative detail.
- **Responsive** from wide desktop down to a mobile nav with an accessible
  hamburger menu (toggles `aria-expanded`, closes on `Escape`).

## Architecture

Content is separated from markup, and the page is composed of small,
single-responsibility components:

```
src/
├── content.ts              # Typed copy, nav, pricing, ROI assumptions
├── App.tsx                 # Page composition + skip link
├── main.tsx                # React entry point
├── styles.css              # Design system + responsive rules
├── lib/
│   └── hooks.ts            # useEscapeKey, usePrefersReducedMotion
└── components/
    ├── ConceptBar.tsx
    ├── Nav.tsx             # Accessible mobile menu
    ├── Hero.tsx
    ├── Product.tsx        # Logo cloud + feature bento grid
    ├── RoiCalculator.tsx  # Transparent, live-region results
    ├── Pricing.tsx        # Data-driven tiers + billing toggle
    ├── ContactForm.tsx    # Validation + submit states
    └── Footer.tsx         # Closing CTA + footer
```

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks (`main`, `nav`, `footer`), and
  visible keyboard focus styles.
- Form fields use real `<label>`s, `aria-invalid`, and `aria-describedby` for
  errors; status changes use `aria-live` regions.
- `prefers-reduced-motion` is respected in both CSS and JS.
- Zero runtime UI dependencies — just React. No icon or component libraries.
- Ships ~5 kB gzipped CSS after trimming unused styles.

## Configure the contact form

The form works out of the box in demo mode. To receive real submissions, create
a form at [formspree.io](https://formspree.io) and set your ID in `src/content.ts`:

```ts
export const BRAND = {
  // ...
  formEndpoint: "https://formspree.io/f/your-actual-id",
};
```

Any endpoint that accepts a JSON `POST` works.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check (tsc) + production build
npm run preview  # preview the production build
```

## Tech

React 19 · TypeScript · Vite · custom responsive CSS · GitHub Actions deployment.

## Disclaimer

Nexaflow is a fictional concept brand. Names, metrics, testimonials and
business information are illustrative and must not be presented as real client
results. Before using this template for a client, replace all placeholder links,
email addresses, brand copy and illustrative data.

## License

Portfolio and educational use. Do not resell the project unchanged as an
exclusive custom design.
