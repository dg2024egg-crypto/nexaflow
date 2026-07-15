/** Hero: the thesis of the page — a headline paired with a live workflow mockup. */
export function Hero() {
  return (
    <section className="nexa-hero" id="nexa-top">
      <div className="nexa-glow" aria-hidden="true" />

      <div className="nexa-hero-copy">
        <span className="nexa-kicker">
          <i aria-hidden="true" /> The AI operations layer for growing teams
        </span>
        <h1>
          Put busywork
          <br />
          on <em>autopilot.</em>
        </h1>
        <p>
          Build reliable AI workflows across your tools in minutes. No brittle
          scripts. No waiting on engineering.
        </p>
        <div className="nexa-actions">
          <a href="#pricing">
            Start free <span aria-hidden="true">↗</span>
          </a>
          <a href="#product">
            <i aria-hidden="true">▶</i> See it in action
          </a>
        </div>
        <small>No credit card · Set up in under 10 minutes</small>
      </div>

      <WorkflowMockup />
    </section>
  );
}

/** Decorative product mockup. Hidden from assistive tech as it carries no real data. */
function WorkflowMockup() {
  return (
    <div className="workflow-window" role="img" aria-label="Example AI workflow builder">
      <div className="workflow-top" aria-hidden="true">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>Customer escalation workflow</span>
        <em>•••</em>
      </div>
      <div className="workflow-canvas" aria-hidden="true">
        <div className="flow-card flow-trigger">
          <span>TRIGGER</span>
          <i>in</i>
          <div>
            <b>New priority ticket</b>
            <small>Intercom</small>
          </div>
          <em>✓</em>
        </div>
        <div className="flow-line">
          <i />
        </div>
        <div className="flow-card flow-ai">
          <span>AI STEP</span>
          <i>✦</i>
          <div>
            <b>Summarise &amp; route</b>
            <small>Nexaflow intelligence</small>
          </div>
          <em>✓</em>
        </div>
        <div className="flow-split">
          <i />
          <b />
        </div>
        <div className="flow-row">
          <div className="flow-card small">
            <i>#</i>
            <div>
              <b>Notify team</b>
              <small>Slack</small>
            </div>
          </div>
          <div className="flow-card small">
            <i>✓</i>
            <div>
              <b>Update account</b>
              <small>HubSpot</small>
            </div>
          </div>
        </div>
      </div>
      <div className="workflow-status" aria-hidden="true">
        <span>
          <i /> Workflow active
        </span>
        <b>1,284 runs this month</b>
      </div>
    </div>
  );
}
