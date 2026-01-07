// pages/Parametres.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link
import '../src/style.css'; 

const Parametres = () => {
  
  // NOTE: La fonction handleConnectClick a été retirée.

  return (
    <div className="parametres-page">
       
      
      <section className="admin-access-section">
        
        <div className="admin-card">
          
          <div className="admin-icon-box">
            <i className="fa-solid fa-lock"></i>
          </div>
          
          <h2>Espace Administrateur</h2>
         
          <Link 
            to="/login" // <-- Navigue vers la page de connexion
            className="btn-connect-admin"
          >
            <i className="fa-solid fa-user-lock"></i> Se connecter
          </Link>
          
        </div>
        
      </section>

    </div>
  );
};

export default Parametres;