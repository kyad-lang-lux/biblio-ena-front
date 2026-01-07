import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API_URL = "https://biblio-ena1.onrender.com"; // URL de ton backend

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard'); 
      } else {
        alert(data.message || 'Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur backend (Vérifiez s\'il est lancé sur le port 5000)');
    }
  };

  return (
    <div className="login-page">
      
      <div className="login-container">
        <Link to="/ressources" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Retour à l'acceuil
        </Link>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <div className="logo-box-small">
              <i className="fa-solid fa-book"></i>
              <span className="logo-text-small">SDA-ENA</span>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <div className="input-with-icon">
              <i className="fa-regular fa-user"></i>
              <input 
                type="text" 
                id="username" 
                placeholder="Nom d'utilisateur" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="input-with-icon">
              <i className="fa-solid fa-lock"></i>
              <input 
                type="password" 
                id="password" 
                placeholder="********" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="btn-connect">Se connecter</button>

          <div className="warning-note">
            <p><strong>Accès réservé</strong></p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;