import { useEffect, useRef } from "react";
import "./styles.css";

function TVChart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load TradingView script once
    const id = "tv-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://s3.tradingview.com/tv.js";
      s.async = true;
      document.body.appendChild(s);
      s.onload = () => init();
    } else {
      // If already loaded, init immediately
      init();
    }

    function init() {
      if (!ref.current || !(window as any).TradingView) return;
      // Clear any previous widget in this container
      ref.current.innerHTML = "";
      /* eslint-disable */
      new (window as any).TradingView.widget({
        width: "100%",
        height: 360,
        symbol: "BINANCE:BTCUSDT",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: "tv-container",
      });
      /* eslint-enable */
    }
  }, []);

  return <div id="tv-container" ref={ref} />;
}

export default function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <a href="#" className="brand">
          <img
            src="/logo.png"
            alt="TradingOptics"
            className="brand__logo"
            decoding="async"
          />
          <span className="brand__text">TradingOptics</span>
        </a>

        <nav className="nav__links">
          <a href="#offerings">Offerings</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a
            className="btn btn--primary"
            href="https://calendly.com/tradingoptics"
            target="_blank"
            rel="noreferrer"
          >
            Book a Session
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__copy">
          <div className="pill">Learn charts the simple, smart way</div>
          <h1>
            Master TradingView &amp; <br /> Technical Analysis
          </h1>
          <p className="muted">
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
          <div className="hero__cardHeader">
            <span>Live Chart • BTC/USD (1m)</span>
            <span className="badge badge--live">REAL-TIME</span>
          </div>
          <div className="hero__tv">
            <TVChart />
          </div>
          <p className="muted small">
            We’ll practice directly on TradingView: drawing tools, indicators,
            entries/exits, and risk management.
          </p>
        </div>
      </section>

      {/* TWO COLUMN: Offerings + Syllabus */}
      <section className="grid2 section">
        <div id="offerings">
          <h2>Offerings</h2>
          <ul className="bullets">
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
        </div>

        <div id="syllabus">
          <h2>Syllabus</h2>
          <ul className="bullets">
            <li>Chart setup, drawing tools, and clean workflows</li>
            <li>Trend, structure, support/resistance</li>
            <li>Entries, exits, and position sizing</li>
            <li>Playbook creation and repeatable processes</li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>
        <p className="muted center">
          Simple, transparent pricing — no surprises. Pay-as-you-go for 1-on-1,
          or choose Bootcamp for the best value. VIP is billed monthly.
        </p>

        <div className="cards">
          {/* Starter */}
          <div className="card">
            <div className="card__header">
              <h3>Starter</h3>
              <div className="price">$99</div>
            </div>
            <ul className="bullets tight">
              <li>1× 60-min 1-on-1</li>
              <li>Personal chart review</li>
              <li>Homework + checklist</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
            >
              Book Starter
            </a>
          </div>

          {/* Bootcamp */}
          <div className="card card--highlight">
            <span className="ribbon">Best Value</span>
            <div className="card__header">
              <h3>Bootcamp</h3>
              <div className="price">$349</div>
            </div>
            <ul className="bullets tight">
              <li>4× 60-min sessions</li>
              <li>Full syllabus &amp; exercises</li>
              <li>Templates &amp; playbook</li>
              <li>Email support between calls</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
            >
              Start Bootcamp
            </a>
          </div>

          {/* VIP */}
          <div className="card">
            <div className="card__header">
              <h3>VIP</h3>
              <div className="price">$99/mo</div>
            </div>
            <ul className="bullets tight">
              <li>Weekly office hours</li>
              <li>Private community</li>
              <li>Accountability &amp; feedback</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
            >
              Join VIP
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="grid2 section">
        <div>
          <h2>Contact</h2>
          <p className="muted">
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

        {/* Refund Policy */}
        <div>
          <details className="accordion">
            <summary>Refund Policy</summary>
            <div className="accordion__body">
              <h4>1-on-1 Coaching Sessions</h4>
              <ul className="bullets">
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

              <h4>Bootcamp Programs</h4>
              <ul className="bullets">
                <li>
                  <strong>Full refund</strong> if you cancel{" "}
                  <strong>before the first session</strong> begins.
                </li>
                <li>
                  <strong>50% refund</strong> after the first session but before
                  the second session.
                </li>
                <li>
                  <strong>No refunds</strong> once two or more sessions have been
                  attended.
                </li>
              </ul>

              <h4>VIP Community / Mentorship</h4>
              <ul className="bullets">
                <li>VIP access is billed <strong>monthly</strong>.</li>
                <li>
                  You may <strong>cancel anytime</strong> before your next billing
                  cycle.
                </li>
                <li>
                  <strong>No partial refunds</strong> for unused time during an
                  active month.
                </li>
              </ul>

              <h4>Rescheduling</h4>
              <ul className="bullets">
                <li>
                  Sessions may be rescheduled <strong>once without penalty</strong>{" "}
                  if requested at least <strong>12 hours</strong> in advance.
                </li>
                <li>
                  Repeated rescheduling or last-minute changes may be treated as a
                  cancellation.
                </li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} TradingOptics. All rights reserved.
      </footer>
    </div>
  );
}
