import { useState, useEffect } from 'react';
import ServiceModal from './ServiceModal';
import './Services.css';

const Services = ({ data }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const maxScroll = data.services.length - cardsPerView;
        return prev >= maxScroll ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data.services.length, cardsPerView]);

  const getVisibleServices = () => {
    const extended = [...data.services, ...data.services];
    return extended.slice(scrollPosition, scrollPosition + cardsPerView);
  };

  const handlePrev = () => {
    setScrollPosition((prev) => {
      if (prev === 0) {
        return data.services.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setScrollPosition((prev) => {
      const maxScroll = data.services.length - 1;
      return prev >= maxScroll ? 0 : prev + 1;
    });
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>

        <div className="services-carousel">
          <button
            className="carousel-control prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="services-track">
            {getVisibleServices().map((service, index) => (
              <div
                key={`${service.id}-${scrollPosition}-${index}`}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <button
                  className="read-more-btn"
                  onClick={() => setSelectedService(service)}
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>

          <button
            className="carousel-control next"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {data.services.map((_, index) => (
            <button
              key={index}
              className={`dot ${scrollPosition === index ? 'active' : ''}`}
              onClick={() => setScrollPosition(index)}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
