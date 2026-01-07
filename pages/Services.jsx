// pages/Services.jsx

import React from 'react';
import '../src/style.css'; 

const Services = () => {
  return (
    <div className="services-page">
      
      {/* 1. SECTION : EN-TÊTE ET DESCRIPTION */}
      <section className="services-header-section">
        <h1>Services aux Lecteurs</h1>
        <p className="header-description">
          La bibliothèque de l'ENA propose des services sur mesure pour accompagner 
          la réussite académique des élèves et les travaux de recherche de l'administration et des enseignants.
        </p>    
      </section>
      
      {/* 2. SECTION : CARTES DES SERVICES */}
      <section className="services-grid-section">
        <div className="services-grid">
          
          {/* Carte 1 : Consultation & Espaces d'étude */}
          <div className="service-card">
            <div className="icon-box-service light-blue-bg">
              <i className="fa-solid fa-book-open-reader"></i> 
            </div>
            <h3>Consultation & Espaces</h3>
            <p>
              Profitez d'un cadre propice au travail intellectuel. Notre salle de lecture 
              offre un accès direct aux dernières parutions et revues spécialisées.
            </p>
            <ul className="service-features">
              <li><i className="fa-solid fa-check-circle"></i> Wifi disponible pour les usagers</li>
              <li><i className="fa-solid fa-check-circle"></i> Espaces de travail en groupe</li>
            </ul>
          </div>
          
          {/* Carte 2 : Prêt d'ouvrages */}
          <div className="service-card">
            <div className="icon-box-service light-orange-bg">
              <i className="fa-solid fa-hand-holding-heart"></i>
            </div>
            <h3>Prêt d'ouvrages</h3>
            <p>
              Emportez vos documents pour approfondir vos études. Le prêt est ouvert aux  
              enseignants et cadres de l'administration de l'ENA.
            </p>
            <ul className="service-features">
              <li><i className="fa-solid fa-check-circle"></i> Jusqu'à 3 ouvrages simultanés</li>
              <li><i className="fa-solid fa-check-circle"></i> Durée : 15 jours renouvelables</li>
             </ul>
          </div>
          
          {/* Carte 3 : Assistance à la Recherche */}
          <div className="service-card">
            <div className="icon-box-service light-blue-bg">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Appui à la Recherche</h3>
            <p>
              Besoin d'aide pour votre mémoire ou une étude technique ? Nos bibliothécaires 
              vous aident à explorer les bases de données et catalogues.
            </p>
            <ul className="service-features">
              <li><i className="fa-solid fa-check-circle"></i> Accès aux ressources numériques</li>
              <li><i className="fa-solid fa-check-circle"></i> Ateliers de veille documentaire</li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* 3. SECTION OPTIONNELLE : INFOS COMPLÉMENTAIRES */}
      <section className="info-card-simple" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <p>
          <strong>Note :</strong> L'utilisation d'une carte d'identité est obligatoire pour bénéficier du prêt. 
          Veuillez vous présenter à l'accueil avec votre carte .
        </p>
      </section>

    </div>
  );
};

export default Services;