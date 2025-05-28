import React from 'react';
import './Footer.css';

interface FooterProps {
  t: Record<string, string>;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">{t.title}</h3>
          <p className="footer-description">
            © {new Date().getFullYear()} Music Explorer. {t.musicianCorner}
          </p>
        </div>
        
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#terms" className="footer-link">Terms</a>
          <a href="#privacy" className="footer-link">Privacy</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
