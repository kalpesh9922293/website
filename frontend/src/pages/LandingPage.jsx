import React from 'react';
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
  CheckCircle2 } from
'lucide-react';
import '../styles/landing.css';

const LandingPage = () => {
  const scrollToGetStarted = () => {
    document.getElementById('get-started-form')?.scrollIntoView({
      behavior: 'smooth'
    });
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
            <p className="hero-subtitle">India ka apna smart healthcare management platform 🇮🇳</p>
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
          
          {/* Reviews and Trust Section */}
          <div className="hero-reviews">
            <div className="trust-badges">
              <div className="trust-item">
                <Shield className="trust-icon" />
                <div>
                  <div className="trust-number">100%</div>
                  <div className="trust-label">Secure</div>
                </div>
              </div>
              <div className="trust-item">
                <Heart className="trust-icon" />
                <div>
                  <div className="trust-number">10K+</div>
                  <div className="trust-label">Happy Users</div>
                </div>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="trust-icon" />
                <div>
                  <div className="trust-number">4.8★</div>
                  <div className="trust-label">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="reviews-container">
              <Card className="review-card">
                <CardContent className="review-content">
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">
                    "Health Grow has made managing my medications so easy! Never miss a dose anymore."
                  </p>
                  <p className="review-author">- Priya Sharma, Mumbai</p>
                </CardContent>
              </Card>
              
              <Card className="review-card">
                <CardContent className="review-content">
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">
                    "The AI report analysis feature is amazing. Finally understand my health reports!"
                  </p>
                  <p className="review-author">- Rajesh Kumar, Delhi</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Health Grow</h2>
          </div>
          <Card className="about-card">
            <CardContent className="about-content">
              <p className="about-text">
                Health Grow is a modern health management platform designed to simplify your daily 
                healthcare routine. We believe that health should be easy to manage, understand, and track.
              </p>
              <p className="about-text">
                With smart reminders and AI-based insights, Health Grow helps individuals and families 
                take better care of their health.
              </p>
            </CardContent>
          </Card>
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
          <div className="features-grid">
            {features.map((feature, index) =>
            <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="feature-icon">
                    <feature.icon size={32} />
                  </div>
                  <CardTitle className="feature-title">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="feature-description">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )}
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
          <div className="india-banner">
            <div className="india-stripe saffron"></div>
            <div className="india-stripe white">
              <div className="india-content-center">
                <h2 className="india-heading">🇮🇳 India Ka Apna App 🇮🇳</h2>
                <p className="india-subtitle">
                  Proudly Made in India for Indians
                </p>
                <p className="india-description">
                  Designed with Indian families in mind • Supporting multiple languages • 
                  Trusted by thousands across India
                </p>
              </div>
            </div>
            <div className="india-stripe green"></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started-form" className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <Heart className="cta-icon" size={48} />
            <h2 className="cta-title">Start Your Healthy Journey Today</h2>
            <p className="cta-subtitle">
              Join thousands of users managing their health better with Health Grow
            </p>
            <div className="cta-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="cta-input" />

              <Button size="lg" className="btn-cta-submit">
                Get Started
              </Button>
            </div>
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