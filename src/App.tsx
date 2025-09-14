import React from "react";
import "./styles.css";

/**
 * TradingOptics – Single-page landing
 * - Live TradingView chart (responsive iframe)
 * - Hero + CTA
 * - Offerings / Syllabus / Pricing / Contact
 * - Refund Policy (clean, collapsible via <details>)
 * - Calendly buttons wired to: https://calendly.com/tradingoptics
 */

const CALENDLY = "https://calendly.com/tradingoptics";

export default function App() {
  return (
    <div className="to-page">
      {/* Top Nav */}
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

      {/* Hero */}
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

          {/* Live Chart Card */}
          <div className="to-card to-chart-card">
            <div className="to-card-head">
              <span className="to-card-title">Live Chart • BTC/USD (1m)</span>
              <span className="to-badge">REAL-TIME</span>
            </div>

            {/* Responsive TradingView Advanced Chart – reliable iframe */}
            <div className="to-tv-wrap">
              <iframe
                title="TradingView"
                className="to-tv-iframe"
                // TradingView advanced chart embed (no extra scripts required)
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

      {/* Main Sections */}
      <main className="to-container to-main">
        <section id="offerings" className="to-section">
          <h2>Offerings</h2>
          <ul className="to-list">
            <li>
              <strong>1-on-1 sessions:</strong> tailored coaching for your
              goals.
            </li>
            <li>
              <strong>Bootcamp:</strong> a structured path from foundations to
              execution.
            </li>
            <li>
              <strong>VIP community:</strong> weekly office hours, chat, and
              accountability.
            </li>
          </ul>
        </section>

        <section id="syllabus" className="to-section">
          <h2>Syllabus</h2>
          <p>From chart basics to execution and risk management.</p>
          <ul className="to-list">
            <li>Chart setup, drawing tools, and clean workflows</li>
            <li>Trend, structure, support/resistance</li>
            <li>Entries, exits, and position sizing</li>
            <li>Playbook creation and repeatable processes</li>
          </ul>
        </section>

        <section id="pricing" className="to-section">
          <h2>Pricing</h2>
          <p>
            Simple, transparent pricing — no surprises. Pay as you go for 1-on-1
            sessions, or choose a bootcamp package for the best value. VIP
            community is billed monthly.
          </p>
        </section>

        <section id="contact" className="to-section">
          <h2>Contact</h2>
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

        {/* Refund Policy – collapsible details keep page tidy */}
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
              <ul className="to-list">
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
              <ul className="to-list">
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
              <ul className="to-list">
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
              <ul className="to-list">
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
