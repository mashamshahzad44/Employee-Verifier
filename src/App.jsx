import { useState, useEffect } from 'react'
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
  Send,
  MessageSquare,
  ArrowRight,
  UserCheck,
  Heart
} from 'lucide-react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searched, setSearched] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeTab, setActiveTab] = useState('inquiry')
  const [viewMode, setViewMode] = useState(() => {
    const path = window.location.pathname
    if (path === '/complaint' || path === '/home/Complaint') return 'complaint'
    if (path === '/inquiry' || path === '/home/HowItWorks') return 'inquiry'
    if (path === '/services' || path === '/home/Services') return 'services'
    return 'home'
  })

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/complaint' || path === '/home/Complaint') setViewMode('complaint')
      else if (path === '/inquiry' || path === '/home/HowItWorks') setViewMode('inquiry')
      else if (path === '/services' || path === '/home/Services') setViewMode('services')
      else setViewMode('home')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (mode, path) => {
    setViewMode(mode)
    window.history.pushState({}, '', path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (window.location.pathname === '/auth/login' || window.location.pathname === '/auth/register') {
    return <AuthPage initialMode={window.location.pathname === '/auth/register' ? 'create' : 'signin'} />
  }

  if (viewMode === 'complaint') {
    return <ComplaintProcessPage onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />
  }

  if (viewMode === 'inquiry') {
    return <InquiryProcessPage onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />
  }

  if (viewMode === 'services') {
    return <ServicesPage onBack={() => navigateTo('home', '/')} navigateTo={navigateTo} />
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
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); navigateTo('home', '/'); }} aria-label="Employee Verifier home">
          <span className="brand-mark">
            <ShieldCheck size={24} strokeWidth={2.5} />
            <Fingerprint size={16} className="brand-fingerprint" />
          </span>
          <span className="brand-text">
            EMPLOYEE<span className="brand-highlight">VERIFIER</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only">
          <a href="#top" onClick={() => navigateTo('home', '/')}>Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services', '/services'); }}>Services</a>
          <a href="/complaint" onClick={(e) => { e.preventDefault(); navigateTo('complaint', '/complaint'); }}>Complaints</a>
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
          <a href="#top" onClick={() => { setMenuOpen(false); navigateTo('home', '/'); }}>
            <Home size={19} /> Home <ArrowUpRight size={16} />
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            <FileCheck2 size={19} /> How it works <ArrowUpRight size={16} />
          </a>
          <a href="/services" onClick={() => { setMenuOpen(false); navigateTo('services', '/services'); }}>
            <BriefcaseBusiness size={19} /> Services <ArrowUpRight size={16} />
          </a>
          <a href="/complaint" onClick={() => { setMenuOpen(false); navigateTo('complaint', '/complaint'); }}>
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

      {/* Prominent CNIC Search Panel */}
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
      </section>

      {/* How It Works Section (Placed AFTER Record Lookup) */}
      <section className="how-it-works-section shell" id="how-it-works">
        <div className="section-kicker">A Clear Process</div>
        <div className="section-title">
          <h2>How it works</h2>
          <p>Move from a basic identity search to the right next action in three clear steps.</p>
        </div>
        
        {/* 3 Step Cards */}
        <div className="process-cards-grid">
          <div className="process-card">
            <div className="process-badge">1</div>
            <div className="process-icon-box"><IdCard size={26} /></div>
            <h3>Search by CNIC</h3>
            <p>Enter the 13-digit CNIC, or use advanced search when the CNIC is unavailable.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">2</div>
            <div className="process-icon-box"><FileCheck2 size={26} /></div>
            <h3>Review information</h3>
            <p>Read the available records, complaints and feedback in context.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">3</div>
            <div className="process-icon-box"><ArrowRight size={26} /></div>
            <h3>Choose the next step</h3>
            <p>Continue with an inquiry, share feedback, or request legal support.</p>
          </div>
        </div>

        {/* 2 Process Action Cards Below How It Works */}
        <div className="process-action-grid">
          <div className="process-action-card">
            <span className="pac-eyebrow">SHARE YOUR EXPERIENCE</span>
            <h3>Register a complaint or feedback</h3>
            <p>Submit positive or negative feedback about a person or service provider.</p>
            <button className="pac-btn pac-btn-red" onClick={() => navigateTo('complaint', '/complaint')}>
              View complaint process <ArrowRight size={17} />
            </button>
          </div>

          <div className="process-action-card">
            <span className="pac-eyebrow">NEED MORE DETAILS?</span>
            <h3>Request a detailed inquiry</h3>
            <p>Ask our team to review the information and context you provide.</p>
            <button className="pac-btn pac-btn-teal" onClick={() => navigateTo('inquiry', '/inquiry')}>
              View inquiry process <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services shell" id="services">
        <div className="section-kicker">Services &amp; Solutions</div>
        <div className="services-head">
          <h2>Check the details<br /><em>that matter</em></h2>
          <button className="button button-teal" onClick={() => navigateTo('services', '/services')}>
            Explore All Services <ArrowRight size={17} />
          </button>
        </div>
        <div className="service-list">
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services', '/services'); }}>
            <IdCard className="service-icon" size={23} />
            <strong>Employee Verification</strong>
            <small>Background history, work duration & employment records</small>
            <ArrowUpRight />
          </a>
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services', '/services'); }}>
            <Home className="service-icon" size={23} />
            <strong>Domestic Staff Checks</strong>
            <small>Confidence and safety for home drivers, maids, and guards</small>
            <ArrowUpRight />
          </a>
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services', '/services'); }}>
            <Building2 className="service-icon" size={23} />
            <strong>Company Reviews</strong>
            <small>Workplace conduct ratings, corporate track record & reviews</small>
            <ArrowUpRight />
          </a>
          <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo('services', '/services'); }}>
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

      {/* Rich Unified Footer */}
      <FooterNav navigateTo={navigateTo} />

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

