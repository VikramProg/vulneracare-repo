import { useEffect } from 'react';
import './About.css';

// Map asset filenames to processed URLs so JSON-provided paths
// like ".././assets/xyz.jpg" resolve from src/assets at runtime (Vite)
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

const resolveImages = (list) =>
  (list || []).map((p) => {
    const name = (p || '').split('/').pop();
    return (name && assetUrlByName[name]) || p;
  });

const About = ({ data }) => {


  // Reveal images/arrows progressively on scroll
  useEffect(() => {
    const elements = document.querySelectorAll('.flow-item, .flow-arrow');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-flow" id="about-flow">
          {resolveImages(data.about.images).map((image, index) => (
            <div key={`item-${index}`} className="flow-segment">
              <div className="flow-item">
                <img className="flow-image" src={image} alt={`Team collaboration ${index + 1}`} />
              </div>
              {index < data.about.images.length - 1 && (
                <div className="flow-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 48" width="24" height="48" className="arrow-svg">
                    <defs>
                      <linearGradient id="arrowGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                    </defs>
                    <path className="arrow-path" d="M12 0 L12 36 M6 30 L12 36 L18 30" stroke="url(#arrowGrad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="about-content">
          <h2>{data.about.title}</h2>
          <p className="about-description">{data.about.description}</p>
          <p className="about-mission">{data.about.mission}</p>
          {/* 
          <div className="about-stats">
            {data.about.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div> */}

          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              {data.about.values.map((value, index) => (
                <div key={index} className="value-item">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="about-mission">{data.about.contactTagLine}</p>
        </div>
      </div>


    </section>
  );
};

export default About;
