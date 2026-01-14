import React, { useState, useEffect } from 'react';

const DynamicDocs = ({ type }) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    setLoading(true);
    fetch(`https://biblio-ena1.onrender.com/api/documents/${type}`) // Remplace par ton URL Render
      .then(res => res.json())
      .then(data => {
        setDocs(data); 
        setLoading(false); // Fin du chargement
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [type]);

  // TEXTE DE CHARGEMENT
  if (loading) {
    return (
      <div className="loading-container">
        <i className="fa-solid fa-spinner fa-spin"></i> Chargement des documents...
      </div>
    );
  }

  if (docs.length === 0) return <p className="no-docs">Aucun document trouvé dans cette section.</p>;

  return (
    <>
      {docs.map((doc) => {
         const labels = ["Généralités", "Philosophie", "Religion", "Sciences Sociales", "Langues", "Sciences pures", "Sciences appliquées", "Arts", "Littérature", "Géographie & Histoire"];
         return (
          <div key={doc.id} className="document-card dynamic-entry">
            <div className="card-content-left">
              <i className="fa-regular fa-file-lines doc-icon" style={{color: '#e67e22'}}></i>
              <div className="doc-details">
                <h3>{doc.titre}</h3>
                <div className="doc-meta">
                  <span className="meta-item"><i className="fa-regular fa-user"></i> {doc.auteur}</span>
                  <span className="meta-item"><i className="fa-regular fa-calendar-days"></i> {doc.annee}</span>
                  <span className="meta-item category-tag">Classe {doc.categorie} : {labels[doc.categorie]}</span>
                </div>
              </div>
            </div>
            <button className="btn-consult">Consulter</button>
          </div>
        );
      })}
    </>
  );
};

export default DynamicDocs;