import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myicon from '../img/myicon.svg';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [open, setOpen] = useState(false);

  // Fermer avec Échap
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Fermer quand on clique sur un lien
  const closeMenu = () => setOpen(false);

  return (
    <header className="nb">
      <div className="nb__bar">
        {/* Logo / Marque */}
        <Link to="/" className="nb__brand">
          <img src={myicon} alt="logo" />
          <span className='title'>HealthyHub</span>
        </Link>

        {/* Bouton burger */}
        <button
          className={`nb__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        {/* Menu */}
        <nav className={`nb__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/" onClick={closeMenu}>Accueil</Link>
              </li>
            )}
            <li>
              <Link to="/recettes" onClick={closeMenu}>Recettes</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/mes-recettes" onClick={closeMenu}>Mes Recettes</Link>
              </li>
            )}
            <li>
              <Link to="/conseils" onClick={closeMenu}>Conseils</Link>
            </li>
            <li>
              <Link to="/hygiene" onClick={closeMenu}>Hygiène</Link>
            </li>

            {isLoggedIn ? (
              <li className="nb__actions">
                <button
                  className="btn-danger"
                  onClick={() => {
                    closeMenu();
                    if (onLogout) onLogout();
                  }}
                >
                  Se Déconnecter
                </button>
              </li>
            ) : (
              <>
                <li className="nb__actions">
                  <Link className="btn-outline" to="/login" onClick={closeMenu}>
                    Me Connecter
                  </Link>
                </li>
                <li className="nb__actions">
                  <Link className="btn-primary" to="/submit" onClick={closeMenu}>
                    M'inscrire
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
