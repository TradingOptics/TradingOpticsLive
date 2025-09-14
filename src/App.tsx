import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="navbar">
        <a href="/" className="logo-container" aria-label="TradingOptics Home">
          <img src="/logo.png" alt="TradingOptics Logo" className="logo-img" />
        </a>

        <nav className="nav">
          <a href="#offerings">Offerings</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://calendly.com/tradingoptics"
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn"
        >
          Book a Session
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="tagline">Learn charts the simple, smart way</span>
          <h1>
            Master <br /> TradingView & <br /> Technical Analysis
          </h1>
          <p>
            1-on-1 coaching for beginners, a guided bootcamp, and VIP community
            access. Practical lessons, live chart walk-throughs, and a
            repeatable plan so you stop guessing and start executing.
          </p>
          <a
            href="https://calendly.com/tradingoptics"
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book a Session
          </a>
        </div>

        <div className="chart-container">
          <h3>Live Chart • BTC/USDT REAL-TIME</h3>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_live&symbol=BINANCE%3ABTCUSDT&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            title="TradingView Live Chart"
            allowTransparency
          ></iframe>
          <p className="chart-caption">
            We’ll practice directly on TradingView: drawing tools, indicators,
            entries/exits, and risk management.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="section">
        <h2>Offerings</h2>
        <ul>
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
      </section>

      {/* SYLLABUS */}
      <section id="syllabus" className="section">
        <h2>Syllabus</h2>
        <ul>
          <li>Chart setup, drawing tools, and clean workflows</li>
          <li>Trend, structure, support/resistance</li>
          <li>Entries, exits, and position sizing</li>
          <li>Playbook creation and repeatable processes</li>
        </ul>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section pricing">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price">$99</p>
            <ul>
              <li>1× 60-min 1-on-1</li>
              <li>Personal chart review</li>
              <li>Homework + checklist</li>
            </ul>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn small"
            >
              Book Starter
            </a>
          </div>

          <div className="pricing-card highlight">
            <span className="badge">Best Value</span>
            <h3>Bootcamp</h3>
            <p className="price">
              $349 <span className="per">/ 4 weeks</span>
            </p>
            <ul>
              <li>4× 60-min sessions</li>
              <li>Full syllabus & exercises</li>
              <li>Templates & playbook</li>
              <li>Email support between calls</li>
            </ul>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn small"
            >
              Start Bootcamp
            </a>
          </div>

          <div className="pricing-card">
            <h3>VIP</h3>
            <p className="price">
              $99<span className="per">/mo</span>
            </p>
            <ul>
              <li>Weekly office hours</li>
              <li>Private community</li>
              <li>Accountability & feedback</li>
            </ul>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn small"
            >
              Join VIP
            </a>
          </div>
        </div>
        <p className="pricing-note">
          Simple, transparent pricing — no surprises. Pay-as-you-go for 1-on-1,
          or choose Bootcamp for the best value. VIP is billed monthly.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>
          Email <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a>{" "}
          or book a session any time via Calendly.
        </p>
        <a
          href="https://calendly.com/tradingoptics"
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn"
        >
          Book on Calendly
        </a>
      </section>

      {/* REFUND POLICY */}
      <section id="refund" className="section refund">
        <h2>Refund Policy</h2>
        <p>
          We want every student to feel confident and supported. Because our
          services are delivered live and require scheduling, we offer the
          following:
        </p>
        <h3>1-on-1 Coaching Sessions</h3>
        <ul>
          <li>
            <strong>Full refund</strong> if cancelled at least 24 hours before
            the scheduled session.
          </li>
          <li>
            <strong>50% refund</strong> if cancelled within 24 hours.
          </li>
          <li>
            <strong>No refund</strong> for no-shows or missed sessions.
          </li>
        </ul>

        <h3>Bootcamp Programs</h3>
        <ul>
          <li>
            <strong>Full refund</strong> if you cancel before the first session
            begins.
          </li>
          <li>
            <strong>50% refund</strong> if you cancel after the first session
            but before the second session.
          </li>
          <li>
            <strong>No refunds</strong> once two or more sessions have been
            attended.
          </li>
        </ul>

        <h3>VIP Community / Mentorship</h3>
        <ul>
          <li>VIP access is billed monthly.</li>
          <li>You may cancel anytime before your next billing cycle.</li>
          <li>No partial refunds for unused time during an active month.</li>
        </ul>

        <h3>Rescheduling</h3>
        <ul>
          <li>
            Sessions may be rescheduled once without penalty if requested at
            least 12 hours in advance.
          </li>
          <li>
            Repeated rescheduling or last-minute changes may be treated as a
            cancellation.
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} TradingOptics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
