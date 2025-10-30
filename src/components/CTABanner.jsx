import './CTABanner.css';
import ContactModal from './ContactModal';
import { useState } from 'react';

const CTABanner = ({ data }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <div className="cta-outer">
      <div className="cta-container">
        <div className="cta-banner">
          <div className="cta-text">
            DEVELOP FASTER WITH LESS RISK
          </div>
          <div className="cta-actions">
            <button className="cta-button" onClick={() => setIsContactModalOpen(true)}>
              Contact Now
              <span className="cta-button-arrow" aria-hidden>
                {/* small arrow */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
          {/* big decorative arrow */}
          <div className="cta-decor-arrow" aria-hidden>
            <svg viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="ctaGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#ffd54f" />
                  <stop offset="100%" stopColor="#00e676" />
                </linearGradient>
              </defs>
              <path d="M0 40 H140 L120 20 M140 40 L120 60" stroke="url(#ctaGrad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>


      {isContactModalOpen && (
        <ContactModal
          data={data.company}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CTABanner;

