import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicDocs from './DynamicDocs';
import '../src/style.css'; 

const Periodiques = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const listRef = useRef(null); 

  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();
    if (listRef.current) {
      const cards = listRef.current.querySelectorAll('.document-card'); 
      cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const author = card.querySelector('.meta-item:nth-child(1)')?.textContent.toLowerCase() || '';
        const deweyTag = card.querySelector('.category-tag')?.textContent || '';

        const matchesSearch = title.includes(term) || author.includes(term);
        const matchesCategory = selectedCategory === 'Tous' || deweyTag.includes(`Classe ${selectedCategory}`);

        card.style.display = (matchesSearch && matchesCategory) ? 'flex' : 'none';
      });
    }
  }, [searchTerm, selectedCategory]);

  return (
    <div className="periodiques-page monographies-page">
      <section className="document-list-header">
        <Link to="/ressources" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Retour aux ressources
        </Link>
        <div className="title-row">
          <h1>Périodiques</h1>
          <span className="doc-count-total">Revues et publications</span> 
        </div>
        
        <div className="search-filter-container">
          <div className="search-input-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              type="text" 
              placeholder="Rechercher par titre ou éditeur..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-dropdown-wrapper">
            <select className="category-dropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="Tous">Toutes les classes Dewey</option>
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
            <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
          </div>
        </div>
      </section>
      
      <section className="results-list-section" ref={listRef}> 
        <DynamicDocs type="periodiques" />
      </section>
    </div>
  );
};

export default Periodiques;