/* Dedicated Services Page View (Matching uploaded screenshots 2, 3, 4, 5) */
function ServicesPage({ onBack, navigateTo }) {
  return (
    <main className="process-page">
      {/* Top Helpline Header */}
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
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="top-link">Home</a>
            <a href="/auth/login" className="top-login-btn">
              <UserRound size={15} /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav shell">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <span className="brand-mark"><ShieldCheck size={24} strokeWidth={2.5} /><Fingerprint size={16} className="brand-fingerprint" /></span>
          <span className="brand-text">EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
        </a>
        <button className="back-link-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to main site
        </button>
      </nav>

      {/* Services Hero Banner */}
      <section className="services-hero shell">
        <div className="eyebrow"><span className="pulse"></span> WHAT WE OFFER</div>
        <h1>Our Services</h1>
        <p className="process-intro">
          Every feature is built for verification. Open a service to use its dedicated workflow — from a free basic search to a confidential inquiry and professional legal support.
        </p>
        <div className="services-hero-btns">
          <a href="#all-services" className="button button-teal">Search records <ArrowRight size={17} /></a>
          <a href="#services-journey" className="button button-outline">See how it works <ChevronDown size={17} /></a>
        </div>
      </section>

      {/* 8 Creative Service Cards Grid (Matching Screenshots 3 & 4) */}
      <section className="services-grid-section shell" id="all-services">
        <div className="creative-services-grid">
          <div className="cs-card">
            <div className="cs-icon-box"><IdCard size={28} /></div>
            <h3>Employee/CNIC Verification</h3>
            <p>Search verified employee records securely using a 13-digit CNIC.</p>
            <a href="/#search" onClick={(e) => { e.preventDefault(); navigateTo('home', '/#search'); }} className="cs-link">Start search <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><UserCheck size={28} /></div>
            <h3>Employee Details</h3>
            <p>View available identity and employment information in one place.</p>
            <a href="/inquiry" onClick={(e) => { e.preventDefault(); navigateTo('inquiry', '/inquiry'); }} className="cs-link">View details <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><Building2 size={28} /></div>
            <h3>Company Reviews</h3>
            <p>Access authentic company feedback attached to verified records.</p>
            <a href="/complaint" onClick={(e) => { e.preventDefault(); navigateTo('complaint', '/complaint'); }} className="cs-link">Check reviews <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><Lock size={28} /></div>
            <h3>Private Inquiries</h3>
            <p>Submit a confidential background-information request securely.</p>
            <a href="/inquiry" onClick={(e) => { e.preventDefault(); navigateTo('inquiry', '/inquiry'); }} className="cs-link">Request inquiry <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><Heart size={28} /></div>
            <h3>Marital Services</h3>
            <p>Request verification of marital status and related background records.</p>
            <a href="/inquiry" onClick={(e) => { e.preventDefault(); navigateTo('inquiry', '/inquiry'); }} className="cs-link">Request audit <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><Users size={28} /></div>
            <h3>Family &amp; Personal Checks</h3>
            <p>Check the background of domestic staff, tenants and personal contacts.</p>
            <a href="/inquiry" onClick={(e) => { e.preventDefault(); navigateTo('inquiry', '/inquiry'); }} className="cs-link">Check background <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><FileCheck2 size={28} /></div>
            <h3>Service Provider Review</h3>
            <p>Review records, ratings and feedback for a service provider before you hire.</p>
            <a href="/complaint" onClick={(e) => { e.preventDefault(); navigateTo('complaint', '/complaint'); }} className="cs-link">Review provider <ArrowRight size={15} /></a>
          </div>

          <div className="cs-card">
            <div className="cs-icon-box"><Scale size={28} /></div>
            <h3>Legal Team Support</h3>
            <p>Connect with experienced legal professionals for guidance.</p>
            <a href="/inquiry" onClick={(e) => { e.preventDefault(); navigateTo('inquiry', '/inquiry'); }} className="cs-link">Get legal support <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* 4-Stage Journey Strip (Matching Screenshot 5) */}
      <section className="services-journey-section shell" id="services-journey">
        <div className="section-kicker">HOW IT WORKS</div>
        <div className="section-title">
          <h2>From a search to the right next step</h2>
          <p>Every service supports a different stage of the same journey.</p>
        </div>
        
        <div className="journey-4grid">
          <div className="journey-card">
            <span className="journey-num">01</span>
            <div className="journey-icon"><Search size={24} /></div>
            <h3>Search</h3>
            <p>Enter a CNIC or use advanced search</p>
          </div>
          <div className="journey-card">
            <span className="journey-num">02</span>
            <div className="journey-icon"><FileCheck2 size={24} /></div>
            <h3>Review</h3>
            <p>Read available records and feedback in context</p>
          </div>
          <div className="journey-card">
            <span className="journey-num">03</span>
            <div className="journey-icon"><ArrowRight size={24} /></div>
            <h3>Act</h3>
            <p>Continue with an inquiry, complaint or legal route</p>
          </div>
          <div className="journey-card">
            <span className="journey-num">04</span>
            <div className="journey-icon"><ShieldCheck size={24} /></div>
            <h3>Resolve</h3>
            <p>Dispute or escalate a record where needed</p>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <FooterNav navigateTo={navigateTo} />
    </main>
  )
}

