// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ siteName = 'My HealthyHub' }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__inner">
        <div className="ft__links">
          <Link to="/contact" className="ft__link">Contact</Link>
          <Link to="/mentions-legales" className="ft__link">Mentions légales</Link>
        </div>

        <div className="ft__brand">
          <span>© {year} {siteName}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
