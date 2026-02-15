import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  Pill,
  FileText,
  Shield,
  Bell,
  Bot,
  LayoutDashboard,
  Heart,
  CheckCircle2,
  Users,
  Zap,
  Globe
} from
  'lucide-react';
import logo from '../assets/logo.png';
import '../styles/landing.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('March 2, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const aboutFeaturesRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const setupAutoSlide = (ref) => {
      const container = ref.current;
      if (!container) return;

      let scrollInterval;
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = container.querySelector('div').offsetWidth + 20; // card + gap
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }, 3000);
      };

      const stopScrolling = () => clearInterval(scrollInterval);

      startScrolling();
      container.addEventListener('mouseenter', stopScrolling);
      container.addEventListener('mouseleave', startScrolling);
      container.addEventListener('touchstart', stopScrolling);
      container.addEventListener('touchend', startScrolling);

      return () => {
        stopScrolling();
        container.removeEventListener('mouseenter', stopScrolling);
        container.removeEventListener('mouseleave', startScrolling);
        container.removeEventListener('touchstart', stopScrolling);
        container.removeEventListener('touchend', startScrolling);
      };
    };

    const cleanupAbout = setupAutoSlide(aboutFeaturesRef);
    const cleanupFeatures = setupAutoSlide(featuresRef);

    return () => {
      if (cleanupAbout) cleanupAbout();
      if (cleanupFeatures) cleanupFeatures();
    };
  }, []);

  const features = [
    {
      icon: Pill,
      title: "Smart Medicine Reminders",
      description: "Set custom reminder times, daily repeating reminders, sound alerts. Never miss a dose."
    },
    {
      icon: FileText,
      title: "AI Health Report Analysis",
      description: "Upload medical reports. AI explains reports in simple language. Understand your health better."
    },
    {
      icon: Shield,
      title: "Secure Health Records",
      description: "Store medical data safely with private and secure cloud storage."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Health alerts and reminder tracking to keep you on top of your health."
    },
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "Ask health-related questions and get instant AI responses."
    },
    {
      icon: LayoutDashboard,
      title: "Personal Dashboard",
      description: "View upcoming medicines, track past reminders. Simple & clean interface."
    }];


  const howItWorks = [
    {
      step: "1",
      title: "Create your account",
      description: "Sign up in seconds and set up your health profile"
    },
    {
      step: "2",
      title: "Add medicines or upload reports",
      description: "Add your medications or upload health reports for analysis"
    },
    {
      step: "3",
      title: "Get reminders & AI health insights",
      description: "Receive timely reminders and personalized health insights"
    }];


  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <img
              src={logo}
              alt="Health Grow Logo"
              className="logo-image !rounded-[50px]" />

          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <Button onClick={scrollToGetStarted} className="btn-nav-cta">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <section className="hero-section center-content">
        <div className="hero-content-center">
          <div className="hero-text-center">
            <h1 className="hero-title">Your Smart Health Companion</h1>
            <p className="hero-subtitle">India ka apna smart healthcare management platform</p>
            <p className="hero-description">
              Manage medicines, upload reports, get AI-powered health insights, and stay in control
              of your health — all in one place.
            </p>
            <div className="hero-cta-wrapper">
              <Button
                onClick={scrollToGetStarted}
                size="lg"
                className="btn-hero-cta">
                Get Started
              </Button>
            </div>

            <div className="launch-section">
              <h3 className="launch-text">We are launching on</h3>
              <div className="countdown-timer-large">
                <div className="timer-block-large">
                  <span className="timer-value-large">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="timer-label-large">Days</span>
                </div>
                <div className="timer-separator-large">:</div>
                <div className="timer-block-large">
                  <span className="timer-value-large">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="timer-label-large">Hrs</span>
                </div>
                <div className="timer-separator-large">:</div>
                <div className="timer-block-large">
                  <span className="timer-value-large">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="timer-label-large">Mins</span>
                </div>
                <div className="timer-separator-large">:</div>
                <div className="timer-block-large">
                  <span className="timer-value-large">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="timer-label-large">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      < section id="about" className="about-section" >
        <div className="container">
          <div className="about-hero">
            <div className="about-hero-content">
              <h2 className="about-hero-title">Your Health, Our Mission</h2>
              <p className="about-hero-description">
                Health Grow empowers millions of Indians to take control of their health journey.
                We simplify the complex, making healthcare management intuitive, accessible, and personal.
              </p>
              <div className="highlights-strip">
                <div className="highlight-item">
                  <Pill size={24} className="highlight-icon" />
                  <span className="highlight-label">Medicine Reminders</span>
                </div>
                <div className="highlight-item">
                  <FileText size={24} className="highlight-icon" />
                  <span className="highlight-label">AI Report Analysis</span>
                </div>
                <div className="highlight-item">
                  <Shield size={24} className="highlight-icon" />
                  <span className="highlight-label">100% Private & Secure</span>
                </div>
                <div className="highlight-item">
                  <Bot size={24} className="highlight-icon" />
                  <span className="highlight-label">AI Health Assistant</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-features-carousel-container">
            <div className="about-features" ref={aboutFeaturesRef}>
              <div className="about-feature-card">
                <div className="feature-icon-bg">
                  <Heart size={40} />
                </div>
                <h3 className="feature-title">Built with Care</h3>
                <p className="feature-text">Every feature is designed around your needs. We listen, learn, and continuously improve to serve you better.</p>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-bg">
                  <Shield size={40} />
                </div>
                <h3 className="feature-title">Privacy First</h3>
                <p className="feature-text">Your health data is sacred. With enterprise-grade encryption, your information stays completely private and secure.</p>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-bg">
                  <Zap size={40} />
                </div>
                <h3 className="feature-title">AI-Powered</h3>
                <p className="feature-text">Advanced AI analyzes your health patterns and provides personalized insights you can actually understand.</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your health effectively
            </p>
          </div>
          <div className="features-carousel-container">
            <div className="features-grid-carousel" ref={featuresRef}>
              {features.map((feature, index) => (
                <div key={index} className="feature-card-carousel">
                  <div className="feature-card-inner-carousel">
                    <div className="feature-icon-carousel">
                      <feature.icon size={32} />
                    </div>
                    <div className="feature-content-carousel">
                      <h3 className="feature-title-carousel">{feature.title}</h3>
                      <p className="feature-description-carousel">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      < section id="how-it-works" className="how-it-works-section" >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple. Clean. Easy.</p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((item, index) =>
              <div key={index} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            )}
          </div>
        </div>
      </section >

      {/* India Ka Apna App Section */}
      <section className="india-section">
        <div className="container">
          <div className="india-content">
            <div className="india-top">
              <h2 className="india-title">Proudly Made in India</h2>
              <p className="india-tagline">For Indians, By Indians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      < section id="get-started-form" className="final-cta-section" >
        <div className="container">
          <div className="cta-content">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={64} className="success-icon" />
                <h2 className="success-title">Thanks for Registering!</h2>
                <p className="success-text">
                  Welcome to Health Grow! Check your email for next steps.
                  Get ready to take control of your health.
                </p>
              </div>
            ) : (
              <>
                <Heart className="cta-icon" size={48} />
                <h2 className="cta-title">Start Your Healthy Journey Today</h2>
                <p className="cta-subtitle">
                  Join thousands of users managing their health better with Health Grow
                </p>
                <form onSubmit={handleEmailSubmit} className="cta-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="cta-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                  <Button type="submit" size="lg" className="btn-cta-submit">
                    Get Started
                  </Button>
                </form>
                <div className="cta-benefits">
                  <div className="benefit-item">
                    <CheckCircle2 size={20} />
                    <span>Free to start</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle2 size={20} />
                    <span>No credit card required</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle2 size={20} />
                    <span>Secure & private</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="footer" >
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src={logo}
                alt="Health Grow Logo"
                className="footer-logo" />

              <p className="footer-tagline">Health is the biggest wealth</p>
            </div>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#features" className="footer-link">Features</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              © 2026 Health Grow. All rights reserved. Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer >
    </div >);

};

export default LandingPage;