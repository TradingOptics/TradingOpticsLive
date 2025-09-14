import React, { useEffect, useRef } from 'react'
declare global { interface Window { TradingView?: any } }

const useTradingView = (symbol: string, height = 420) => {
  const id = useRef('tv_' + Math.random().toString(36).slice(2))
  useEffect(() => {
    const ensure = () => new Promise<void>(resolve => {
      if (window.TradingView) return resolve()
      const s = document.createElement('script'); s.src = 'https://s3.tradingview.com/tv.js'; s.onload = () => resolve(); document.head.appendChild(s)
    })
    let widget:any
    ensure().then(() => {
      widget = new window.TradingView.widget({
        width:'100%', height, symbol, interval:'1', timezone:'Etc/UTC', theme:'dark',
        style:'1', locale:'en', toolbar_bg:'#0b0f0e', hide_side_toolbar:false, allow_symbol_change:true,
        container_id: id.current
      })
    })
    return () => { widget = null }
  }, [symbol, height])
  return id.current
}

export default function App(){
  const tvId = useTradingView('BINANCE:BTCUSDT', 420)
  return (
    <div className="container">
      <header className="nav">
        <div className="brand"><span>TradingOptics</span><small>Charts as Art · Profits by Design</small></div>
        <a className="book" href="https://calendly.com/tradingoptics" target="_blank" rel="noreferrer">Book a Session</a>
      </header>
      <div className="hero">
        <div>
          <span className="pill">Learn charts the simple, smart way</span>
          <h1>Master TradingView & Technical Analysis</h1>
          <p className="lead">1‑on‑1 coaching for beginners, a guided bootcamp, and VIP community access. Practical lessons, live chart walk‑throughs, and a repeatable plan so you stop guessing and start executing.</p>
          <div className="ctaRow"><a className="book" href="https://calendly.com/tradingoptics" target="_blank" rel="noreferrer">Book a Session</a></div>
        </div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
            <div style={{opacity:.85}}>Live Chart • BTC/USD (1m)</div>
            <span className="pill" style={{background:'#0d3a29',color:'#b6ffd9'}}>REAL‑TIME</span>
          </div>
          <div className="tvWrap"><div id={tvId} style={{width:'100%',height:'100%'}}/></div>
          <p style={{marginTop:12,color:'#a5b8ac'}}>We’ll practice directly on TradingView: drawing tools, indicators, entries/exits, and risk management.</p>
        </div>
      </div>
      <hr className="hr"/>
      <div className="section">
        <div><h2>Offerings</h2><p>1‑on‑1 sessions, bootcamp, and VIP community access.</p></div>
        <div><h2>Syllabus</h2><p>From chart basics to execution and risk management.</p></div>
        <div><h2>Pricing</h2><p>Simple, transparent pricing — no surprises.</p></div>
        <div><h2>Contact</h2><p>Email <a href="mailto:support@tradingoptics.org">support@tradingoptics.org</a> or book a session any time.</p></div>
      </div>
      <footer className="footer">© 2025 TradingOptics. All rights reserved.</footer>
    </div>
  )
}
