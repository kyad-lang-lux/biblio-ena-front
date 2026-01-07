import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './style.css'; 

// Import des Composants
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import des Pages
import Accueil from '../pages/Accueil';
import Ressources from '../pages/Ressources';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Monographies from '../pages/Monographies';
import Parametres from '../pages/Parametres';
import Periodiques from '../pages/Periodiques';
import Memoires from '../pages/Memoires';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import DynamicDocs from '../pages/DynamicDocs';
import AdminDocs from '../pages/AdminDocs';

function App() {
  // Le hook useLocation permet de récupérer l'URL actuelle
  const location = useLocation();

  // Liste des chemins où on NE VEUT PAS de Navbar ni de Footer
  const hideLayoutPaths = ['/dashboard', '/admin-docs'];

  // On vérifie si le chemin actuel est dans notre liste
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {/* N'affiche la Navbar que si on n'est pas sur une page admin/login */}
      {!shouldHideLayout && <Navbar />} 
      
      <main style={shouldHideLayout ? { paddingTop: 0 } : {}}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/monographies" element={<Monographies />} />
          <Route path="/periodiques" element={<Periodiques />} />
          <Route path="/memoires" element={<Memoires />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dynamicDocs" element={<DynamicDocs />} />
          <Route path="/admin-docs" element={<AdminDocs />} />
        </Routes>
      </main>
      
      {/* N'affiche le Footer que si on n'est pas sur une page admin/login */}
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;