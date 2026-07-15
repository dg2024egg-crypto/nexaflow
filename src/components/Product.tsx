import { LOGOS } from "../content";

export function LogoCloud() {
  return (
    <section className="logo-cloud" aria-label="Customers">
      <span>Powering operators at</span>
      <div>
        {LOGOS.map((logo) => (
          <b key={logo}>{logo}</b>
        ))}
      </div>
    </section>
  );
}

/** Chart bar heights for the observability card (decorative). */
const CHART_BARS = [38, 56, 45, 70, 60, 88, 74, 96, 84, 112, 98, 124];

export function Product() {
  return (
    <section className="nexa-product" id="product">
      <header className="nexa-section-head">
        <span>01 / One intelligent layer</span>
        <h2>
          Your tools finally
          <br />
          work like a <em>team.</em>
        </h2>
        <p>
          Connect the systems you already use. Nexaflow understands context,
          makes decisions and keeps every handoff moving.
        </p>
      </header>

      <div className="bento-grid">
        <article className="bento-connect">
          <div className="bento-copy">
            <span>Connect anything</span>
            <h3>
              One click.
              <br />
              Every tool.
            </h3>
            <p>
              Bring customer, revenue and operations data into a single workflow
              canvas.
            </p>
          </div>
          <div className="app-orbit" aria-hidden="true">
            <i>H</i>
            <i>S</i>
            <i>N</i>
            <i>in</i>
            <b>p/</b>
          </div>
        </article>

        <article className="bento-ai">
          <div className="bento-copy">
            <span>Built-in intelligence</span>
            <h3>
              AI that knows
              <br />
              your business.
            </h3>
          </div>
          <div className="ai-message">
            <span>✦ Nexa AI</span>
            <p>
              I found 14 at-risk renewals. I&apos;ve drafted personalised
              follow-ups and assigned the high-value accounts.
            </p>
            <div aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
        </article>

        <article className="bento-observe">
          <div className="bento-copy">
            <span>Real-time observability</span>
            <h3>
              See the work
              <br />
              working.
            </h3>
          </div>
          <div className="nexa-chart">
            <span>Automations run</span>
            <strong>
              12,482 <em>+28%</em>
            </strong>
            <div aria-hidden="true">
              {CHART_BARS.map((height, i) => (
                <i style={{ height }} key={i} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
