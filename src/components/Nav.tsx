import { useState } from "react";
import { BRAND, NAV_LINKS } from "../content";
import { useEscapeKey } from "../lib/hooks";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  useEscapeKey(menuOpen, close);

  return (
    <nav className="demo-nav nexa-nav" aria-label="Primary">
      <a className="nexa-logo" href="#nexa-top">
        <span aria-hidden="true">n/</span> {BRAND.shortName}
      </a>

      <div id="primary-menu" className={`demo-links ${menuOpen ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </div>

      <a className="nexa-nav-cta" href="#pricing">
        Start building <span aria-hidden="true">↗</span>
      </a>

      <button
        type="button"
        className={`menu-button ${menuOpen ? "is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="primary-menu"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </nav>
  );
}
