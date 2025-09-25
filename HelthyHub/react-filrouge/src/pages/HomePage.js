import React from 'react';
import photoacceuillarge from '../img/photoacceuillarge.jpg';
import photogrid1 from '../img/photogrid1.jpg';

const Home = () => (
  <>
    <div className="container">
      <div className="text-content">
      <div className="espaceAcceuil">
        <div className='divAcc'>
        <h1>
          Mangez sain,<br /> vivez bien,<br />
          <span className="yellow">rayonnez</span><br />
          <span className="green">chaque jour.</span>
        </h1>
        <p>
        Rejoignez une communauté qui partage des pratiques alimentaires saines et durables :
        recettes de cuisine, conseils de conservation et hygiène alimentaire.
        </p>
        <a href="http://127.0.0.1:9090/login" className="cta-button">
        C'est parti !
        </a>
        </div>
        <div className='imageacc'>
        { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
        </div>
      </div>
      </div>
    </div>
    { <img src={photogrid1} alt="Healthy food" className="photogrid1" /> }
      { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
        { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
          { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
            { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
              { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
                { <img src={photoacceuillarge} alt="Healthy food" className="photoacceuillarge" /> }
  </>
);

export default Home;
