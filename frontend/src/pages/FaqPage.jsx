import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { SITE_NAME } from '../constants/seo';
import '../styles/legal.css';
import '../styles/landing.css';

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Seo
        title={`FAQ | ${SITE_NAME} — health app for India`}
        description="Answers about Health Grow: download the Android APK, medicine reminders, heart rate tracking, AI reports, privacy, and emergency alerts."
        path="/faq"
        includeFaqSchema
      />
      <div className="legal-hero legal-hero-privacy">
        <div className="legal-hero-content">
          <Link to="/" className="legal-back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <div className="delete-icon-circle">
            <HelpCircle size={40} className="legal-hero-icon" />
          </div>
          <h1>Health Grow FAQ</h1>
          <p className="delete-subtitle">Everything about our Android health app for India</p>
        </div>
      </div>
      <FaqSection id="faq-full" />
    </div>
  );
};

export default FaqPage;
