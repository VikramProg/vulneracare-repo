import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ServiceModal.css";

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-header">
          <div className="modal-icon">{service.icon}</div>
          <h2 className="text-header">{service.title}</h2>
        </div>

        <div className="modal-body">
          <p className="modal-description">{service.fullDescription}</p>

          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button className="contact-btn" onClick={scrollToContact}>
            Contact Us About This Service
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ServiceModal;
