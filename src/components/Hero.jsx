import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  // Resolve backgroundImage value from src/assets when path comes from JSON
  const assetUrlByName = (() => {
    const modules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,gif,webp}', {
      eager: true,
      import: 'default',
    });
    const byName = {};
    for (const [key, url] of Object.entries(modules)) {
      const name = key.split('/').pop();
      if (name) byName[name] = url;
    }
    return byName;
  })();

  const resolveAsset = (p) => {
    const name = (p || '').split('/').pop();
    return (name && assetUrlByName[name]) || p;
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slides = data.hero.slides;
  const bgUrl = resolveAsset(data.hero.backgroundImage);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slide auto rotation
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
        style={{ backgroundImage: `url(${bgUrl})` }}
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

        {/* ✅ Inline visibility hidden only on mobile */}
        <div
          className="hero-indicators"
          style={{ visibility: isMobile ? 'hidden' : 'visible' }}
        >
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

      {/* Optionally keep scroll indicator logic here */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
