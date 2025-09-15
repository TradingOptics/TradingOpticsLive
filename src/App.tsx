import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  // Load TradingView script once
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://s3.tradingview.com/tv.js";
    s.async = true;
    s.onload = () => {
      // @ts-ignore
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          gridColor: "rgba(42,46,57,0)",
          hide_top_toolbar: false,
          hide_legend: false,
          allow_symbol_change: true,
          container_id: "tv-chart",
        });
      }
    };
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <div className="site">
      {/* Header */}
      <header className="header">
        <a className="brand" href="#top" aria-label="TradingOptics">
          <img src="/logo.png" alt="TradingOptics logo" className="brand__logo" />
          <span className="brand__text">TradingOptics</span>
        </a>

        <nav className="nav">
          <a href="#offerings">Offerings</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="btn btn--primary header__cta"
          href="https://calendly.com/tradingoptics"
          target="_blank"
          rel="noreferrer"
        >
          Book a Session
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero__copy">
          <p className="tag">Learn charts the simple, smart way</p>
          <h1 className="hero__title">
            Master TradingView & <br /> Technical Analysis
          </h1>
          <p className="hero__lead">
            1-on-1 coaching for beginners, a guided bootcamp, and VIP community
            access. Practical lessons, live chart walk-throughs, and a
            repeatable plan so you stop guessing and start executing.
          </p>

          <a
            className="btn btn--primary btn--lg"
            href="https://calendly.com/tradingoptics"
            target="_blank"
            rel="noreferrer"
          >
            Book a Session
          </a>
        </div>

        <div className="hero__card">
          <div className="chart__head">
            <div className="chip chip--green">REAL-TIME</div>
            <div className="chart__title">Live Chart • BTC/USDT</div>
          </div>
          <div id="tv-chart" className="chart__area" />
          <p className="chart__foot">
            We’ll practice directly on TradingView: drawing tools, indicators,
            entries/exits, and risk management.
          </p>
        </div>
      </section>

      {/* Offerings + Syllabus */}
      <section className="grid-two" id="offerings">
        <div className="panel">
          <h2>Offerings</h2>
          <ul className="list">
            <li>
              <strong>1-on-1 sessions:</strong> tailored coaching for your goals.
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
        </div>

        <div className="panel" id="syllabus">
          <h2>Syllabus</h2>
          <ul className="list">
            <li>Chart setup, drawing tools, and clean workflows</li>
            <li>Trend, structure, support/resistance</li>
            <li>Entries, exits, and position sizing</li>
            <li>Playbook creation and repeatable processes</li>
          </ul>
        </div>
      </section>

      {/* Pricing – NEW STYLE */}
      <section className="pricing" id="pricing">
        <h2>Pricing</h2>
        <p className="pricing__lead">
          Simple, transparent pricing — no surprises. Pay-as-you-go for 1-on-1,
          or choose Bootcamp for the best value. VIP is billed monthly.
        </p>

        <div className="pricing__grid">
          {/* Starter */}
          <article className="plan">
            <div className="plan__header">
              <h3 className="plan__title">Starter</h3>
              <div className="plan__price">
                <span className="plan__price-main">$99</span>
              </div>
            </div>
            <ul className="plan__features">
              <li>1× 60-min 1-on-1</li>
              <li>Personal chart review</li>
              <li>Homework + checklist</li>
            </ul>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--block"
            >
              Book Starter
            </a>
          </article>

          {/* Bootcamp – featured */}
          <article className="plan plan--featured">
            <div className="plan__badge">Best Value</div>

            <div className="plan__header">
              <h3 className="plan__title">Bootcamp</h3>
              <div className="plan__price">
                <span className="plan__price-main">$349</span>
              </div>
            </div>

            <ul className="plan__features">
              <li>4× 60-min sessions</li>
              <li>Full syllabus & exercises</li>
              <li>Templates & playbook</li>
              <li>Email support between calls</li>
            </ul>

            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--block"
            >
              Start Bootcamp
            </a>
          </article>

          {/* VIP */}
          <article className="plan">
            <div className="plan__header">
              <h3 className="plan__title">VIP</h3>
              <div className="plan__price">
                <span className="plan__price-main">$99</span>
                <span className="plan__price-sub">/mo</span>
              </div>
            </div>

            <ul className="plan__features">
              <li>Weekly office hours</li>
              <li>Private community</li>
              <li>Accountability & feedback</li>
            </ul>

            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--block"
            >
              Join VIP
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="panel">
          <h2>Contact</h2>
          <p>
            Email <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a> or
            book a session any time via Calendly.
          </p>
          <a
            className="btn btn--primary"
            href="https://calendly.com/tradingoptics"
            target="_blank"
            rel="noreferrer"
          >
            Book on Calendly
          </a>
        </div>
      </section>

      {/* Refund Policy (collapsible) */}
      <section className="refund">
        <details className="refund__details">
          <summary className="refund__summary">Refund Policy</summary>
          <div className="refund__content">
            <h3>1-on-1 Coaching Sessions</h3>
            <ul>
              <li><strong>Full refund</strong> if cancelled at least <strong>24 hours</strong> before the scheduled session.</li>
              <li><strong>50% refund</strong> if cancelled within 24 hours.</li>
              <li><strong>No refund</strong> for no-shows or missed sessions.</li>
            </ul>

            <h3>Bootcamp Programs</h3>
            <ul>
              <li><strong>Full refund</strong> if you cancel <strong>before the first session</strong> begins.</li>
              <li><strong>50% refund</strong> if you cancel after the first session but before the second session.</li>
              <li><strong>No refunds</strong> once two or more sessions have been attended.</li>
            </ul>

            <h3>VIP Community / Mentorship</h3>
            <ul>
              <li>VIP access is billed <strong>monthly</strong>.</li>
              <li>You may <strong>cancel anytime</strong> before your next billing cycle.</li>
              <li><strong>No partial refunds</strong> for unused time during an active month.</li>
            </ul>

            <h3>Rescheduling</h3>
            <ul>
              <li>Sessions may be rescheduled <strong>once without penalty</strong> if requested at least <strong>12 hours</strong> in advance.</li>
              <li>Repeated rescheduling or last-minute changes may be treated as a cancellation.</li>
            </ul>
          </div>
        </details>
      </section>

      <footer className="footer">© {new Date().getFullYear()} TradingOptics. All rights reserved.</footer>
    </div>
  );
}
