# Full-Stack Authentication System - Frontend

This repository contains the front-end code for a full-stack authentication system built with React, Express, MongoDB, Heroku, and Netlify. The front-end provides a user interface for user registration, login, and authentication.

## Prerequisites

Before running the front-end application, ensure that you have the following installed on your system:

- Node.js

## Getting Started

1. Clone the repository to your local machine:

git clone https://github.com/Josee-Chat/auth-app1.git

2. Navigate to the project directory:

cd auth-app1

3. Install the dependencies:

npm install

4. Configure environment variables:

Create a `.env` file in the root of the project directory and set the following variable:

REACT_APP_API_URL=<backend-api-url>

Replace `<backend-api-url>` with the URL where the backend server is running. For example, `http://localhost:5000` if running locally.

5. Start the application:

npm start


The front-end application will be served on `http://localhost:3000`.

## Deployment

To deploy the front-end application to Netlify, follow these steps:

1. Create a new site on Netlify.
2. Set the build command as `npm run build` and the publish directory as `build`.
3. Set the environment variable `REACT_APP_API_URL` in the Netlify site's settings to the URL of your deployed backend API.
4. Connect the Netlify site to your Git repository and trigger a new build.

## Contributors

Josée La Riccia https://github.com/Josee-Chat

If you would like to contribute to this project, feel free to submit a pull request.

## License

  
  # Système d'authentification Full-Stack - Frontend

Ce dépôt contient le code front-end d'un système d'authentification full-stack construit avec React, Express, MongoDB, Heroku et Netlify. Le front-end fournit une interface utilisateur pour l'enregistrement, la connexion et l'authentification des utilisateurs.

## Prérequis

Avant d'exécuter l'application front-end, assurez-vous d'avoir installé les éléments suivants sur votre système :

- Node.js

## Pour commencer

1. Clonez le dépôt sur votre machine locale :

git clone https://github.com/Josee-Chat/auth-app1.git

2. Accédez au répertoire du projet :

cd auth-app1

3. Installez les dépendances :

npm install

4. Configurez les variables d'environnement :

Créez un fichier `.env` à la racine du répertoire du projet et définissez la variable suivante :

REACT_APP_API_URL=<url-api-back-end>

go


Remplacez `<url-api-back-end>` par l'URL où le serveur back-end est en cours d'exécution. Par exemple, `http://localhost:5000` s'il s'exécute localement.

5. Lancez l'application :

npm start


L'application front-end sera servie sur `http://localhost:3000`.

## Déploiement

Pour déployer l'application front-end sur Netlify, suivez ces étapes :

1. Créez un nouveau site sur Netlify.
2. Définissez la commande de construction (`build command`) comme `npm run build` et le répertoire de publication (`publish directory`) comme `build`.
3. Définissez la variable d'environnement `REACT_APP_API_URL` dans les paramètres du site Netlify avec l'URL de votre API back-end déployée.
4. Connectez le site Netlify à votre dépôt Git et déclenchez une nouvelle construction (`build`).

## Contributeurs
Josée La Riccia https://github.com/Josee-Chat

Si vous souhaitez contribuer à ce projet, n'hésitez pas à soumettre une pull request.

## Licence

