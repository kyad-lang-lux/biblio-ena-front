import React, { useState, useEffect } from 'react';

const DynamicDocs = ({ type }) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch(`https://biblio-ena1.onrender.com/api/documents/${type}`)
      .then(res => res.json())
      .then(data => setDocs(data))
      .catch(err => console.error(err));
  }, [type]);

  const getDeweyLabel = (code) => {
    const labels = ["Généralités", "Philosophie", "Religion", "Sciences Sociales", "Langues", "Sciences pures", "Sciences appliquées", "Arts", "Littérature", "Géographie & Histoire"];
    return labels[code] || "Inconnu";
  };

  if (docs.length === 0) return null;

  return (
    <>
      {docs.map((doc) => (
        <div key={doc.id} className="document-card dynamic-entry">
          <div className="card-content-left">
            <i className="fa-regular fa-file-lines doc-icon" style={{color: '#e67e22'}}></i>
            <div className="doc-details">
              <h3>{doc.titre}</h3>
              <div className="doc-meta">
                <span className="meta-item"><i className="fa-regular fa-user"></i> {doc.auteur}</span>
                <span className="meta-item"><i className="fa-regular fa-calendar-days"></i> {doc.annee}</span>
                <span className="meta-item category-tag" style={{background: '#062eb4'}}>Classe {doc.categorie} : {getDeweyLabel(doc.categorie)}</span>
              </div>
            </div>
          </div>
          {/* <button className="btn-consult">Consulter</button> */}
        </div>
      ))}
    </>
  );
};
export default DynamicDocs;