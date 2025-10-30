import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-collapse mobile menu on scroll to avoid sticky open menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnScroll = () => setIsMobileMenuOpen(false);
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [isMobileMenuOpen]);

  // Close menu on viewport resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">{data.company.logo}</div>
          <div className="logo-text">
            <h1>{data.company.name}</h1>
            <p>{data.company.tagline}</p>
          </div>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <div className="header-contact">
          <div className="contact-label">Need Help?</div>
          <a href={`tel:${data.company.phone}`} className="contact-phone">
            {data.company.phone}
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
