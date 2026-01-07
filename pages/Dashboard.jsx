import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const API_URL = "https://biblio-ena1.onrender.com";
  const [formData, setFormData] = useState({ titre: '', auteur: '', annee: '', type: 'monographies', categorie: '3' });

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') navigate('/login');
  }, [navigate]);

  const handleLogout = () => { localStorage.removeItem('isAuthenticated'); navigate('/login'); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/publish`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Document publié !');
        setFormData({ titre: '', auteur: '', annee: '', type: 'monographies', categorie: '3' });
      }
    } catch (error) { alert('Erreur serveur'); }
  };

  return (
    <div className="dashboard-wrapper">
      <nav className="admin-nav"><div className="admin-nav-content">
          <span className="admin-logo">Espace Admin</span>
          <div className="nav-actions">
            <Link to="/admin-docs" className="nav-link-btn"><i class="fa-regular fa-trash-can"></i> Gérer / Supprimer</Link>
            <button onClick={handleLogout} className="logout-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Déconnexion</button>
          </div>
      </div></nav>
      <div className="dashboard-container">
        <form onSubmit={handleSubmit} className="dash-form">
          <h3>Nouveau Document</h3>
          <input type="text" placeholder="Titre" value={formData.titre} onChange={e => setFormData({...formData, titre: e.target.value})} required />
          <input type="text" placeholder="Auteur" value={formData.auteur} onChange={e => setFormData({...formData, auteur: e.target.value})} required />
          <input type="number" placeholder="Année" value={formData.annee} onChange={e => setFormData({...formData, annee: e.target.value})} required />
          <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
            <option value="monographies">Monographies</option>
            <option value="periodiques">Périodiques</option>
            <option value="memoires">Mémoires</option>
          </select>
          <select value={formData.categorie} onChange={e => setFormData({...formData, categorie: e.target.value})}>
            <option value="0">0 : Généralités</option>
            <option value="1">1 : Philosophie</option>
            <option value="2">2 : Religion</option>
            <option value="3">3 : Sciences Sociales</option>
            <option value="4">4 : Langues</option>
            <option value="5">5 : Sciences pures</option>
            <option value="6">6 : Sciences appliquées</option>
            <option value="7">7 : Arts</option>
            <option value="8">8 : Littérature</option>
            <option value="9">9 : Géographie & Histoire</option>
          </select>
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  );
};
export default Dashboard;