/* Dedicated Complaint Process Page View (Matching uploaded screenshots) */
function ComplaintProcessPage({ onBack, navigateTo }) {
  return (
    <main className="process-page">
      {/* Top Helpline Header */}
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
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="top-link">Home</a>
            <a href="/auth/login" className="top-login-btn">
              <UserRound size={15} /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav shell">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <span className="brand-mark"><ShieldCheck size={24} strokeWidth={2.5} /><Fingerprint size={16} className="brand-fingerprint" /></span>
          <span className="brand-text">EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
        </a>
        <button className="back-link-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to main site
        </button>
      </nav>

      {/* Complaint Process Banner */}
      <section className="process-hero shell">
        <div className="eyebrow"><span className="pulse"></span> COMPLAINTS &amp; FEEDBACK</div>
        <h1>Put your experience<br /><em>on record</em></h1>
        <p className="process-intro">
          Register positive or negative feedback about an individual or service provider you dealt with, in three clear steps.
        </p>
      </section>

      {/* 3 Step Cards */}
      <section className="process-steps-section shell">
        <div className="process-cards-grid">
          <div className="process-card">
            <div className="process-badge">1</div>
            <div className="process-icon-box"><IdCard size={26} /></div>
            <h3>Identify the subject</h3>
            <p>Name the individual or service provider accurately so the record attaches to the right profile.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">2</div>
            <div className="process-icon-box"><MessageSquare size={26} /></div>
            <h3>Describe what happened</h3>
            <p>Use clear, factual language and prepare any supporting information that may help the review.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">3</div>
            <div className="process-icon-box"><Send size={26} /></div>
            <h3>Submit and track</h3>
            <p>Sign in to submit, then return any time to your record to follow its progress.</p>
          </div>
        </div>
      </section>

      {/* Action Cards Grid */}
      <section className="process-action-section shell">
        <div className="process-action-grid">
          <div className="process-action-card">
            <span className="pac-eyebrow">READY TO SUBMIT?</span>
            <h3>Register a complaint or feedback</h3>
            <p>Submission requires an account so you can return to your record and track its progress.</p>
            <a href="/auth/login" className="pac-btn pac-btn-red">
              Sign in to continue <ArrowRight size={17} />
            </a>
          </div>

          <div className="process-action-card">
            <span className="pac-eyebrow">NEW HERE?</span>
            <h3>Create an account</h3>
            <p>Set up an account in a few minutes, then submit and manage your feedback securely.</p>
            <a href="/auth/register" className="pac-btn pac-btn-teal">
              Create an account <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="process-bottom-banner">
          <div>
            <span className="pac-eyebrow">START WITH THE INFORMATION AVAILABLE</span>
            <h2>Ready to put your experience on record?</h2>
          </div>
          <div className="pbb-actions">
            <a href="/auth/login" className="button button-teal">
              Sign in to continue <ArrowRight size={17} />
            </a>
            <button className="button button-outline" onClick={onBack}>
              Search records <Search size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Rich Footer Matching Screenshot 1 */}
      <FooterNav navigateTo={navigateTo} />
    </main>
  )
}

