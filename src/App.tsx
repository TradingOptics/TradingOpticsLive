import React from "react";

const s = {
  page: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    background: "radial-gradient(1200px 600px at 20% -10%, #12361855, #000)",
    color: "#E7F6EE",
    minHeight: "100vh",
  },
  container: { maxWidth: 1200, margin: "0 auto", padding: "32px 20px" },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "8px 0 24px",
  },
  brand: { fontWeight: 700 as const, fontSize: 22, letterSpacing: 0.3 },
  navRow: { display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" as const },
  navLink: {
    color: "#BDE8CF",
    textDecoration: "none",
    fontSize: 14,
    opacity: 0.9,
  },
  cta: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    background:
      "linear-gradient(135deg, rgba(34,197,94,1) 0%, rgba(234,179,8,1) 100%)",
    color: "#0B1A10",
    fontWeight: 700 as const,
    textDecoration: "none",
    boxShadow: "0 6px 18px rgba(34,197,94,0.25)",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 24,
  },
  badge: {
    display: "inline-block",
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(34,197,94,0.1)",
    color: "#BDE8CF",
    fontSize: 14,
    border: "1px solid rgba(34,197,94,0.25)",
    marginBottom: 16,
  },
  h1: {
    fontFamily: "Montserrat, ui-sans-serif, system-ui",
    fontWeight: 800 as const,
    fontSize: "clamp(36px, 6vw, 64px)",
    lineHeight: 1.05,
    margin: "12px 0 18px",
  },
  p: { color: "#CFE9DB", fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" },
  card: {
    background:
      "radial-gradient(1400px 700px at 80% -40%, rgba(234,179,8,0.10), rgba(0,0,0,0))",
    border: "1px solid rgba(189,232,207,0.10)",
    borderRadius: 16,
    padding: 16,
  },
  chartNote: { fontSize: 14, color: "#9ED0B7", marginTop: 12 },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 40,
  },
  section: { marginTop: 56 },
  h2: {
    fontFamily: "Montserrat, ui-sans-serif, system-ui",
    fontWeight: 800 as const,
    fontSize: "clamp(26px, 3.6vw, 34px)",
    margin: "0 0 10px",
  },
  muted: { color: "#BDE8CF", opacity: 0.85, lineHeight: 1.7, fontSize: 17 },
  hr: { border: 0, height: 1, background: "rgba(189,232,207,0.10)", margin: "28px 0" },
  list: { margin: "8px 0 0 18px", color: "#CFE9DB", lineHeight: 1.7 },
  foot: {
    marginTop: 56,
    paddingTop: 16,
    borderTop: "1px solid rgba(189,232,207,0.10)",
    color: "#9ED0B7",
    fontSize: 14,
  },
} as const;

