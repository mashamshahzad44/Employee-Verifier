import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileCheck2,
  Fingerprint,
  Gavel,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()
    setSearched(Boolean(query.trim()))
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Employee Verifier home">
          <span className="brand-mark"><Fingerprint size={24} strokeWidth={2.5} /></span>
          <span>employee<span>verifier</span></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#how-it-works">How it works</a>
          <a href="#services">Services</a>
          <a href="#support">Support</a>
          <a className="nav-cta" href="#search">Start a check <ArrowUpRight size={16} /></a>
        </div>
        <button className="icon-button menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> The clarity layer for hiring</div>
          <h1>Know who<br /><em>you’re trusting.</em></h1>
          <p className="hero-intro">The smarter way to verify people, protect your reputation, and make decisions with confidence.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#search">Verify a person <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#how-it-works">See how it works <ChevronDown size={16} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Verification status illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="signal-card">
            <div className="signal-top"><span>VERIFICATION SIGNAL</span><span className="live-dot">LIVE</span></div>
            <div className="signal-score"><strong>94</strong><span>/ 100<br /><small>TRUST INDEX</small></span></div>
            <div className="signal-line"><span style={{ width: '94%' }}></span></div>
            <div className="signal-meta"><span><Check size={14} /> Identity matched</span><span>Updated now</span></div>
          </div>
          <div className="floating-tag tag-one"><ShieldCheck size={17} /> Verified record</div>
          <div className="floating-tag tag-two"><span>+1,240</span> checks this month</div>
          <span className="visual-number">01</span>
        </div>
      </section>

      <section className="search-panel shell" id="search">
        <div className="section-kicker">01 / Search the signal</div>
        <div className="search-heading"><h2>One search.<br /><span>Real context.</span></h2><p>Look beyond a name. Find the verified record behind it.</p></div>
        <form className="search-form" onSubmit={handleSearch}>
          <Search size={21} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter a 13-digit CNIC number" aria-label="CNIC number" /><button type="submit">Search record <ArrowUpRight size={17} /></button>
        </form>
        {searched && <div className="search-result"><Check size={17} /> Search request ready for <strong>{query}</strong>. Connect your records API to display results.</div>}
        <div className="search-foot"><span><ShieldCheck size={16} /> Privacy-first lookup</span><span>Encrypted & confidential</span><span>Available 24 / 7</span></div>
      </section>

      <section className="steps shell" id="how-it-works">
        <div className="section-kicker">02 / The method</div><div className="section-title"><h2>Confidence is<br /><em>a process.</em></h2><p>Every decision deserves more than a quick first impression.</p></div>
        <div className="step-grid"><article><span>01</span><Fingerprint size={27} /><h3>Start with identity</h3><p>Search a CNIC and establish the facts first.</p></article><article><span>02</span><FileCheck2 size={27} /><h3>Read the full record</h3><p>See work history, ratings, reports and context.</p></article><article><span>03</span><Gavel size={27} /><h3>Act with clarity</h3><p>Get support when the answer needs a human.</p></article></div>
      </section>

      <section className="services shell" id="services"><div className="section-kicker">03 / Built for real life</div><div className="services-head"><h2>Check the details<br /><em>that matter.</em></h2><Sparkles size={32} /></div><div className="service-list"><a href="#search"><span>01</span><strong>Employee verification</strong><small>Background and employment records</small><ArrowUpRight /></a><a href="#search"><span>02</span><strong>Domestic staff checks</strong><small>Confidence for the people closest to home</small><ArrowUpRight /></a><a href="#search"><span>03</span><strong>Company reviews</strong><small>Workplace conduct and ratings</small><ArrowUpRight /></a></div></section>

      <section className="closing shell" id="support"><div><div className="eyebrow"><span className="pulse"></span> Here when the answer matters</div><h2>Good decisions<br /><em>feel different.</em></h2></div><a className="button button-lime" href="mailto:info@employeeverifier.com">Talk to our team <ArrowUpRight size={18} /></a></section>
      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><Fingerprint size={20} /></span><span>employee<span>verifier</span></span></a><span>Verification • Records • Legal advisory</span><span>© 2026 Employee Verifier</span></footer>
    </main>
  )
}

export default App
