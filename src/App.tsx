import { ConceptBar } from "./components/ConceptBar";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { LogoCloud, Product } from "./components/Product";
import { RoiCalculator } from "./components/RoiCalculator";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { Cta, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="nexa-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ConceptBar />
      <Nav />
      <main id="main" className="nexa-main">
        <Hero />
        <LogoCloud />
        <Product />
        <RoiCalculator />
        <Pricing />
        <ContactForm />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
