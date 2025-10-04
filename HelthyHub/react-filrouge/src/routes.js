/* eslint-disable */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PasswordPage from './pages/PasswordPage';
import HygienePage from './pages/HygienePage';
import Recettes from './recettes/index';
import Conseils from './recettes/Conseils';
import Submit from './pages/SubmitPage';
import MesRecettes from './pages/MesRecettes';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Utilisateur from './pages/Utilisateur';

const RoutesConfig = () => {
  // ✅ Initialiser directement à partir du localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userEmail, setUserEmail] = useState(localStorage.getItem('email'));

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        {/* routes protégées */}
        <Route
          path="/mes-recettes"
          element={isLoggedIn ? <MesRecettes /> : <Navigate to="/login" />}
        />
        <Route
          path="/profil"
          element={
            isLoggedIn ? (
              <h1>Bienvenue {userEmail} 🎉</h1>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* routes publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/forgottenpassword" element={<PasswordPage />} />
        <Route path="/hygiene" element={<HygienePage />} />
        <Route path="/recettes" element={<Recettes isLoggedIn={isLoggedIn} />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Admin" element={<Admin />} />
         <Route path="/Utilisateur" element={<Utilisateur />} />
      </Routes>
       <Footer siteName="My HealthyHub" />
    </Router>
  );
};

export default RoutesConfig;
