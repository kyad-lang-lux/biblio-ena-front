// pages/Contacts.jsx

import React from 'react';
import '../src/style.css'; 

const Contacts = () => {
  return (
    <div className="contact-page">
      
      {/* SECTION : EN-TÊTE */}
      <section className="contact-header-section">
        <h1>Contactez-nous</h1>
        <p className="header-description">
          Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.
        </p>
      </section>
      
      {/* SECTION : CONTENU (Informations vs. Formulaire) */}
      <section className="contact-content-section">
        
        {/* Colonne Gauche : Informations de contact */}
        <div className="contact-info-col">
          <h2>Informations de contact</h2>
          
          {/* Adresse */}
          <div className="info-item">
            <div className="info-icon-box">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="info-details">
              <h4>Adresse</h4>
              <p>
                École Nationale d'Administration<br />
                Avenue de l'Université, BP 123<br />
                Service de Documentation et des Archives
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="info-item">
            <div className="info-icon-box">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="info-details">
              <h4>Email</h4>
              <a href="mailto:enambeninbibliotheque@gmail.com">enambeninbibliotheque@gmail.com</a>
            </div>
          </div>

          {/* Téléphone */}
          <div className="info-item">
            <div className="info-icon-box">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="info-details">
              <h4>Téléphone</h4>
              <a href="tel:+2290199901493">+229 01 99 90 14 93</a>
            </div>
          </div>

          {/* Horaires */}
          <div className="info-item">
            <div className="info-icon-box">
              <i className="fa-regular fa-clock"></i>
            </div>
            <div className="info-details">
              <h4>Horaires d'ouverture</h4>
              <p>
                Lundi - Vendredi : 08h00 - 17h00<br />
              </p>
            </div>
          </div>
          
          {/* Suivez-nous */}
          <div className="follow-us-section">
            <h2>Suivez-nous</h2>
            <div className="social-links">
              <a href="https://www.tiktok.com/@bibliothequeenambenin" className="social-icon facebook-bg"><i className="fa-brands fa-tiktok"></i></a>
              
            </div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire (SUPPRIMÉE) */}
        <div className="contact-form-col">
          {/* Cette colonne est vide ou masquée par le CSS si le flex est utilisé pour centrer la colonne de gauche. */}
        </div>

      </section>

    </div>
  );
};

export default Contacts;