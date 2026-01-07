// components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../src/style.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i class="fa-solid fa-book"></i>Biblioena
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            <i class="fa-regular fa-house"></i> Accueil
          </NavLink>
          
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            <i className="fa-regular fa-envelope"></i> Contacts
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link admin-link' : 'nav-link admin-link'} onClick={closeMenu}>
            <i className="fa-solid fa-gear"></i> Admin
          </NavLink> 
        </nav>
      </div>
    </header>
  );
};

export default Navbar;