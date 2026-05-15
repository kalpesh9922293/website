import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export default function FaqSection({ items = FAQ_ITEMS, id = 'faq' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="faq-heading" className="text-navy">
            Health Grow — frequently asked questions
          </h2>
          <p>
            Quick answers about downloading, privacy, emergency mode, and how Health Grow fits into your daily health routine in India.
          </p>
        </div>
        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className={`faq-item${isOpen ? ' faq-item-open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-chevron" aria-hidden />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
