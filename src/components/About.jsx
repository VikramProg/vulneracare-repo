import { useState } from 'react';
import ContactModal from './ContactModal';
import './About.css';

const About = ({ data }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-images">
          {data.about.images.map((image, index) => (
            <div
              key={index}
              className={`about-image-wrapper img-${index + 1}`}
            >
              <img src={image} alt={`Team collaboration ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="about-content">
          <h2>{data.about.title}</h2>
          <p className="about-description">{data.about.description}</p>
          <p className="about-mission">{data.about.mission}</p>

          <div className="about-stats">
            {data.about.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

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

          <button
            className="contact-btn-about"
            onClick={() => setIsContactModalOpen(true)}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {isContactModalOpen && (
        <ContactModal
          data={data.company}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </section>
  );
};

export default About;
