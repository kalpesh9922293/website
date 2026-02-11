import React, { useState } from 'react';
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
  Globe } from
'lucide-react';
import '../styles/landing.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
              src="https://customer-assets.emergentagent.com/job_2c1c840e-32d3-4110-aaeb-07e24a174e8c/artifacts/85ig0cms_file_00000000af3c71fa9076405840c2996a.png"
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Your Smart Health Companion</h1>
            <p className="hero-subtitle">India ka apna smart healthcare management platform</p>
            <p className="hero-description">
              Manage medicines, upload reports, get AI-powered health insights, and stay in control 
              of your health — all in one place.
            </p>
            <Button
              onClick={scrollToGetStarted}
              size="lg"
              className="btn-hero-cta">
              Get Started
            </Button>
          </div>
          
          {/* Floating Cards - Right Side */}
          <div className="hero-floating-cards">
            <div className="floating-card card-1">
              <div className="floating-card-icon">
                <Pill size={32} />
              </div>
              <div className="floating-card-content">
                <div className="floating-card-number">10K+</div>
                <div className="floating-card-label">Doses Tracked</div>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <div className="floating-card-icon">
                <FileText size={32} />
              </div>
              <div className="floating-card-content">
                <div className="floating-card-number">50K+</div>
                <div className="floating-card-label">Reports Analyzed</div>
              </div>
            </div>
            
            <div className="floating-card card-3">
              <div className="floating-card-icon">
                <Heart size={32} />
              </div>
              <div className="floating-card-content">
                <div className="floating-card-number">100%</div>
                <div className="floating-card-label">Health Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-hero">
            <div className="about-hero-content">
              <h2 className="about-hero-title">Your Health, Our Mission</h2>
              <p className="about-hero-description">
                Health Grow empowers millions of Indians to take control of their health journey. 
                We simplify the complex, making healthcare management intuitive, accessible, and personal.
              </p>
              <div className="about-stats-row">
                <div className="stat-item">
                  <div className="stat-value">50K+</div>
                  <div className="stat-text">Active Users</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">1M+</div>
                  <div className="stat-text">Goals Achieved</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">99.9%</div>
                  <div className="stat-text">Reliability</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-features">
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
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your health effectively
            </p>
          </div>
          <div className="features-grid-new">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-gradient">
                <div className="feature-card-inner">
                  <div className="feature-icon-new">
                    <feature.icon size={40} />
                  </div>
                  <div className="feature-content-new">
                    <h3 className="feature-title-new">{feature.title}</h3>
                    <p className="feature-description-new">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
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
      </section>

      {/* India Ka Apna App Section */}
      <section className="india-section">
        <div className="container">
          <div className="india-content">
            <div className="india-top">
              <h2 className="india-title">Proudly Made in India</h2>
              <p className="india-tagline">For Indians, By Indians</p>
            </div>
            
            <div className="india-cards-grid">
              <div className="india-card">
                <div className="india-card-stripe saffron"></div>
                <div className="india-card-content">
                  <div className="india-card-icon">
                    <Users size={32} />
                  </div>
                  <h3 className="india-card-title">Deep Local Roots</h3>
                  <p className="india-card-text">Built with deep understanding of Indian families, culture, and healthcare needs</p>
                </div>
              </div>
              
              <div className="india-card">
                <div className="india-card-stripe white"></div>
                <div className="india-card-content">
                  <div className="india-card-icon">
                    <Globe size={32} />
                  </div>
                  <h3 className="india-card-title">Multi-Language Support</h3>
                  <p className="india-card-text">Available in Hindi, Tamil, Telugu, Bengali, Kannada, and many more languages</p>
                </div>
              </div>
              
              <div className="india-card">
                <div className="india-card-stripe green"></div>
                <div className="india-card-content">
                  <div className="india-card-icon">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="india-card-title">Trusted by Thousands</h3>
                  <p className="india-card-text">Serving millions of Indians across the country with reliable health management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started-form" className="final-cta-section">
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
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src="https://customer-assets.emergentagent.com/job_2c1c840e-32d3-4110-aaeb-07e24a174e8c/artifacts/85ig0cms_file_00000000af3c71fa9076405840c2996a.png"
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
              © 2024 Health Grow. All rights reserved. Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default LandingPage;