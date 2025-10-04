import React from 'react';
import admin from '../img/admin.png';

const Admin = () => (
  <>
      <div className='admin-class'>
        <h1><img src={admin} alt="espace administrateur" className="admin"/>Espace Administrateur</h1>
      </div>
      <hr />
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <h2> Gestion des utilisateurs </h2>
        </div>
        <div className='div123'>
        <button className="btn-primary2" id='adminbutton' type="submit">Modifier un utilisateur</button>
        <button className="btn-primary2" id='adminbutton' type="submit">Supprimer un utilisateur</button>
        <button className="btn-primary2" id='adminbutton' type="submit">Afficher les utilisateurs</button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-center">
        <h2> Gestion des vidéos </h2>
        </div>
        <div className='div123'>
        <button className="btn-primary2" id='adminbutton' type="submit">Ajouter une recette</button>
        <button className="btn-primary2" id='adminbutton' type="submit">Supprimer une recette</button>
        <button className="btn-primary2" id='adminbutton' type="submit">Afficher les  recettes</button>
        </div>
  </>
);

export default Admin;
