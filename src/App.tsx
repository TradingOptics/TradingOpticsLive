import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="TradingOptics Logo" className="logo-img" />
          <span className="logo-text">TradingOptics</span>
        </div>
        <div className="navbar-right">
          <a href="#offerings">Offerings</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#book" className="btn">
            Book a Session
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <span className="tagline">Learn charts the simple, smart way</span>
          <h1>
            Master <br />
            TradingView & <br />
            Technical Analysis
          </h1>
          <p>
            1-on-1 coaching for beginners, a guided bootcamp, and VIP community
            access. Practical lessons, live chart walk-throughs, and a
            repeatable plan so you stop guessing and start executing.
          </p>
          <a href="#book" className="btn">
            Book a Session
          </a>
        </div>
        <div className="hero-chart">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=BINANCE:BTCUSDT&interval=1&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1&enablepublishing=0"
            width="100%"
            height="400"
            frameBorder="0"
            allowTransparency={true}
            scrolling="no"
            title="TradingView Chart"
          ></iframe>
          <p className="chart-caption">
            We’ll practice directly on TradingView: drawing tools, indicators,
            entries/exits, and risk management.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
