import { useState } from 'react'
import {
  ArrowUpRight,
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronUp,
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
  Phone,
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
  Lock,
  FileText,
  AlertCircle,
  Users,
  Award,
  UserCheck
} from 'lucide-react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searched, setSearched] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeTab, setActiveTab] = useState('inquiry')

  if (window.location.pathname === '/auth/login' || window.location.pathname === '/auth/register') {
    return <AuthPage initialMode={window.location.pathname === '/auth/register' ? 'create' : 'signin'} />
  }

  const handleSearch = (event) => {
    event.preventDefault()
    if (!query.trim()) return
    setSearched(true)
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How long does an employee verification check take?",
      answer: "Standard CNIC record checks return instant preliminary signals. Full detailed employment and background verification reports take between 24 to 48 hours."
    },
    {
      question: "Is the CNIC search process legal and confidential?",
      answer: "Yes. All searches and record requests comply with local data protection regulations. Searches are encrypted, confidential, and conducted with strict privacy controls."
    },
    {
      question: "What information is included in a verification report?",
      answer: "Reports include CNIC identity matching, previous employment history, verified employer feedback, public record signals, and legal/police compliance status."
    },
    {
      question: "How do I register a complaint or dispute a record?",
      answer: "You can submit a direct complaint through our online Complaint Portal below or reach our legal support team via WhatsApp for priority handling."
    }
  ]

  return (
    <main>
      {/* Top Helpline Utility Header */}
      <div className="top-bar">
        <div className="shell top-bar-content">
          <div className="helpline-info">
            <span className="helpline-label">HELPLINE — MON TO SAT, 9AM-6PM</span>
            <a href="tel:+447777793786" className="helpline-item">
              <Phone size={14} /> +44 7777 793786
            </a>
            <a href="mailto:info@employeeverifier.com" className="helpline-item">
              <Mail size={14} /> info@employeeverifier.com
            </a>
          </div>
          <div className="top-bar-right">
            <a href="#support" className="top-link">Contact us</a>
            <a href="#legal-team" className="top-link">Legal support</a>
            <a href="/auth/login" className="top-login-btn">
              <UserRound size={15} /> Login
            </a>
            <a href="https://wa.me/447777793786" target="_blank" rel="noreferrer" className="top-wa-btn" aria-label="Contact on WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Employee Verifier home">
          <span className="brand-mark">
            <ShieldCheck size={24} strokeWidth={2.5} />
            <Fingerprint size={16} className="brand-fingerprint" />
          </span>
          <span className="brand-text">
            EMPLOYEE<span className="brand-highlight">VERIFIER</span>
          </span>
        </a>

        {/* Exact Desktop Navigation Links matching the red screenshot */}
        <div className="nav-links desktop-only">
          <a href="#top">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#services">Services</a>
          <a href="#complaints">Complaints</a>
          <a href="#legal-team">Legal Team</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#support">Contact</a>
        </div>

        <div className="nav-tools">
          <a className="nav-cta desktop-only" href="#search">
            Start a check <ArrowUpRight size={16} />
          </a>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer Navigation */}
      <div
        className={`drawer-backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <aside className={`nav-drawer ${menuOpen ? 'is-open' : ''}`} aria-label="Site navigation">
        <div className="drawer-header">
          <div className="brand drawer-brand">
            <span className="brand-mark">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </span>
            <span>EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
          </div>
          <button className="icon-button close-drawer-btn" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <div className="drawer-body">
          <a href="#top" onClick={() => setMenuOpen(false)}>
            <Home size={19} /> Home <ArrowUpRight size={16} />
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            <FileCheck2 size={19} /> How it works <ArrowUpRight size={16} />
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            <BriefcaseBusiness size={19} /> Services <ArrowUpRight size={16} />
          </a>
          <a href="#complaints" onClick={() => setMenuOpen(false)}>
            <FileWarning size={19} /> Complaints <ArrowUpRight size={16} />
          </a>
          <a href="#legal-team" onClick={() => setMenuOpen(false)}>
            <Scale size={19} /> Legal Team <ArrowUpRight size={16} />
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <Users size={19} /> About <ArrowUpRight size={16} />
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            <HelpCircle size={19} /> FAQ <ArrowUpRight size={16} />
          </a>
          <a href="#support" onClick={() => setMenuOpen(false)}>
            <MessageCircle size={19} /> Contact <ArrowUpRight size={16} />
          </a>
          <div className="drawer-actions">
            <a className="button button-teal drawer-cta" href="#search" onClick={() => setMenuOpen(false)}>
              Verify a Person <ArrowUpRight size={17} />
            </a>
            <a className="button button-outline drawer-login" href="/auth/login">
              <UserRound size={17} /> Member Login
            </a>
          </div>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse"></span> Trusted Verification &amp; Records
          </div>
          <h1>Know who<br /><em>you’re trusting</em></h1>
          <p className="hero-intro">
            Instant background, identity, and employment checks for employees, tenants, and business partners.
          </p>
          
          {/* 4 Feature Badges / Pills */}
          <div className="hero-badges">
            <span className="hero-badge-pill">
              <Fingerprint size={15} /> Identity Check
            </span>
            <span className="hero-badge-pill">
              <BriefcaseBusiness size={15} /> Employment History
            </span>
            <span className="hero-badge-pill">
              <Gavel size={15} /> Criminal Record Check
            </span>
            <span className="hero-badge-pill">
              <BadgeCheck size={15} /> Reference Verification
            </span>
          </div>

          <div className="hero-actions">
            <a className="button button-teal" href="#search">
              Verify a person <ArrowUpRight size={17} />
            </a>
            {/* Social Proof Line */}
            <div className="hero-social-proof">
              <Award size={16} /> Trusted by <strong>500+ companies</strong> across the UK
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Verification status illustration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="signal-card">
            <div className="signal-top">
              <span>VERIFICATION SIGNAL</span>
              <span className="live-dot">LIVE</span>
            </div>
            <div className="signal-score">
              <strong>94</strong>
              <span>/ 100<br /><small>TRUST INDEX</small></span>
            </div>
            <div className="signal-line"><span style={{ width: '94%' }}></span></div>
            <div className="signal-meta">
              <span className="verified-seal"><Check size={14} /> Identity matched</span>
              <span>Updated now</span>
            </div>
          </div>
          <div className="floating-tag tag-one">
            <ShieldCheck size={17} /> Verified record
          </div>
          <div className="floating-tag tag-two">
            <span>+1,240</span> checks this month
          </div>
        </div>
      </section>

      {/* "Who is this for?" Section */}
      <section className="who-is-this-for shell">
        <div className="section-kicker">Tailored Screening Solutions</div>
        <div className="section-title">
          <h2>Who is this for</h2>
          <p>Clear, actionable background signals for every hiring and decision scenario.</p>
        </div>
        <div className="who-grid">
          <div className="who-card">
            <div className="who-icon"><Users size={26} /></div>
            <h3>For Employers</h3>
            <span className="who-tagline">Hire with confidence</span>
            <p>Verify candidate employment history, job duration, and supervisory references before making an offer.</p>
          </div>
          <div className="who-card">
            <div className="who-icon"><Home size={26} /></div>
            <h3>For Landlords</h3>
            <span className="who-tagline">Verify tenants before you rent</span>
            <p>Screen prospective domestic staff and tenants for identity authentication and public signals.</p>
          </div>
          <div className="who-card">
            <div className="who-icon"><Building2 size={26} /></div>
            <h3>For Businesses</h3>
            <span className="who-tagline">Vet partners and vendors</span>
            <p>Audit corporate track records, partner credentials, and service vendors to protect reputation.</p>
          </div>
        </div>
      </section>

      {/* "How it works" 3-Step Horizontal Strip */}
      <section className="how-it-works-strip shell" id="how-it-works">
        <div className="section-kicker">Simple 3-Step Process</div>
        <div className="section-title">
          <h2>How it works</h2>
          <p>Move from a basic search to a verified trust report in three clear steps.</p>
        </div>
        <div className="steps-horizontal">
          <div className="step-item">
            <div className="step-circle">1</div>
            <div className="step-content">
              <h3>Submit details</h3>
              <p>Enter the 13-digit CNIC, full name, or candidate verification request details.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step-item">
            <div className="step-circle">2</div>
            <div className="step-content">
              <h3>We verify</h3>
              <p>Our platform audits databases, employment tenure, and legal record signals.</p>
            </div>
          </div>
          <div className="step-connector"></div>
          <div className="step-item">
            <div className="step-circle">3</div>
            <div className="step-content">
              <h3>Get your trust report</h3>
              <p>Receive an encrypted, verified trust signal score with detailed background insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent CNIC Search Panel & Quick Actions */}
      <section className="search-panel shell" id="search">
        <div className="section-kicker">Record Lookup</div>
        <div className="search-heading">
          <h2>Check Records<br /><span>Verify People</span></h2>
          <p>Know Before You Decide. Look beyond a name and find the verified history behind it.</p>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <Search size={23} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter CNIC number (e.g. 4210112345671)"
            aria-label="CNIC number"
          />
          <button type="submit">
            Search record <ArrowUpRight size={17} />
          </button>
        </form>
        {searched && (
          <div className="search-result">
            <Check size={18} /> Search request initiated for CNIC: <strong>{query}</strong>. Connect your records database API to load report details.
          </div>
        )}
        <div className="search-foot">
          <span><ShieldCheck size={16} /> Privacy-First Lookup</span>
          <span><Lock size={15} /> Encrypted & Confidential</span>
          <span><Sparkles size={15} /> Available 24 / 7</span>
        </div>

        {/* Quick Action Cards */}
        <div className="quick-actions-grid">
          <div className="quick-card">
            <div className="qc-icon"><FileText size={24} /></div>
            <div className="qc-info">
              <h3>Request Detailed Inquiry</h3>
              <p>Need comprehensive background checks, document verification, or reference audits?</p>
            </div>
            <a href="#complaints" className="qc-btn" onClick={() => setActiveTab('inquiry')}>
              Submit Inquiry <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="quick-card">
            <div className="qc-icon alert-icon"><FileWarning size={24} /></div>
            <div className="qc-info">
              <h3>Register Complaint / Feedback</h3>
              <p>Report fraudulent records, misconduct, or submit official verification grievances.</p>
            </div>
            <a href="#complaints" className="qc-btn qc-btn-alert" onClick={() => setActiveTab('complaint')}>
              Register Complaint <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services shell" id="services">
        <div className="section-kicker">Services &amp; Solutions</div>
        <div className="services-head">
          <h2>Check the details<br /><em>that matter</em></h2>
          <Sparkles size={32} />
        </div>
        <div className="service-list">
          <a href="#search">
            <IdCard className="service-icon" size={23} />
            <strong>Employee Verification</strong>
            <small>Background history, work duration & employment records</small>
            <ArrowUpRight />
          </a>
          <a href="#search">
            <Home className="service-icon" size={23} />
            <strong>Domestic Staff Checks</strong>
            <small>Confidence and safety for home drivers, maids, and guards</small>
            <ArrowUpRight />
          </a>
          <a href="#search">
            <Building2 className="service-icon" size={23} />
            <strong>Company Reviews</strong>
            <small>Workplace conduct ratings, corporate track record & reviews</small>
            <ArrowUpRight />
          </a>
          <a href="#search">
            <Gavel className="service-icon" size={23} />
            <strong>Legal & Criminal Clearance</strong>
            <small>Public record signals, police verification & court checks</small>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section shell" id="about">
        <div className="section-kicker">About Employee Verifier</div>
        <div className="section-title">
          <h2>Empowering Trust Through<br /><em>Verified Data</em></h2>
          <p>We build transparent identity signals for employers, businesses, and households.</p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <ShieldCheck size={32} />
            <h3>Verified Standards</h3>
            <p>Multi-source verification ensuring accurate public records and employment history.</p>
          </div>
          <div className="about-card">
            <Lock size={32} />
            <h3>Privacy First</h3>
            <p>Strict confidentiality and secure data processing compliant with regulatory standards.</p>
          </div>
          <div className="about-card">
            <Award size={32} />
            <h3>Legal Advisory</h3>
            <p>Dedicated legal team offering guidance on disputes, background checks, and compliance.</p>
          </div>
        </div>
      </section>

      {/* Complaint & Detailed Inquiry Submission Section */}
      <section className="complaint-section shell" id="complaints">
        <div className="section-kicker">Action Center</div>
        <div className="section-title">
          <h2>Submit an Inquiry<br /><em>or Complaint</em></h2>
          <p>We take accuracy and integrity seriously. Get official assistance from our team.</p>
        </div>
        <div className="action-box">
          <div className="action-tabs">
            <button
              className={activeTab === 'inquiry' ? 'active' : ''}
              onClick={() => setActiveTab('inquiry')}
            >
              <HelpCircle size={18} /> Request Detailed Inquiry
            </button>
            <button
              className={activeTab === 'complaint' ? 'active' : ''}
              onClick={() => setActiveTab('complaint')}
            >
              <AlertCircle size={18} /> Register Complaint
            </button>
          </div>
          <form className="action-form" onSubmit={(e) => { e.preventDefault(); alert(activeTab === 'inquiry' ? 'Inquiry submitted successfully!' : 'Complaint registered successfully!'); }}>
            <div className="form-grid">
              <label>
                Full Name
                <input type="text" placeholder="Enter your full name" required />
              </label>
              <label>
                Email Address
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Phone / WhatsApp Number
                <input type="tel" placeholder="0300 1234567" required />
              </label>
              <label>
                Target CNIC Number
                <input type="text" placeholder="13-digit CNIC (Optional)" />
              </label>
            </div>
            <label className="full-width">
              {activeTab === 'inquiry' ? 'Inquiry Details' : 'Complaint Details'}
              <textarea
                rows="4"
                placeholder={activeTab === 'inquiry' ? 'Describe the background check requirements or specific records you wish to verify...' : 'Describe the dispute, misconduct, or false record issue in detail...'}
                required
              ></textarea>
            </label>
            <button type="submit" className="button button-teal form-submit-btn">
              {activeTab === 'inquiry' ? 'Submit Inquiry Request' : 'File Official Complaint'} <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section className="faq-section shell" id="faq">
        <div className="section-kicker">Help &amp; FAQs</div>
        <div className="section-title">
          <h2>Frequently Asked<br /><em>Questions</em></h2>
          <p>Everything you need to know about Employee Verifier procedures.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${activeFaq === idx ? 'is-open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span>{faq.question}</span>
                {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {activeFaq === idx && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing shell" id="support">
        <div>
          <div className="eyebrow"><span className="pulse"></span> Here when accuracy matters</div>
          <h2>Good decisions<br /><em>feel different</em></h2>
        </div>
        <a className="button button-teal" href="https://wa.me/447777793786" target="_blank" rel="noreferrer">
          Talk to our legal team <ArrowUpRight size={18} />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer shell">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark"><ShieldCheck size={20} /><Fingerprint size={14} className="brand-fingerprint" /></span>
            <span className="brand-text">EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
          </a>
          <p>Identity and employment verification,<br />public records, and legal support in one place.</p>
        </div>
        <div className="footer-contact">
          <strong>Contact support</strong>
          <a href="https://wa.me/447777793786" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> +44 7777 793786
          </a>
          <a href="mailto:info@employeeverifier.com">
            <Mail size={16} /> info@employeeverifier.com
          </a>
        </div>
        <div className="footer-explore">
          <strong>Explore</strong>
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#complaints">Complaints</a>
          <a href="#legal-team">Legal Team</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Employee Verifier. All rights reserved.</span>
          <span>Verification • Records • Legal Advisory</span>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        className="whatsapp-button"
        href="https://wa.me/447777793786"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Employee Verifier on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </main>
  )
}

/* Centered & Attractive Sign In / Create Account Page */
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
    window.location.assign(mode === 'create' ? '/auth/register' : '/auth/login')
  }

  return (
    <main className="auth-page">
      <header className="auth-nav">
        <a className="brand" href="/">
          <span className="brand-mark">
            <ShieldCheck size={24} strokeWidth={2.5} />
            <Fingerprint size={16} className="brand-fingerprint" />
          </span>
          <span className="brand-text">EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
        </a>
        <a className="back-link" href="/">
          <ArrowLeft size={19} /> Back to website
        </a>
      </header>
      
      {/* Centered Auth Container */}
      <section className="auth-centered-wrapper">
        <div className="auth-card-centered">
          <div className="auth-header-brand">
            <div className="auth-badge-icon">
              <ShieldCheck size={28} />
            </div>
            <h2>EMPLOYEE<span className="brand-highlight">VERIFIER</span></h2>
            <p>Member Access Portal</p>
          </div>

          <div className="auth-tabs-pill">
            <button
              className={authMode === 'signin' ? 'active' : ''}
              type="button"
              onClick={() => switchMode('signin')}
            >
              Sign in
            </button>
            <button
              className={authMode === 'create' ? 'active' : ''}
              type="button"
              onClick={() => switchMode('create')}
            >
              Create account
            </button>
          </div>

          <form onSubmit={handleAuthSubmit}>
            {authMode === 'create' && (
              <label>
                Full name
                <input name="fullName" type="text" placeholder="Your full name" required />
              </label>
            )}
            <label>
              Email or phone number
              <input name="identifier" type="text" placeholder="you@example.com or 03001234567" required />
            </label>
            {authMode === 'create' && (
              <label>
                WhatsApp number
                <input name="whatsapp" type="tel" placeholder="03001234567" required />
              </label>
            )}
            <label className="password-field">
              Password
              <div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  minLength="3"
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>
            {authMode === 'signin' && (
              <label className="remember">
                <input type="checkbox" /> Remember me for 7 days
              </label>
            )}
            {authMode === 'create' && (
              <p className="terms-note">
                By creating an account, you agree to our Terms of Use. We will use your WhatsApp number for verification.
              </p>
            )}
            <button className="auth-submit button-teal" type="submit">
              {authMode === 'signin' ? 'Sign in' : 'Create account'} <ArrowUpRight size={17} />
            </button>
            {authMessage && (
              <div className="auth-message">
                <Check size={16} /> {authMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default App
