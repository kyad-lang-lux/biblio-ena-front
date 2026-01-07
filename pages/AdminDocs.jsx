import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDocs = () => {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();
  const API_URL = "https://biblio-ena1.onrender.com";

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') navigate('/login');
    fetchDocs();
  }, [navigate]);

  const fetchDocs = async () => {
    const response = await fetch(`${API_URL}/api/admin/all-documents`);
    const data = await response.json();
    setDocs(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ?")) {
      const res = await fetch(`${API_URL}/api/documents/${id}`, { method: 'DELETE' });
      if (res.ok) setDocs(docs.filter(doc => doc.id !== id));
    }
  };

  return (
    <div className="admin-manage-page">
      <header className="admin-header">
         <Link to="/dashboard" className="nav-link-btn" style={{color: 'black'}}>← Retour</Link>
         <h2>Gestion ({docs.length})</h2>
      </header>
      <div className="admin-list-container">
        {docs.map(doc => (
          <div key={doc.id} className="admin-doc-item">
            <div className="admin-doc-info">
              <h4>{doc.titre}</h4>
              <span style={{fontSize: '11px'}}>Classe {doc.categorie} | {doc.auteur} | {doc.annee}</span>
            </div>
            <button onClick={() => handleDelete(doc.id)} className="admin-delete-btn">Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminDocs;