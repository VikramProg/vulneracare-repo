import { useState, useEffect } from 'react';
import './Hero.css';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = data.hero.slides;

  // Show only on desktop/large screens with a mouse/trackpad
  const showScrollIndicator = useMediaQuery('(min-width: 1025px) and (pointer: fine)');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${data.hero.backgroundImage})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === (currentSlide - 1 + slides.length) % slides.length ? 'exit' : ''
              }`}
          >
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
          </div>
        ))}

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {showScrollIndicator && (
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
