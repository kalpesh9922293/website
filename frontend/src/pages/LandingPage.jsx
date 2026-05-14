import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Pill,
  LineChart,
  CheckCircle2,
  Bell,
  Activity,
  Brain,
  FolderLock,
  Shield,
  Sparkles,
  Siren
} from 'lucide-react';
import logo from '../assets/logo.png';
import heartRateMockup from '../assets/heartrate_mockup.png';
import medicineMockup from '../assets/medicine_reminder_mockup.png';
import aiMockup from '../assets/claudy_ai_mockup.png';
import reportMockup from '../assets/report_store_mockup.png';
import emergencyMockup from '../assets/emergency_mode_mockup.png';
import '../styles/landing.css';

const REVIEWS = [
  {
    name: "Priya Sharma",
    city: "Mumbai, Maharashtra",
    avatar: "PS",
    rating: 5,
    date: "March 2026",
    review: "Ekdum mast app hai! Medicine reminders ne meri life badal di. Ab kabhi dose miss nahi hoti. Bahut easy to use hai aur design bhi kaafi sundar hai."
  },
  {
    name: "Rahul Verma",
    city: "New Delhi",
    avatar: "RV",
    rating: 5,
    date: "April 2026",
    review: "Heart rate monitor feature is amazing! Doctor ne bola tha apna BP track karo, yeh app perfect hai uske liye. AI health assistant bhi bohot helpful hai reports samjhane mein."
  },
  {
    name: "Ananya Iyer",
    city: "Bengaluru, Karnataka",
    avatar: "AI",
    rating: 5,
    date: "April 2026",
    review: "I uploaded my blood test reports and the AI explained everything in simple English. It's like having a doctor friend available 24/7. Highly recommend to everyone!"
  },
  {
    name: "Suresh Patel",
    city: "Ahmedabad, Gujarat",
    avatar: "SP",
    rating: 4,
    date: "February 2026",
    review: "Maro favourite health app chhe. Medicine reminder ane report store banne features superb chhe. Family na badhane install karavi didhu che. Khub sari app!"
  },
  {
    name: "Kavitha Reddy",
    city: "Hyderabad, Telangana",
    avatar: "KR",
    rating: 5,
    date: "March 2026",
    review: "My mother is diabetic and this app helps her track everything beautifully. The reminders work even without internet. Best health app I've used so far!"
  },
  {
    name: "Arjun Mehta",
    city: "Pune, Maharashtra",
    avatar: "AM",
    rating: 5,
    date: "April 2026",
    review: "Security aur privacy ke mamle mein full marks. Mera data safe hai aur app ek dum smooth chalta hai. Made in India with quality — proud feeling aati hai!"
  }
];

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const reviewsRef = useRef(null);

  const scrollToGetStarted = () => {
    document.getElementById('get-started-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  // Auto-scroll reviews carousel via requestAnimationFrame
  useEffect(() => {
    const el = reviewsRef.current;
    if (!el) return;
    let animId;
    let paused = false;

    const tick = () => {
      if (!paused) {
        // Seamless infinite loop: jump back by half when we reach the clone
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else {
          el.scrollLeft += 0.6;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend',   resume);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend',   resume);
    };
  }, []);


  const howItWorks = [
    {
      icon: User,
      title: "Create Profile",
      description: "Sign up in seconds and set up your personalized health profile."
    },
    {
      icon: Pill,
      title: "Add Medicines",
      description: "Log your medications or upload health reports for AI analysis."
    },
    {
      icon: LineChart,
      title: "Track & Grow",
      description: "Receive timely reminders and deeply personalized health insights."
    }
  ];

  const platformHighlights = [
    {
      icon: Bell,
      title: "Medication adherence",
      description: "Schedules, reminders, and history so every dose stays on track."
    },
    {
      icon: Activity,
      title: "Heart rate & vitals",
      description: "On-device checks with clear charts for day-to-day self-monitoring."
    },
    {
      icon: Brain,
      title: "Report intelligence",
      description: "Upload labs and prescriptions; get plain-language context you can act on."
    },
    {
      icon: FolderLock,
      title: "Private health vault",
      description: "One organized place for documents—ready when your clinician asks."
    },
    {
      icon: Shield,
      title: "Privacy-first",
      description: "Sensitive health data handled with transparency and security in mind."
    },
    {
      icon: Sparkles,
      title: "One unified app",
      description: "Reminders, vitals, AI explanations, records, and safety alerts—no tab-switching."
    },
    {
      icon: Siren,
      title: "Emergency mode",
      description: "Save up to three trusted contacts; activate to send a clear “I need help” message when it matters."
    }
  ];

  return (
    <div className="landing-page" id="top">
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="nav-content">
          <a href="#top" className="nav-brand" aria-label="Health Grow — top of page">
            <div className="nav-logo">
              <img src={logo} alt="" className="!rounded-[50px]" width={42} height={42} />
            </div>
            <span className="nav-wordmark">Health Grow</span>
          </a>
          <div className="nav-links bg-white/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none" id="nav-menu">
            <a href="#platform" className="nav-link">Product</a>
            <a href="#medicine" className="nav-link">Reminders</a>
            <a href="#heart-rate" className="nav-link">Heart rate</a>
            <a href="#ai-health" className="nav-link">AI</a>
            <a href="#report-store" className="nav-link">Reports</a>
            <a href="#emergency" className="nav-link">Emergency</a>
            <button type="button" onClick={scrollToGetStarted} className="btn-nav-cta">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <Sparkles size={15} strokeWidth={2.5} aria-hidden />
                Consumer health · India
              </div>
              <h1 className="hero-title text-navy">Your smart health companion</h1>
              <p className="hero-subtitle">
                Health Grow brings medication adherence, on-device heart-rate tracking, AI-assisted report understanding, and a secure document vault into one polished Android experience—built for Indian families and clinicians who need clarity, not clutter.
              </p>
              <a
                href="https://github.com/Kalpesh-Mina/website/releases/download/V3.00/Health-Grow.apk"
                className="btn-primary"
                style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}
              >
                Download APK
              </a>
              <div className="download-sticker">
                <span className="sticker-icon" aria-hidden>↓</span>
                <span className="sticker-text">Direct download · Android</span>
              </div>
              <div className="hero-trust-row" aria-label="Trust highlights">
                <span className="hero-trust-pill">Privacy-conscious design</span>
                <span className="hero-trust-pill">Made for real-world adherence</span>
                <span className="hero-trust-pill">AI grounded in your uploads</span>
              </div>

              {/* Download Stats Bar */}
              <div className="download-stats-bar">
                <div className="stats-divider"></div>
                <div className="stats-content">
                  <div className="stat-item">
                    <div className="stat-stars">
                      {'★★★★★'.split('').map((s, i) => (
                        <span key={i} className="star filled">{s}</span>
                      ))}
                    </div>
                    <span className="stat-label">4.8 / 5 Rating</span>
                  </div>
                  <div className="stat-separator">|</div>
                  <div className="stat-item">
                    <span className="stat-count">10,000+</span>
                    <span className="stat-label">Downloads</span>
                  </div>
                  <div className="stat-separator">|</div>
                  <div className="stat-item">
                    <span className="stat-count">500+</span>
                    <span className="stat-label">Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-video-wrap">
                <video
                  src={`${process.env.PUBLIC_URL}/Health Grow.mp4`}
                  className="hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  title="Health Grow app preview"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <div className="social-proof-banner">
        <div className="container">
          <span>Made in India</span>
          <span className="proof-dot" aria-hidden>·</span>
          <span>Privacy-first product principles</span>
          <span className="proof-dot" aria-hidden>·</span>
          <span>AI-assisted understanding of your health documents</span>
        </div>
      </div>

      {/* Product overview — scannable for reviewers */}
      <section id="platform" className="platform-section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-navy">What Health Grow delivers</h2>
            <p>
              A single consumer app that connects adherence, vitals, document intelligence, and storage—so users and care teams spend less time chasing information.
            </p>
          </div>
          <div className="platform-grid">
            {platformHighlights.map((item) => (
              <div key={item.title} className="platform-card">
                <div className="platform-card-icon">
                  <item.icon size={22} strokeWidth={2.25} aria-hidden />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian User Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="reviews-badge">Social proof</div>
            <h2 className="text-navy">Trusted by users across India</h2>
            <p>Early community feedback on adherence, vitals, and report clarity.</p>
          </div>

          {/* Reviews Track */}
          <div className="reviews-track" ref={reviewsRef}>
              {/* Original set */}
              {REVIEWS.map((review, idx) => (
                <div key={`a-${idx}`} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div className="reviewer-info">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <span className="reviewer-city">📍 {review.city}</span>
                    </div>
                    <div className="review-verified">✓ Verified</div>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`review-star ${i < review.rating ? 'filled' : 'empty'}`}>★</span>
                    ))}
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">"{review.review}"</p>
                </div>
              ))}
              {/* Cloned set for seamless loop */}
              {REVIEWS.map((review, idx) => (
                <div key={`b-${idx}`} className="review-card" aria-hidden="true">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div className="reviewer-info">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <span className="reviewer-city">📍 {review.city}</span>
                    </div>
                    <div className="review-verified">✓ Verified</div>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`review-star ${i < review.rating ? 'filled' : 'empty'}`}>★</span>
                    ))}
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">"{review.review}"</p>
                </div>
              ))}
          </div>
          {/* Overall Rating Summary */}
          <div className="rating-summary">
            <div className="rating-big-score">4.8</div>
            <div className="rating-summary-right">
              <div className="rating-stars-large">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="star-large filled">{s}</span>
                ))}
              </div>
              <p className="rating-summary-text">Based on <strong>500+ reviews</strong> from verified users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Medicine Reminders */}
      <section id="medicine" className="feature-section">
        <div className="container">
          <div className="feature-grid reverse">
            <div className="feature-image">
              <img src={medicineMockup} alt="Medicine Reminders" className="feature-mockup" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">Adherence</span>
              <h2 className="feature-title text-navy">Never miss a dose again</h2>
              <p className="feature-description">
                Smart reminders and schedules keep chronic-care routines on track—whether it is diabetes, hypertension, or short antibiotic courses.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Dose times with notifications tuned for daily habits</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Medication history for you and your care circle</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Minimal UI so the habit sticks, not the software</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Heart Rate Monitor (Dark Theme) */}
      <section id="heart-rate" className="feature-section feature-dark">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <span className="feature-tag">Vitals</span>
              <h2 className="feature-title">Monitor your heart, instantly</h2>
              <p className="feature-description">
                Check heart rate on compatible hardware with an experience designed for calm, repeated use—not novelty metrics.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Real-time readout with trend-friendly visuals</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Useful between clinic visits for self-awareness</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Complements—not replaces—professional diagnosis</li>
              </ul>
            </div>
            <div className="feature-image">
              <img src={heartRateMockup} alt="Heart Rate Monitor" className="feature-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: AI Health Assistant */}
      <section id="ai-health" className="feature-section bg-soft">
        <div className="container">
          <div className="feature-grid reverse">
            <div className="feature-image">
              <img src={aiMockup} alt="AI Health Assistant" className="feature-mockup" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">AI</span>
              <h2 className="feature-title text-navy">Meet your AI health copilot</h2>
              <p className="feature-description">
                Upload labs, prescriptions, and summaries; Health Grow helps translate dense medical language into clear takeaways you can discuss with a doctor.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Context tied to the documents you provide</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Explanations aimed at comprehension, not hype</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Designed as a second opinion on readability, not treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Report Store */}
      <section id="report-store" className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <span className="feature-tag">Records</span>
              <h2 className="feature-title text-navy">Secure medical records vault</h2>
              <p className="feature-description">
                Store prescriptions, lab PDFs, and discharge notes in one searchable vault—so the right file is seconds away during telehealth or in-person visits.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Organized storage instead of chat attachments</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Quick retrieval when clinicians request prior results</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Built around user control of sensitive documents</li>
              </ul>
            </div>
            <div className="feature-image">
              <img src={reportMockup} alt="Report Store" className="feature-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Emergency mode */}
      <section id="emergency" className="feature-section feature-section-emergency bg-soft">
        <div className="container">
          <div className="feature-grid reverse">
            <div className="feature-image">
              <img src={emergencyMockup} alt="Health Grow emergency mode screen showing trusted contacts and help alert" className="feature-mockup" />
            </div>
            <div className="feature-content">
              <span className="feature-tag">Safety</span>
              <h2 className="feature-title text-navy">Emergency mode — help one tap away</h2>
              <p className="feature-description">
                Add up to three trusted people—family, friends, or a caregiver. When you are in distress, turn on Emergency mode and Health Grow sends them a message that you need help, so someone who knows you can respond quickly.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Up to three saved emergency contacts</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> One activation to notify every contact at once</li>
                <li><CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Clear alert text so recipients know it is you asking for support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-strip" aria-labelledby="mission-heading">
        <div className="container">
          <p id="mission-heading">
            <strong>Mission:</strong> reduce friction between Indian patients, their medications, their vitals, and their paperwork—and give people a simple way to reach trusted contacts in an emergency—using thoughtful software and AI where it genuinely helps, while respecting privacy and clinical boundaries.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-navy">How It Works</h2>
            <p>Simple. Clean. Easy.</p>
          </div>

          <div className="steps-grid">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-icon-wrapper">
                  <step.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started-form" className="final-cta-section">
        <div className="container">
          {submitted ? (
            <div className="cta-success">
              <CheckCircle2 size={56} color="#2dd4bf" style={{ margin: '0 auto 1.25rem', display: 'block' }} aria-hidden />
              <h2>Thanks — you are on the list</h2>
              <p>We will keep you posted on Health Grow releases and program updates.</p>
            </div>
          ) : (
            <div className="cta-inner">
              <h2>Stay in the loop</h2>
              <p>
                Leave your email for product updates, pilot partnerships, or investor decks—we read every message.
              </p>

              <form onSubmit={handleEmailSubmit} className="cta-form">
                <input
                  type="email"
                  className="cta-email"
                  placeholder="Work or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Notify me
                </button>
              </form>

              <div className="cta-checks">
                <div>
                  <CheckCircle2 size={18} strokeWidth={2.5} aria-hidden />
                  No spam
                </div>
                <div>
                  <CheckCircle2 size={18} strokeWidth={2.5} aria-hidden />
                  Unsubscribe anytime
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={logo} alt="" className="footer-logo" width={40} height={40} />
              <p className="footer-tagline">Health Grow · consumer health for India</p>
              <p className="footer-venture">KP Ventures</p>
            </div>
            <div className="footer-links">
              <a href="#platform" className="footer-link">Product</a>
              <a href="#medicine" className="footer-link">Features</a>
              <a href="#emergency" className="footer-link">Emergency</a>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 KP Ventures. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;