/* Dedicated Inquiry Process Page View */
function InquiryProcessPage({ onBack, navigateTo }) {
  return (
    <main className="process-page">
      {/* Top Helpline Header */}
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
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="top-link">Home</a>
            <a href="/auth/login" className="top-login-btn">
              <UserRound size={15} /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav shell">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <span className="brand-mark"><ShieldCheck size={24} strokeWidth={2.5} /><Fingerprint size={16} className="brand-fingerprint" /></span>
          <span className="brand-text">EMPLOYEE<span className="brand-highlight">VERIFIER</span></span>
        </a>
        <button className="back-link-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back to main site
        </button>
      </nav>

      {/* Inquiry Process Banner */}
      <section className="process-hero shell">
        <div className="eyebrow"><span className="pulse"></span> NEED MORE DETAILS?</div>
        <h1>Request a detailed<br /><em>verification inquiry</em></h1>
        <p className="process-intro">
          Ask our specialized team to audit background records, work history, and references in three clear steps.
        </p>
      </section>

      {/* 3 Step Cards */}
      <section className="process-steps-section shell">
        <div className="process-cards-grid">
          <div className="process-card">
            <div className="process-badge">1</div>
            <div className="process-icon-box"><IdCard size={26} /></div>
            <h3>Identify the target subject</h3>
            <p>Provide the 13-digit CNIC, full legal name, or job title of the employee/candidate to verify.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">2</div>
            <div className="process-icon-box"><BriefcaseBusiness size={26} /></div>
            <h3>Define background scope</h3>
            <p>Select required verification points including work tenure, supervisor audit, and legal clearance.</p>
          </div>
          <div className="process-card">
            <div className="process-badge">3</div>
            <div className="process-icon-box"><FileCheck2 size={26} /></div>
            <h3>Receive verified report</h3>
            <p>Get an official confidential report with trust signals and verified background insights within 24-48 hours.</p>
          </div>
        </div>
      </section>

      {/* Action Cards Grid */}
      <section className="process-action-section shell">
        <div className="process-action-grid">
          <div className="process-action-card">
            <span className="pac-eyebrow">READY TO AUDIT?</span>
            <h3>Submit a verification inquiry</h3>
            <p>Our verification team conducts multi-layered employer, police, and credential checks.</p>
            <a href="/auth/login" className="pac-btn pac-btn-teal">
              Sign in to request inquiry <ArrowRight size={17} />
            </a>
          </div>

          <div className="process-action-card">
            <span className="pac-eyebrow">NEW CLIENT?</span>
            <h3>Create an account</h3>
            <p>Create an account to submit candidate inquiries and track audit reports securely.</p>
            <a href="/auth/register" className="pac-btn pac-btn-teal">
              Create an account <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Rich Footer Matching Screenshot 1 */}
      <FooterNav navigateTo={navigateTo} />
    </main>
  )
}

