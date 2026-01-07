import React from 'react';
import { Link } from 'react-router-dom';
import '../src/style.css';

const Accueil = () => {
  return (
    <div className="accueil-page">

      {/* HERO */}
      <section className="hero-banner">
        <div className="banner-content">
          <h1>Bibliothèque ENA</h1>
          <p className="subtitle">
            Accédez à un fonds documentaire d'excellence pour differentes recherches
          </p>
          <div className="cta-buttons">
            <Link to="/ressources" className="btn btn-cta-white">
              <i className="fa-solid fa-magnifying-glass"></i> Consulter le catalogue
            </Link> 
            <Link to="/services" className="btn btn-cta-dark">
              Services aux lecteurs <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div> 
        </div> 
      </section>
<br />
      {/* HORAIRES & INFOS PRATIQUES */}
      <section className="info-section">
        <div className="info-grid">

          <div className="info-card">
            <h2 className="card-title">
              <i className="fa-regular fa-clock"></i> Horaires de la salle de lecture
            </h2>
            <div className="horaires-details">
              <div>
                <span>Lundi - Vendredi</span>
                <span>08h00 - 17h00</span>
              </div>
              <div> 
                <span>Samedi - Dimanche</span>
                <span className="ferme">Fermé</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="card-title">
              <i className="fa-solid fa-circle-info"></i> Accès & Prêt
            </h2>
            <p>
              La consultation sur place est libre pour tous les étudiants. Le prêt à domicile est réservé aux proffesseurs et membres de l'administration.
            </p>
          </div>

        </div>
      </section>

      {/* À PROPOS DE LA BIBLIOTHÈQUE */}
      <section className="apropos-section">
        <div className="apropos-header">
          <h2 className="section-title">Le Coeur de la Recherche</h2>
          <p className="section-description">
            La bibliothèque de l’ENA accompagne les futurs cadres de l'État dans leurs recherches académiques et professionnelles.
          </p>
        </div>

        <div className="apropos-content-grid">
          <div className="missions-block">
            <h3>Nos Services</h3>
            <ol className="missions-list">
              <li><span className="mission-number">1</span> Prêt et retour d'ouvrages spécialisés</li>
              {/* <li><span className="mission-number">2</span> Accès aux bases de données juridiques et administratives</li> */}
              <li><span className="mission-number">2</span> Espaces de travail individuel et collectif</li>
              <li><span className="mission-number">3</span> Aide à la recherche bibliographique pour mémoires</li>
              <li><span className="mission-number">4</span> Numérisation et reprographie de documents</li>
            </ol>
          </div>

          <div className="roles-block">
            <h3>Le Fonds Documentaire</h3>
            <p>
              Nous disposons d'une collection unique d'ouvrages en droit, économie, sciences politiques, gestion des administrations et bien d'autres.
            </p>
            <p>
              Plus de 20 000 documents (périodiques, monographies, memoires, etc...) spécialisées sont à votre disposition.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISIONS / ESPACES */}
      <section className="divisions-section">
        <div className="divisions-header">
          <h2 className="section-heading">Nos Espaces</h2>
          <p className="divisions-subtitle">
            Des environnements adaptés à chaque besoin d'apprentissage.
          </p>
        </div>

        <div className="divisions-grid">
          <div className="division-card">
            <div className="icon-container blue-bg">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3>Salle de Lecture</h3> 
            <p>Espace de silence dédié à l'étude et à la consultation des ouvrages récents.</p>
          </div>

          {/* <div className="division-card">
            <div className="icon-container orange-bg">
              <i className="fa-solid fa-computer"></i>
            </div>
            <h3>Espace Numérique</h3>
            <p>Postes informatiques pour accéder au catalogue en ligne et aux ressources numériques.</p>
          </div> */}

          <div className="division-card">
            <div className="icon-container orange-bg">
              <i className="fa-solid fa-archive"></i>
            </div>
            <h3>Magasin & Archives</h3>
            <p>Conservation des collections anciennes et des mémoires de fin d'études.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Accueil;