export default function App() {
  return (
    <main style={s.page}>
      <div style={s.container}>
        {/* NAV */}
        <header style={s.nav}>
          <div style={s.brand}>TradingOptics</div>
          <nav style={s.navRow}>
            <a href="#offerings" style={s.navLink}>Offerings</a>
            <a href="#syllabus" style={s.navLink}>Syllabus</a>
            <a href="#pricing" style={s.navLink}>Pricing</a>
            <a href="#contact" style={s.navLink}>Contact</a>
            <a href="#refund" style={s.navLink}>Refund Policy</a>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              style={s.cta}
            >
              Book a Session
            </a>
          </nav>
        </header>

        {/* HERO + CHART (chart container must match ID in index.html TradingView embed) */}
        <section style={s.hero}>
          <div>
            <div style={s.badge}>Learn charts the simple, smart way</div>
            <h1 style={s.h1}>Master TradingView & Technical Analysis</h1>
            <p style={s.p}>
              1-on-1 coaching for beginners, a guided bootcamp, and VIP community access.
              Practical lessons, live chart walk-throughs, and a repeatable plan so you
              stop guessing and start executing.
            </p>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              style={s.cta}
            >
              Book a Session
            </a>
          </div>

          <div style={s.card}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontWeight: 700, color: "#CFE9DB" }}>Live Chart • BTC/USD (1m)</div>
              <div
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 999,
                  color: "#9ED0B7",
                }}
              >
                REAL-TIME
              </div>
            </div>
            {/* This div ID must match the container_id used by the TradingView script in index.html */}
            <div id="tv_container_main" style={{ width: "100%", minHeight: 360 }} />
            <div style={s.chartNote}>
              We’ll practice directly on TradingView: drawing tools, indicators, entries/exits,
              and risk management.
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section style={s.grid2}>
          <div id="offerings">
            <h2 style={s.h2}>Offerings</h2>
            <p style={s.muted}>
              • <strong>1-on-1 sessions</strong>: tailored coaching for your goals.<br />
              • <strong>Bootcamp</strong>: a structured path from foundations to execution.<br />
              • <strong>VIP community</strong>: weekly office hours, chat, and accountability.
            </p>
          </div>

          <div id="syllabus">
            <h2 style={s.h2}>Syllabus</h2>
            <p style={s.muted}>
              From chart basics to execution and risk management. You’ll learn:
            </p>
            <ul style={s.list}>
              <li>Chart setup, drawing tools, and clean workflows</li>
              <li>Trend, structure, support/resistance</li>
              <li>Entries, exits, and position sizing</li>
              <li>Playbook creation and repeatable processes</li>
            </ul>
          </div>
        </section>

        <hr style={s.hr} />

        <section style={s.grid2}>
          <div id="pricing">
            <h2 style={s.h2}>Pricing</h2>
            <p style={s.muted}>
              Simple, transparent pricing — no surprises. Pay as you go for 1-on-1 sessions,
              or choose a bootcamp package for the best value. VIP community is billed monthly.
            </p>
          </div>

          <div id="contact">
            <h2 style={s.h2}>Contact</h2>
            <p style={s.muted}>
              Email{" "}
              <a href="mailto:support@tradingoptics.org" style={{ color: "#BDE8CF" }}>
                support@tradingoptics.org
              </a>{" "}
              or book a session any time via Calendly.
            </p>
            <a
              href="https://calendly.com/tradingoptics"
              target="_blank"
              rel="noreferrer"
              style={s.cta}
            >
              Book on Calendly
            </a>
          </div>
        </section>

        <hr style={s.hr} />

        {/* REFUND POLICY */}
        <section id="refund" style={s.section}>
          <h2 style={s.h2}>Refund Policy</h2>
          <p style={s.muted}>
            We want every student to feel confident and supported. Because our services are
            delivered live and require scheduling, we offer the following:
          </p>

          <h3 style={{ ...s.muted, marginTop: 12, fontWeight: 700 }}>1-on-1 Coaching Sessions</h3>
          <ul style={s.list}>
            <li><strong>Full refund</strong> if cancelled at least <strong>24 hours</strong> before the scheduled session.</li>
            <li><strong>50% refund</strong> if cancelled within 24 hours.</li>
            <li><strong>No refund</strong> for no-shows or missed sessions.</li>
          </ul>

          <h3 style={{ ...s.muted, marginTop: 14, fontWeight: 700 }}>Bootcamp Programs</h3>
          <ul style={s.list}>
            <li><strong>Full refund</strong> if you cancel <strong>before the first session</strong> begins.</li>
            <li><strong>50% refund</strong> if you cancel after the first session but before the second session.</li>
            <li><strong>No refunds</strong> once two or more sessions have been attended.</li>
          </ul>

          <h3 style={{ ...s.muted, marginTop: 14, fontWeight: 700 }}>VIP Community / Mentorship</h3>
          <ul style={s.list}>
            <li>VIP access is billed <strong>monthly</strong>.</li>
            <li>You may <strong>cancel anytime</strong> before your next billing cycle.</li>
            <li><strong>No partial refunds</strong> for unused time during an active month.</li>
          </ul>

          <h3 style={{ ...s.muted, marginTop: 14, fontWeight: 700 }}>Rescheduling</h3>
          <ul style={s.list}>
            <li>Sessions may be rescheduled <strong>once without penalty</strong> if requested at least <strong>12 hours</strong> in advance.</li>
            <li>Repeated rescheduling or last-minute changes may be treated as a cancellation.</li>
          </ul>
        </section>

        <footer style={s.foot}>
          © {new Date().getFullYear()} TradingOptics. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
