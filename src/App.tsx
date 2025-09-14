import { useEffect, useRef } from "react";
import "./styles.css";

const CALENDLY = "https://calendly.com/tradingoptics";

function TradingViewChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // remove any previous widget (hot reload / re-mount)
    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore TV global
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
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tv-chart",
        });
      }
    };

    ref.current.appendChild(script);

    return () => {
      // remove to avoid stacking widgets
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="card chart-card">
      <div className="chart-header">
        <div className="chart-title">
          <span>Live Chart • BTC/USD</span>
          <span className="badge small">REAL-TIME</span>
        </div>
      </div>
      <div id="tv-chart" className="chart-embed" ref={ref} />
      <p className="muted small mt-12">
        We’ll practice directly on TradingView: drawing tools, indicators,
        entries/exits, and risk management.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="brand">TradingOptics</div>
        <nav className="nav">
          <a href="#offerings">Offerings</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">
            Book a Session
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <div className="pill">Learn charts the simple, smart way</div>
          <h1 className="hero-title">
            Master TradingView &amp; Technical Analysis
          </h1>
          <p className="lead">
            1-on-1 coaching for beginners, a guided bootcamp, and VIP community
            access. Practical lessons, live chart walk-throughs, and a
            repeatable plan so you stop guessing and start executing.
          </p>
          <a className="btn lg" href={CALENDLY} target="_blank" rel="noreferrer">
            Book a Session
          </a>
        </div>

        <TradingViewChart />
      </section>

      {/* Offerings / Syllabus */}
      <section id="offerings" className="two-col">
        <div className="col">
          <h2>Offerings</h2>
          <ul className="bullets">
            <li>
              <strong>1-on-1 sessions:</strong> tailored coaching for your goals.
            </li>
            <li>
              <strong>Bootcamp:</strong> a structured path from foundations to execution.
            </li>
            <li>
              <strong>VIP community:</strong> weekly office hours, chat, and accountability.
            </li>
          </ul>
        </div>

        <div className="col">
          <h2>Syllabus</h2>
          <ul className="bullets">
            <li>Chart setup, drawing tools, and clean workflows</li>
            <li>Trend, structure, support/resistance</li>
            <li>Entries, exits, and position sizing</li>
            <li>Playbook creation and repeatable processes</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-wrap">
        <h2 className="section-title">Pricing</h2>
        <p className="muted">
          Simple, transparent pricing — no surprises. Pay-as-you-go for 1-on-1,
          or choose Bootcamp for the best value. VIP is billed monthly.
        </p>

        <div className="pricing">
          {/* Starter */}
          <article className="plan">
            <div className="plan-head">
              <h3 className="plan-title">Starter</h3>
              <div className="price">$99</div>
            </div>
            <ul className="bullets">
              <li>1× 60-min 1-on-1</li>
              <li>Personal chart review</li>
              <li>Homework + checklist</li>
            </ul>
            <a
              className="btn block"
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
            >
              Book Starter
            </a>
          </article>

          {/* Bootcamp */}
          <article className="plan plan-accent">
            <div className="plan-head">
              <h3 className="plan-title">Bootcamp</h3>
              <div className="price">$349</div>
              <span className="tag">Best Value</span>
            </div>
            <ul className="bullets">
              <li>4× 60-min sessions</li>
              <li>Full syllabus &amp; exercises</li>
              <li>Templates &amp; playbook</li>
              <li>Email support between calls</li>
            </ul>
            <a
              className="btn block"
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
            >
              Start Bootcamp
            </a>
          </article>

          {/* VIP */}
          <article className="plan">
            <div className="plan-head">
              <h3 className="plan-title">VIP</h3>
              <div className="price">$99<span className="per">/mo</span></div>
            </div>
            <ul className="bullets">
              <li>Weekly office hours</li>
              <li>Private community</li>
              <li>Accountability &amp; feedback</li>
            </ul>
            <a
              className="btn block"
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
            >
              Join VIP
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Email <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a>{" "}
          or book a session any time via Calendly.
        </p>
        <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">
          Book on Calendly
        </a>
      </section>

      {/* Refund Policy (collapsed card kept minimal here; expand on your page if desired) */}
      <section className="refund">
        <details>
          <summary>Refund Policy</summary>
          <div className="refund-content">
            <h4>1-on-1 Coaching Sessions</h4>
            <ul>
              <li><strong>Full refund</strong> if cancelled ≥ 24h before the session.</li>
              <li><strong>50% refund</strong> if cancelled within 24h.</li>
              <li><strong>No refund</strong> for no-shows or missed sessions.</li>
            </ul>
            <h4>Bootcamp Programs</h4>
            <ul>
              <li><strong>Full refund</strong> if you cancel before the first session begins.</li>
              <li><strong>50% refund</strong> after the first session but before the second.</li>
              <li><strong>No refunds</strong> once two or more sessions have been attended.</li>
            </ul>
            <h4>VIP Community / Mentorship</h4>
            <ul>
              <li>VIP access is billed <strong>monthly</strong>.</li>
              <li>You may <strong>cancel anytime</strong> before the next billing cycle.</li>
              <li><strong>No partial refunds</strong> for unused time during an active month.</li>
            </ul>
            <h4>Rescheduling</h4>
            <ul>
              <li>Sessions may be rescheduled <strong>once without penalty</strong> if requested ≥ 12h in advance.</li>
              <li>Repeated last-minute changes may be treated as a cancellation.</li>
            </ul>
          </div>
        </details>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} TradingOptics. All rights reserved.
      </footer>
    </div>
  );
}
