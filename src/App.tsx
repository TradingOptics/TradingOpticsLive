import React from "react";
import "./styles.css";

const CALENDLY = "https://calendly.com/tradingoptics";

export default function App() {
  return (
    <div className="to-page">
      {/* ==== NAV ==== */}
      <header className="to-nav">
        <div className="to-container to-nav-row">
          <div className="to-logo">TradingOptics</div>

          <nav className="to-nav-links">
            <a href="#offerings">Offerings</a>
            <a href="#syllabus">Syllabus</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="to-btn to-btn--primary"
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
          >
            Book a Session
          </a>
        </div>
      </header>

      {/* ==== HERO + CHART ==== */}
      <section className="to-hero">
        <div className="to-container to-hero-grid">
          <div className="to-hero-copy">
            <div className="to-pill">Learn charts the simple, smart way</div>
            <h1 className="to-hero-title">
              Master TradingView &amp; Technical Analysis
            </h1>
            <p className="to-hero-sub">
              1-on-1 coaching for beginners, a guided bootcamp, and VIP
              community access. Practical lessons, live chart walk-throughs, and
              a repeatable plan so you stop guessing and start executing.
            </p>

            <div className="to-cta-row">
              <a
                className="to-btn to-btn--primary to-btn--lg"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Book a Session
              </a>
            </div>
          </div>

          <div className="to-card to-chart-card">
            <div className="to-card-head">
              <span className="to-card-title">Live Chart • BTC/USD (1m)</span>
              <span className="to-badge">REAL-TIME</span>
            </div>

            <div className="to-tv-wrap">
              <iframe
                title="TradingView"
                className="to-tv-iframe"
                src={
                  "https://s.tradingview.com/widgetembed/?" +
                  [
                    "symbol=BINANCE:BTCUSDT",
                    "interval=1",
                    "theme=dark",
                    "style=1",
                    "timezone=Etc/UTC",
                    "hide_top_toolbar=0",
                    "hide_legend=0",
                    "saveimage=0",
                    "calendar=0",
                    "hide_volume=0",
                    "studies=[]",
                    "utm_source=tradingoptics.org",
                    "utm_medium=embed",
                    "utm_campaign=chart",
                  ].join("&")
                }
                frameBorder="0"
                allow="fullscreen"
              />
            </div>

            <p className="to-card-footnote">
              We’ll practice directly on TradingView: drawing tools, indicators,
              entries/exits, and risk management.
            </p>
          </div>
        </div>
      </section>

      <main className="to-container to-main">
        {/* ==== OFFERINGS (EXPANDED) ==== */}
        <section id="offerings" className="to-section">
          <h2 className="to-h2">Offerings</h2>

          <div className="to-grid to-grid--3">
            <article className="to-tile">
              <div className="to-tile__head">
                <span className="to-tag">Beginner Friendly</span>
                <h3 className="to-tile__title">1-on-1 Coaching</h3>
              </div>
              <p className="to-tile__text">
                Tailored sessions focused on your goals: setup, workflow, and
                clear trade plans you can execute with confidence.
              </p>
              <ul className="to-bullets">
                <li>Personalized TradingView &amp; indicator setup</li>
                <li>Clean charting workflow + risk framework</li>
                <li>Live walk-throughs with your tickers</li>
              </ul>
              <a
                className="to-btn to-btn--ghost"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Book 1-on-1
              </a>
            </article>

            <article className="to-tile">
              <div className="to-tile__head">
                <span className="to-tag to-tag--gold">Most Popular</span>
                <h3 className="to-tile__title">Bootcamp</h3>
              </div>
              <p className="to-tile__text">
                A structured path from foundations to execution. Build a
                repeatable playbook and start trading with intent.
              </p>
              <ul className="to-bullets">
                <li>4–6 guided sessions + homework</li>
                <li>Entry/exit criteria &amp; position sizing</li>
                <li>Repeatable playbook + post-trade review</li>
              </ul>
              <a
                className="to-btn to-btn--ghost"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Apply for Bootcamp
              </a>
            </article>

            <article className="to-tile">
              <div className="to-tile__head">
                <span className="to-tag to-tag--green">Ongoing</span>
                <h3 className="to-tile__title">VIP Community</h3>
              </div>
              <p className="to-tile__text">
                Weekly office hours, chat, and accountability. Keep your edge
                sharp with consistent feedback and support.
              </p>
              <ul className="to-bullets">
                <li>Weekly calls + Q&amp;A</li>
                <li>Private chat &amp; reviews</li>
                <li>Accountability &amp; growth tracking</li>
              </ul>
              <a
                className="to-btn to-btn--ghost"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Join the Waitlist
              </a>
            </article>
          </div>
        </section>

        {/* ==== SYLLABUS (EXPANDED) ==== */}
        <section id="syllabus" className="to-section">
          <h2 className="to-h2">Syllabus</h2>

          <div className="to-syllabus">
            <article className="to-module">
              <h3>Module 1 — Foundations</h3>
              <ul className="to-bullets">
                <li>Clean charting environment &amp; data awareness</li>
                <li>Market structure: trend, BOS, and pullbacks</li>
                <li>Support/Resistance and key levels</li>
              </ul>
            </article>

            <article className="to-module">
              <h3>Module 2 — Execution</h3>
              <ul className="to-bullets">
                <li>Entry triggers with confluence</li>
                <li>Position sizing &amp; risk/reward math</li>
                <li>Trade management: add, reduce, exit</li>
              </ul>
            </article>

            <article className="to-module">
              <h3>Module 3 — Playbook</h3>
              <ul className="to-bullets">
                <li>Systematic setups &amp; checklists</li>
                <li>Post-trade review &amp; journaling</li>
                <li>Scaling rules &amp; consistency plan</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ==== PRICING (TIERED) ==== */}
        <section id="pricing" className="to-section">
          <h2 className="to-h2">Pricing</h2>
          <p className="to-muted">
            Simple, transparent pricing — pick what fits your journey. No
            surprises.
          </p>

          <div className="to-grid to-grid--3 to-pricing">
            <article className="to-tier">
              <header className="to-tier__head">
                <h3 className="to-tier__title">1-on-1 Session</h3>
                <div className="to-price">
                  <span className="to-price__num">$149</span>
                  <span className="to-price__meta">per 60 min</span>
                </div>
              </header>
              <ul className="to-bullets">
                <li>Custom plan &amp; focused coaching</li>
                <li>TradingView setup &amp; workflow</li>
                <li>Recording (by request)</li>
              </ul>
              <a
                className="to-btn to-btn--primary to-tier__cta"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Book 1-on-1
              </a>
            </article>

            <article className="to-tier to-tier--highlight">
              <header className="to-tier__head">
                <span className="to-flag">Best Value</span>
                <h3 className="to-tier__title">Bootcamp</h3>
                <div className="to-price">
                  <span className="to-price__num">$599</span>
                  <span className="to-price__meta">4-session package</span>
                </div>
              </header>
              <ul className="to-bullets">
                <li>Foundations → Execution → Playbook</li>
                <li>Homework &amp; reviews</li>
                <li>DM support between sessions</li>
              </ul>
              <a
                className="to-btn to-btn--primary to-tier__cta"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Apply for Bootcamp
              </a>
            </article>

            <article className="to-tier">
              <header className="to-tier__head">
                <h3 className="to-tier__title">VIP Community</h3>
                <div className="to-price">
                  <span className="to-price__num">$79</span>
                  <span className="to-price__meta">per month</span>
                </div>
              </header>
              <ul className="to-bullets">
                <li>Weekly office hours + Q&amp;A</li>
                <li>Private chat &amp; accountability</li>
                <li>Ongoing feedback on trades</li>
              </ul>
              <a
                className="to-btn to-btn--primary to-tier__cta"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Join the Waitlist
              </a>
            </article>
          </div>
        </section>

        {/* ==== CONTACT ==== */}
        <section id="contact" className="to-section">
          <h2 className="to-h2">Contact</h2>
          <p>
            Email{" "}
            <a href="mailto:support@tradingoptics.org">
              support@tradingoptics.org
            </a>{" "}
            or book a session any time via Calendly.
          </p>
          <a
            className="to-btn to-btn--primary"
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
          >
            Book on Calendly
          </a>
        </section>

        {/* ==== REFUND POLICY (unchanged structure, styled) ==== */}
        <section id="refund-policy" className="to-section">
          <details className="to-details" open>
            <summary className="to-details__summary">Refund Policy</summary>
            <div className="to-details__content">
              <p>
                We want every student to feel confident and supported. Because
                our services are delivered live and require scheduling, we offer
                the following:
              </p>

              <h3>1-on-1 Coaching Sessions</h3>
              <ul className="to-bullets">
                <li>
                  <strong>Full refund</strong> if cancelled at least{" "}
                  <strong>24 hours</strong> before the scheduled session.
                </li>
                <li>
                  <strong>50% refund</strong> if cancelled within 24 hours.
                </li>
                <li>
                  <strong>No refund</strong> for no-shows or missed sessions.
                </li>
              </ul>

              <h3>Bootcamp Programs</h3>
              <ul className="to-bullets">
                <li>
                  <strong>Full refund</strong> if you cancel{" "}
                  <strong>before the first session</strong> begins.
                </li>
                <li>
                  <strong>50% refund</strong> if you cancel after the first
                  session but before the second session.
                </li>
                <li>
                  <strong>No refunds</strong> once two or more sessions have
                  been attended.
                </li>
              </ul>

              <h3>VIP Community / Mentorship</h3>
              <ul className="to-bullets">
                <li>
                  VIP access is billed <strong>monthly</strong>.
                </li>
                <li>
                  You may <strong>cancel anytime</strong> before your next
                  billing cycle.
                </li>
                <li>
                  <strong>No partial refunds</strong> for unused time during an
                  active month.
                </li>
              </ul>

              <h3>Rescheduling</h3>
              <ul className="to-bullets">
                <li>
                  Sessions may be rescheduled <strong>once without penalty</strong> if
                  requested at least <strong>12 hours</strong> in advance.
                </li>
                <li>
                  Repeated rescheduling or last-minute changes may be treated as
                  a cancellation.
                </li>
              </ul>
            </div>
          </details>
        </section>
      </main>

      <footer className="to-footer">
        <div className="to-container">
          © {new Date().getFullYear()} TradingOptics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
