import { BRAND } from "../content";

/** Thin banner that frames the page as a portfolio concept, not a real product. */
export function ConceptBar() {
  return (
    <div className="concept-bar">
      <a href={BRAND.portfolioUrl}>← Portfolio</a>
      <span>{BRAND.name} · Interactive concept</span>
      <span>Fictional brand</span>
    </div>
  );
}