/* Rich Unified Footer Component Matching Screenshot 1 */
function FooterNav({ navigateTo }) {
  return (
    <footer className="footer-rich shell">
      <div className="footer-top-banner">
        <h2>Need verification or legal support? <a href="tel:+447777793786" className="footer-phone-highlight">+44 7777 793786</a></h2>
      </div>

      <div className="footer-grid">
        <div className="footer-col-brand">
          <span className="footer-kicker">VERIFY BEFORE YOU DECIDE</span>
          <p className="footer-desc">Records, reputation and verification in one trusted place.</p>
          <a href="#search" onClick={(e) => { if (navigateTo) { e.preventDefault(); navigateTo('home', '/#search'); } }} className="footer-arrow-link">
            Search a record <ArrowRight size={15} />
          </a>
        </div>

        <div className="footer-col">
          <strong>Explore</strong>
          <a href="/" onClick={(e) => { if (navigateTo) { e.preventDefault(); navigateTo('home', '/'); } }}>Home</a>
          <a href="#how-it-works" onClick={(e) => { if (navigateTo) { navigateTo('home', '/#how-it-works'); } }}>How it works</a>
          <a href="/services" onClick={(e) => { if (navigateTo) { e.preventDefault(); navigateTo('services', '/services'); } }}>Services</a>
          <a href="#search" onClick={(e) => { if (navigateTo) { navigateTo('home', '/#search'); } }}>Search records</a>
        </div>

        <div className="footer-col">
          <strong>Get support</strong>
          <a href="/complaint" onClick={(e) => { if (navigateTo) { e.preventDefault(); navigateTo('complaint', '/complaint'); } }}>Register a complaint</a>
          <a href="/inquiry" onClick={(e) => { if (navigateTo) { e.preventDefault(); navigateTo('inquiry', '/inquiry'); } }}>Request an inquiry</a>
          <a href="#legal-team" onClick={(e) => { if (navigateTo) { navigateTo('home', '/#legal-team'); } }}>Legal support</a>
        </div>

        <div className="footer-col">
          <strong>Connect with us</strong>
          <a href="mailto:info@employeeverifier.com" className="footer-email-link">
            <Mail size={15} /> info@employeeverifier.com
          </a>
          <div className="footer-social-row">
            <a href="https://wa.me/447777793786" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fs-btn">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:info@employeeverifier.com" aria-label="Email" className="fs-btn">
              <Mail size={16} />
            </a>
            <a href="#top" aria-label="Security" className="fs-btn">
              <ShieldCheck size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div className="footer-legal-links">
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#support">Contact</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#disclaimer">Disclaimer</a>
        </div>
        <div className="footer-copyright">
          © 2026 Employee Verifier. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

/* Centered & Beautiful Auth Page */
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
