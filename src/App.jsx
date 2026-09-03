import { useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileCheck2,
  Fingerprint,
  Gavel,
  Home,
  Headphones,
  HelpCircle,
  IdCard,
  Mail,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Scale,
  Sparkles,
  FileWarning,
  UserRound,
  Eye,
  EyeOff,
  Building2,
  X,
} from 'lucide-react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searched, setSearched] = useState(false)
  const [authMode, setAuthMode] = useState(() => window.location.hash === '#create-account' ? 'create' : 'signin')
  const [showPassword, setShowPassword] = useState(false)
  const [authMessage, setAuthMessage] = useState('')

  if (window.location.hash === '#account' || window.location.hash === '#create-account') {
    return <AuthPage initialMode={window.location.hash === '#create-account' ? 'create' : 'signin'} />
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearched(Boolean(query.trim()))
  }

  const handleAuthSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setAuthMessage(authMode === 'signin' ? 'Sign in details are ready to submit.' : 'Your account details are ready to submit.')
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Employee Verifier home">
          <span className="brand-mark"><ShieldCheck size={24} strokeWidth={2.5} /><i></i></span>
          <span>EMPLOYEE<span>VERIFIER</span></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#how-it-works">How it works</a>
          <a href="#services">Services</a>
          <a href="#support">Support</a>
          <a className="nav-cta" href="#search">Start a check <ArrowUpRight size={16} /></a>
        </div>
        <div className="nav-tools"><a className="account-button" href="#account" aria-label="Open account sign in" onClick={(event) => { event.preventDefault(); window.location.href = '#account' }}><UserRound size={19} /></a><button className="icon-button menu-button" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </nav>
      <div className={`drawer-backdrop ${menuOpen ? 'is-visible' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <aside className={`nav-drawer ${menuOpen ? 'is-open' : ''}`} aria-label="Site navigation">
        <div className="drawer-header"><span>Navigation</span><button className="icon-button" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X size={23} /></button></div>
        <a href="#top" onClick={() => setMenuOpen(false)}><Home size={19} /> Home <ArrowUpRight size={16} /></a>
        <a href="#search" onClick={() => setMenuOpen(false)}><Search size={19} /> Record search <ArrowUpRight size={16} /></a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}><FileCheck2 size={19} /> How it works <ArrowUpRight size={16} /></a>
        <a href="#what-we-check" onClick={() => setMenuOpen(false)}><BadgeCheck size={19} /> What we check <ArrowUpRight size={16} /></a>
        <a href="#services" onClick={() => setMenuOpen(false)}><BriefcaseBusiness size={19} /> Services <ArrowUpRight size={16} /></a>
        <a href="#legal-team" onClick={() => setMenuOpen(false)}><Scale size={19} /> Legal team <ArrowUpRight size={16} /></a>
        <a href="#complaint" onClick={() => setMenuOpen(false)}><FileWarning size={19} /> Register complaint <ArrowUpRight size={16} /></a>
        <a href="#inquiry" onClick={() => setMenuOpen(false)}><HelpCircle size={19} /> Enquire <ArrowUpRight size={16} /></a>
        <a href="#faq" onClick={() => setMenuOpen(false)}><Headphones size={19} /> FAQ &amp; help <ArrowUpRight size={16} /></a>
        <a href="#support" onClick={() => setMenuOpen(false)}><MessageCircle size={19} /> Contact <ArrowUpRight size={16} /></a>
      </aside>

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
            <div className="signal-meta"><span className="verified-seal"><Check size={14} /> Identity matched</span><span>Updated now</span></div>
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

      <section className="services shell" id="services"><div className="section-kicker">03 / Built for real life</div><div className="services-head"><h2>Check the details<br /><em>that matter.</em></h2><Sparkles size={32} /></div><div className="service-list"><a href="#search"><span>01</span><IdCard className="service-icon" size={23} /><strong>Employee verification</strong><small>Background and employment records</small><ArrowUpRight /></a><a href="#search"><span>02</span><Home className="service-icon" size={23} /><strong>Domestic staff checks</strong><small>Confidence for the people closest to home</small><ArrowUpRight /></a><a href="#search"><span>03</span><Building2 className="service-icon" size={23} /><strong>Company reviews</strong><small>Workplace conduct and ratings</small><ArrowUpRight /></a></div></section>

      <section className="closing shell" id="support"><div><div className="eyebrow"><span className="pulse"></span> Here when the answer matters</div><h2>Good decisions<br /><em>feel different.</em></h2></div><a className="button button-lime" href="mailto:info@employeeverifier.com">Talk to our team <ArrowUpRight size={18} /></a></section>
      <footer className="footer shell">
        <div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><ShieldCheck size={20} /><i></i></span><span>EMPLOYEE<span>VERIFIER</span></span></a><p>Identity and employment verification,<br />public records, and legal support in one place.</p></div>
        <div className="footer-contact"><strong>Contact support</strong><a href="https://wa.me/447777793786" target="_blank" rel="noreferrer"><MessageCircle size={16} /> +44 7777 793786</a><a href="mailto:info@employeeverifier.com"><Mail size={16} /> info@employeeverifier.com</a></div>
        <div className="footer-explore"><strong>Explore</strong><a href="#how-it-works">How it works</a><a href="#services">Services</a><a href="#support">Support</a></div>
        <div className="footer-bottom"><span>© 2026 Employee Verifier. All rights reserved.</span><span>Verification • Records • Legal advisory</span></div>
      </footer>
      <a className="whatsapp-button" href="https://wa.me/447777793786" target="_blank" rel="noreferrer" aria-label="Contact Employee Verifier on WhatsApp"><MessageCircle size={25} /></a>
    </main>
  )
}

function AuthPage({ initialMode }) {
  const [authMode, setAuthMode] = useState(initialMode)
  const [showPassword, setShowPassword] = useState(false)
  const [authMessage, setAuthMessage] = useState('')

  const handleAuthSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setAuthMessage(authMode === 'signin' ? 'Sign in details are ready to submit.' : 'Your account details are ready to submit.')
  }

  const switchMode = (mode) => {
    setAuthMode(mode)
    setAuthMessage('')
    window.location.hash = mode === 'create' ? 'create-account' : 'account'
  }

  return (
    <main className="auth-page">
      <header className="auth-nav"><a className="brand" href="/#top"><span className="brand-mark"><ShieldCheck size={24} strokeWidth={2.5} /><i></i></span><span>EMPLOYEE<span>VERIFIER</span></span></a><a className="back-link" href="/#top"><ArrowUpRight size={16} /> Back to website</a></header>
      <section className="auth-section shell">
        <div className="auth-intro"><div className="eyebrow"><span className="pulse"></span> Secure member access</div><h2>{authMode === 'signin' ? <>Welcome<br /><em>back.</em></> : <>Start your<br /><em>verification.</em></>}</h2><p>{authMode === 'signin' ? 'Sign in to access your Employee Verifier workspace.' : 'Create an account to manage checks and verification requests.'}</p><div className="auth-points"><span><ShieldCheck size={17} /> Private by design</span><span><Check size={17} /> Verified workflows</span></div></div>
        <div className="auth-card">
          <div className="auth-tabs"><button className={authMode === 'signin' ? 'active' : ''} type="button" onClick={() => switchMode('signin')}>Sign in</button><button className={authMode === 'create' ? 'active' : ''} type="button" onClick={() => switchMode('create')}>Create account</button></div>
          <form onSubmit={handleAuthSubmit}>
            {authMode === 'create' && <label>Full name<input name="fullName" type="text" placeholder="Your full name" required /></label>}
            <label>Email or phone number<input name="identifier" type="text" placeholder="you@example.com or 03001234567" required /></label>
            {authMode === 'create' && <label>WhatsApp number<input name="whatsapp" type="tel" placeholder="03001234567" required /></label>}
            <label className="password-field">Password<div><input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" minLength="3" required /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
            {authMode === 'signin' && <label className="remember"><input type="checkbox" /> Remember me for 7 days</label>}
            {authMode === 'create' && <p className="terms-note">By creating an account, you agree to our Terms of Use. We will use your WhatsApp number for verification.</p>}
            <button className="auth-submit" type="submit">{authMode === 'signin' ? 'Sign in' : 'Create account'} <ArrowUpRight size={17} /></button>
            {authMessage && <div className="auth-message"><Check size={16} /> {authMessage}</div>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default App
