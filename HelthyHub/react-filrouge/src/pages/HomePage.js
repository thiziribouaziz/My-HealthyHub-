import React from 'react';
import photoacceuillarge from '../img/photoacceuillarge.jpg';
import photogrid1 from '../img/photogrid1.jpg';
import photogrid2 from '../img/photogrid2.jpg';
import photogrid3 from '../img/photogrid3.jpg';

const Home = () => (
  <>
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Mangez sain,<br /> vivez bien,<br />
            <span className="yellow">rayonnez</span> <span className="green">chaque jour.</span>
          </h1>
          <p className="hero-sub">
            Rejoignez une communauté qui partage des pratiques alimentaires saines et durables :
            recettes de cuisine, conseils de conservation et hygiène alimentaire.
          </p>
          <a href="http://127.0.0.1:9090/login" className="cta-button">
            C&apos;est parti !
          </a>
        </div>

        <div className="hero-image" aria-hidden="true">
          <img src={photoacceuillarge} alt="" />
        </div>
      </div>
    </div>

    <div className="petiteImages">
      <img src={photogrid2} alt="Assiette healthy" />
      <img src={photogrid1} alt="Préparation de légumes" />
      <img src={photogrid3} alt="Bowl équilibré" />
      <img src={photogrid1} alt="Repas sain" />
      <img src={photogrid2} alt="Ingrédients frais" />
    </div>
  </>
);

export default Home;
