import { useEffect, useRef } from "react";
import "./styles.css";

const CALENDLY = "https://calendly.com/tradingoptics";

export default function App() {
  // ---- TradingView Widget ----
  const tvRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // @ts-ignore global added by index.html
    const TV = (window as any).TradingView;
    if (!TV || !tvRef.current) return;

    // Clean existing widget on HMR / re-render
    tvRef.current.innerHTML = "";

    new TV.widget({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "1",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(16,20,16,0)",
      gridColor: "rgba(42, 48, 44, 0.4)",
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      container_id: "tvchart",
    });
  }, []);

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container row between center">
          <a href="#top" className="brand">TradingOptics</a>
          <nav className="nav">
            <a href="#offerings">Offerings</a>
            <a href="#syllabus">Syllabus</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cta" href={CALENDLY} target="_blank" rel="noreferrer">
            Book a Session
          </a>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="hero-wrap">
        <div className="container grid hero-grid">
          <div className="hero-copy">
            <span className="chip">Learn charts the simple, smart way</span>
            <h1 className="display">
              Master <br /> TradingView & <br /> Technical Analysis
            </h1>
            <p className="lead">
              1-on-1 coaching for beginners, a guided bootcamp, and VIP community
              access. Practical lessons, live chart walk-throughs, and a repeatable plan
              so you stop guessing and start executing.
            </p>
            <div className="actions">
              <a className="cta" href={CALENDLY} target="_blank" rel="noreferrer">
                Book a Session
              </a>
            </div>
          </div>

          <aside className="hero-chart">
            <div className="card">
              <div className="card-head">
                <div className="card-title">Live Chart • BTC/USD (1m)</div>
                <span className="pill">REAL-TIME</span>
              </div>
              <div id="tvchart" ref={tvRef} className="tv-embed" />
              <p className="muted">
                We’ll practice directly on TradingView: drawing tools, indicators,
                entries/exits, and risk management.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Offerings */}
      <section id="offerings" className="section">
        <div className="container">
          <h2>Offerings</h2>
          <div className="cards-3">
            <div className="card">
              <h3>1-on-1 Coaching</h3>
              <p className="muted">
                Personalized 60- or 90-minute sessions on Zoom. We work on your
                charts, sharpen entries/exits, and clarify your plan.
              </p>
              <ul className="ticks">
                <li>Tailored to your level & goals</li>
                <li>Live chart walk-throughs</li>
                <li>Homework + feedback</li>
              </ul>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Book 1-on-1</a>
            </div>

            <div className="card">
              <h3>Bootcamp (4 Weeks)</h3>
              <p className="muted">
                A guided, step-by-step program to master core tools and build a
                repeatable playbook.
              </p>
              <ul className="ticks">
                <li>4 × 90-minute live lessons</li>
                <li>Templates, checklists & recordings</li>
                <li>Capstone trade plan</li>
              </ul>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Join Bootcamp</a>
            </div>

            <div className="card">
              <h3>VIP Community</h3>
              <p className="muted">
                Ongoing coaching, weekly office hours, and a focused private group
                for accountability and support.
              </p>
              <ul className="ticks">
                <li>Weekly office hours</li>
                <li>Private chat & chart reviews</li>
                <li>Priority Q&A</li>
              </ul>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Request Access</a>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="section alt">
        <div className="container">
          <h2>Syllabus</h2>
          <div className="cards-2">
            <div className="card">
              <h3>Weeks 1–2: Foundations & Tools</h3>
              <ul className="ticks">
                <li>Market structure, trend, timeframes</li>
                <li>Support/resistance, supply/demand</li>
                <li>Drawing toolkit: trendlines, Fibs, channels</li>
                <li>Core indicators: MA/EMA, RSI, MACD, Volume</li>
              </ul>
            </div>
            <div className="card">
              <h3>Weeks 3–4: Entries, Risk & Playbook</h3>
              <ul className="ticks">
                <li>Entry triggers & confluence</li>
                <li>Stop placement, risk per trade, R:R</li>
                <li>Scaling, exits, journaling</li>
                <li>Build your personal trade plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <h2>Pricing</h2>
          <div className="cards-3">
            <div className="card">
              <h3>Starter Session</h3>
              <p className="price">$149 <span className="muted">/ 60 min</span></p>
              <ul className="ticks">
                <li>Live TradingView session</li>
                <li>Immediate action items</li>
                <li>Recording on request</li>
              </ul>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Book Now</a>
            </div>

            <div className="card featured">
              <div className="flag">Popular</div>
              <h3>Bootcamp</h3>
              <p className="price">$599 <span className="muted">/ 4 × 90 min</span></p>
              <ul className="ticks">
                <li>Full syllabus + templates</li>
                <li>Playbook & feedback</li>
                <li>Priority email support</li>
              </ul>
              <a className="btn primary" href={CALENDLY} target="_blank" rel="noreferrer">Enroll</a>
            </div>

            <div className="card">
              <h3>VIP Mentorship</h3>
              <p className="price">$299 <span className="muted">/ month</span></p>
              <ul className="ticks">
                <li>Weekly office hours</li>
                <li>Private community</li>
                <li>Ongoing chart reviews</li>
              </ul>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Apply</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section alt">
        <div className="container">
          <h2>Contact</h2>
          <div className="cards-2">
            <div className="card">
              <h3>Email</h3>
              <p>
                Reach us any time:{" "}
                <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a>
              </p>
              <p className="muted">
                We typically reply within 24 hours on weekdays.
              </p>
            </div>
            <div className="card">
              <h3>Schedule</h3>
              <p>Prefer to jump straight in? Book a time that works for you.</p>
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">
                Open Calendly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container row between center">
          <span className="muted">© {new Date().getFullYear()} TradingOptics. All rights reserved.</span>
          <div className="foot-links">
            <a href="#offerings">Offerings</a>
            <a href="#syllabus">Syllabus</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
