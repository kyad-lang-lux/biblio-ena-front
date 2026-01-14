// components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../src/style.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-col logo-col">
            <Link to="/" className="footer-logo">
              <i className="fa-solid fa-book"></i> Biblioena
            </Link>
            <p className="footer-description">
              Espace de documentation, de recherche et de conservation de l'École Nationale d'Administration.
            </p>
          </div>
          
          
          <div className="footer-col contact-col">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li><i className="fa-solid fa-location-dot"></i> UAC / ENA </li>
              <li> <a href="mailto:enambeninbibliotheque@gmail.com"><i className="fa-solid fa-envelope"></i> Nous écrire </a></li>
              <li><i className="fa-solid fa-phone"></i> +229 01 99 90 14 93</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Bibliothèque de l'ENA. Tous droits réservés.</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;