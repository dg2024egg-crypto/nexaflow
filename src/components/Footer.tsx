import { BRAND, NAV_LINKS } from "../content";

export function Cta() {
  return (
    <section className="nexa-cta">
      <div className="nexa-glow" aria-hidden="true" />
      <span>Ready to lose the busywork?</span>
      <h2>
        Make work
        <br />
        flow itself.
      </h2>
      <a href="#contact">
        Build your first workflow <b aria-hidden="true">↗</b>
      </a>
      <p>Concept demo · Fictional brand and metrics</p>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="nexa-footer">
      <div className="nexa-footer-brand">
        <a className="nexa-logo" href="#nexa-top">
          <span aria-hidden="true">n/</span> {BRAND.shortName}
        </a>
        <p>A fictional concept brand, built as a front-end portfolio piece.</p>
      </div>
      <nav className="nexa-footer-links" aria-label="Footer">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <small>© {year} {BRAND.name}. Illustrative data — not real client results.</small>
    </footer>
  );
}
