HealthyHub
 
HealthyHub est une application web permettant aux utilisateurs de s’inscrire, se connecter et gérer des recettes. Le projet est constitué de deux parties :

Frontend : React (Webpack, Babel, Sass) déployé sur Netlify
Backend : Node.js + Express + MySQL déployé sur Render
Base de données : MySQL hébergée sur Railway
🚀 Déploiements
Frontend (Netlify) : https://healthy-hub-front.netlify.app
Backend (Render) : https://healthyhub-bdd.onrender.com
Base de données (Railway) : Service MySQL connecté au backend
📂 Structure du projet
HealthyHub/
│
├── backend/
│   ├── index.js           # Serveur Express (API)
│   ├── config/db.js       # Connexion MySQL (Railway ou local)
│   ├── config/dbInit.js   # Création des tables
│   ├── routes/            # Routes Express (auth, recettes)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/         # Pages React (Login, Register, Recettes, etc.)
│   │   ├── index.js       # Entrée React
│   │   └── index.html
│   ├── webpack.config.js  # Config Webpack (build + dev + env)
│   ├── package.json
│   └── _redirects         # Redirection Netlify pour React Router
│
└── README.md
⚙️ Installation en local
1. Cloner le projet
git clone 
cd HealthyHub
2. Backend
cd backend
npm install
Créer un fichier .env :

# Local
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=healthyhub
PORT=5000
Lancer le serveur :

node index.js
👉 API dispo sur http://localhost:5000

3. Frontend
cd frontend
npm install
Créer un fichier .env :

REACT_APP_API_URL=http://localhost:5000
Lancer le front :

npm start
👉 Application dispo sur http://127.0.0.1:9090

🌐 Variables d’environnement
Backend (Render)
DB_HOST : host Railway (ballast.proxy.rlwy.net)
DB_PORT : port Railway (ex: 19309)
DB_USER : user Railway (railway)
DB_PASSWORD : mot de passe Railway
DB_NAME : nom de la base (ex: railway)
PORT : 10000 (Render attribue automatiquement)
Frontend (Netlify)
REACT_APP_API_URL=https://healthyhub-bdd.onrender.com

🔑 Routes principales (API)
Authentification
POST /api/auth/register → inscription
POST /api/auth/login → connexion
Recettes
GET /api/recettes → liste des recettes
POST /api/recettes → ajouter une recette (lié à un utilisateur)

🔥 Particularités techniques
Webpack :

DefinePlugin pour injecter REACT_APP_API_URL côté front
_redirects pour supporter React Router sur Netlify
CORS :

En dev : autorise http://127.0.0.1:9090
En prod : autorise https://healthy-hub-front.netlify.app
Base de données :

Tables users et recettes créées automatiquement via dbInit.js

✅ Checklist pour déployer
Front (Netlify)
Ajouter REACT_APP_API_URL=https://healthyhub-bdd.onrender.com dans Environment Variables
Deploy project without cache
Back (Render)
Ajouter les variables Railway (DB_HOST, DB_USER, etc.)
Déployer → Render détecte le port 10000
Vérifier les logs → ✅ Connexion MySQL réussie
Base (Railway)
Créer une instance MySQL
Copier host, port, user, password, database
Coller dans les variables Render

🧑‍💻 Développement
Frontend : npm start → http://127.0.0.1:9090
Backend : node index.js → http://localhost:5000
BDD : MySQL local ou Railway

📜 Licence
Projet privé – utilisation pédagogique uniquement.
