// pages/Ressources.jsx

import React, { useState } from 'react'; // Import de useState
import { Link } from 'react-router-dom';
import '../src/style.css'; 

const Ressources = () => {
  // 1. État pour gérer la valeur de la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');
  
  // 2. Fonction pour mettre à jour la valeur à chaque frappe
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Recherche actuelle :', event.target.value);
    // Plus tard, ici on déclenchera la recherche réelle (API call ou filtrage local)
  }; 
  
  // 3. Fonction pour le bouton Filtre 
  const handleFilterClick = () => {
    alert('Le panneau de filtres sera implémenté ici !');
  };


  return (
    <div className="ressources-page">
      
      {/* 1. SECTION : BANNIÈRE ET RECHERCHE */}
      <section className="ressources-header-section">
        <div className="header-content">
          <h1>Ressources Documentaires</h1>
          <p className="subtitle">
            Explorez notre collection de documents : périodiques, monographies et mémoires.
          </p>
        </div>
        
      
        
      </section>
      
      {/* 2. SECTION : LES TROIS CARTES DE DOCUMENTS */}
      <section className="document-types-section">
        <div className="types-grid">
          
          {/* Carte 1 : Périodiques */}
          <div className="type-card type-card-a">
            <div className="icon-box blue-bg">
              <i className="fa-solid fa-book"></i>
            </div> 
            <h3>Périodiques</h3>
            <p>Revues, journaux et publications périodiques</p>
            <div className="card-footer-stats">
              <span className="doc-count">+845 documents</span>
              <Link to="/periodiques" className="view-link">
                Voir tout <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
          {/* Carte 2 : Monographies */}
          <div className="type-card">
            <div className="icon-box orange-bg">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3>Monographies</h3>
            <p>Ouvrages, manuels et livres spécialisés</p>
            <div className="card-footer-stats">
              <span className="doc-count">+1050 documents</span>
              <Link to="/monographies" className="view-link">
                Voir tout <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
          {/* Carte 3 : Mémoires */}
          <div className="type-card type-card-b">
            <div className="icon-box blue-bg">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <h3>Mémoires</h3>
            <p>Travaux de fin d'études et thèses</p>
            <div className="card-footer-stats">
              <span className="doc-count">+520 documents</span>
              <Link to="/memoires" className="view-link">
                Voir tout <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Ressources;