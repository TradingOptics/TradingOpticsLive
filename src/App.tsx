import React, { useEffect, useRef } from "react";

const calendly = "https://calendly.com/tradingoptics";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // @ts-ignore – TradingView is exposed by tv.js
    if (window.TradingView && container.current) {
      // Remove any prior widget
      container.current.innerHTML = "";
      // @ts-ignore
      new window.TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "rgba(0,0,0,0)",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        container_id: "tv_container",
        studies: [],
        withdateranges: true
      });
    }
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <span className="muted">Live Chart •</span> BTC/USD <span className="badge">REAL-TIME</span>
      </div>
      <div id="tv_container" ref={container} className="tv-wrap" />
      <p className="card-note">
        We’ll practice directly on TradingView: drawing tools, indicators, entries/exits, and risk management.
      </p>
    </div>
  );
}

const Hero = () => (
  <section className="hero">
    <div>
      <div className="pill">Learn charts the simple, smart way</div>
      <h1>Master TradingView &amp; Technical Analysis</h1>
      <p className="lead">
        1-on-1 coaching for beginners, a guided bootcamp, and VIP community access. Practical lessons, live chart
        walk-throughs, and a repeatable plan so you stop guessing and start executing.
      </p>
      <a className="btn btn-primary" href={calendly} target="_blank" rel="noreferrer">Book a Session</a>
    </div>
    <TradingViewWidget />
  </section>
);

const Offerings = () => (
  <section id="offerings" className="section grid-2">
    <div>
      <h2>Offerings</h2>
      <ul className="bullets">
        <li><strong>1-on-1 sessions:</strong> tailored coaching for your goals.</li>
        <li><strong>Bootcamp:</strong> a structured path from foundations to execution.</li>
        <li><strong>VIP community:</strong> weekly office hours, chat, and accountability.</li>
      </ul>
    </div>
    <div>
      <h2>Syllabus</h2>
      <ul className="bullets">
        <li>Chart setup, drawing tools, and clean workflows</li>
        <li>Trend, structure, support/resistance</li>
        <li>Entries, exits, and position sizing</li>
        <li>Playbook creation and repeatable processes</li>
      </ul>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="section">
    <h2>Pricing</h2>

    <div className="tiers">
      <div className="tier">
        <h3>Starter <span className="price">$99</span></h3>
        <ul>
          <li>1× 60-min 1-on-1</li>
          <li>Personal chart review</li>
          <li>Homework + checklist</li>
        </ul>
        <a className="btn" href={calendly} target="_blank" rel="noreferrer">Book Starter</a>
      </div>

      <div className="tier tier-featured">
        <div className="tag">Best Value</div>
        <h3>Bootcamp <span className="price">$349</span></h3>
        <ul>
          <li>4× 60-min sessions</li>
          <li>Full syllabus & exercises</li>
          <li>Templates & playbook</li>
          <li>Email support between calls</li>
        </ul>
        <a className="btn btn-primary" href={calendly} target="_blank" rel="noreferrer">Start Bootcamp</a>
      </div>

      <div className="tier">
        <h3>VIP <span className="price">$99/mo</span></h3>
        <ul>
          <li>Weekly office hours</li>
          <li>Private community</li>
          <li>Accountability & feedback</li>
        </ul>
        <a className="btn" href={calendly} target="_blank" rel="noreferrer">Join VIP</a>
      </div>
    </div>

    <p className="muted center">
      Simple, transparent pricing — no surprises. Pay-as-you-go for 1-on-1, or choose Bootcamp for the best value. VIP is billed monthly.
    </p>
  </section>
);

const Contact = () => (
  <section id="contact" className="section grid-2">
    <div>
      <h2>Contact</h2>
      <p>Email <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a> or book a session any time via Calendly.</p>
      <a className="btn" href={calendly} target="_blank" rel="noreferrer">Book on Calendly</a>
    </div>
    <div className="card">
      <h3 className="card-header">Refund Policy</h3>
      <details className="refund">
        <summary>Tap to expand</summary>

        <h4>1-on-1 Coaching Sessions</h4>
        <ul>
          <li><strong>Full refund</strong> if cancelled at least <strong>24 hours</strong> before the scheduled session.</li>
          <li><strong>50% refund</strong> if cancelled within 24 hours.</li>
          <li><strong>No refund</strong> for no-shows or missed sessions.</li>
        </ul>

        <h4>Bootcamp Programs</h4>
        <ul>
          <li><strong>Full refund</strong> if you cancel <strong>before the first session</strong> begins.</li>
          <li><strong>50% refund</strong> if you cancel after the first session but before the second session.</li>
          <li><strong>No refunds</strong> once two or more sessions have been attended.</li>
        </ul>

        <h4>VIP Community / Mentorship</h4>
        <ul>
          <li>VIP access is billed <strong>monthly</strong>.</li>
          <li>You may <strong>cancel anytime</strong> before your next billing cycle.</li>
          <li><strong>No partial refunds</strong> for unused time during an active month.</li>
        </ul>

        <h4>Rescheduling</h4>
        <ul>
          <li>Sessions may be rescheduled <strong>once without penalty</strong> if requested at least <strong>12 hours</strong> in advance.</li>
          <li>Repeated rescheduling or last-minute changes may be treated as a cancellation.</li>
        </ul>
      </details>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="wrapper">
      <header className="topbar">
        <div className="brand">TradingOptics</div>
        <nav className="nav">
          <a href="#offerings">Offerings</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a className="btn btn-primary small" href={calendly} target="_blank" rel="noreferrer">Book a Session</a>
        </nav>
      </header>

      <Hero />
      <Offerings />
      <Pricing />
      <Contact />

      <footer className="footer">
        © {new Date().getFullYear()} TradingOptics. All rights reserved.
      </footer>
    </main>
  );
}
