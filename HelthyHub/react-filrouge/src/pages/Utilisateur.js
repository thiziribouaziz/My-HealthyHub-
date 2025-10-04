import React from 'react';

const Utilisateur = () => (
  <>
      <div className='utilisateur-class'>
        <h1>Espace Utilisateur</h1>
      </div>
      <hr />
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <button className="btn-primary2" id='adminbutton' type="button">Modifier mon compte </button>
        <button className="btn-primary2" id='adminbutton' type="submit">Supprimer mon compte </button>
      </div>

  </>
);

export default Utilisateur;
