import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = data.hero.slides;

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
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${
              index === (currentSlide - 1 + slides.length) % slides.length ? 'exit' : ''
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

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
