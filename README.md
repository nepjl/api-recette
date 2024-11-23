# api-recette

Documentation de l'API Recette
Table des matières
Introduction
Installation
Configuration
Routes API
Modèles
Middleware
Contrôleurs
Base de données
Démarrage de l'application
Introduction
Cette API permet de gérer des utilisateurs et des recettes. Les utilisateurs peuvent s'inscrire, se connecter et gérer leurs recettes. L'API est construite avec Express.js et utilise MySQL pour la base de données.

Installation
Pour installer les dépendances de l'application, exécutez la commande suivante dans le terminal :

Copier
npm install
Configuration
Avant de démarrer le serveur, vous devez créer un fichier .env à la racine du projet avec les variables suivantes :

Copier
DB_HOST=mysql-prince-junior.alwaysdata.net
DB_USER=373181
DB_PASSWORD=root@root
DB_NAME=prince-junior_recette_cuisine
JWT_SECRET=jwt-token-nepj.1995.12.03@
PORT=9000
Routes API
Utilisateurs
POST /api/users/register : Enregistre un nouvel utilisateur.
POST /api/users/login : Connecte un utilisateur existant.
GET /api/users/profile : Récupère le profil de l'utilisateur connecté (requiert un token JWT).
Recettes
GET /api/recettes : Récupère toutes les recettes.
GET /api/recettes/:id : Récupère une recette par son ID.
POST /api/recettes : Ajoute une nouvelle recette (requiert un token JWT).
PUT /api/recettes/:id : Met à jour une recette par son ID (requiert un token JWT).
DELETE /api/recettes/:id : Supprime une recette par son ID (requiert un token JWT).
Modèles
Les modèles gèrent les interactions avec la base de données. Ils incluent des fonctions pour créer, trouver, mettre à jour et supprimer des utilisateurs et des recettes.

Routes API
Utilisateurs
POST /api/users/register
POST /api/users/login
GET /api/users/profile
Recettes
GET /api/recettes
GET /api/recettes/:id
POST /api/recettes
PUT /api/recettes/:id
DELETE /api/recettes/:id


Utilisateur
creerUtilisateur(...) : Crée un nouvel utilisateur.
trouverUtilisateurParEmail(...) : Récupère un utilisateur par son email.
trouverUtilisateurParId(...) : Récupère un utilisateur par son ID.
Recette
ajouterRecette(...) : Ajoute une nouvelle recette.
recupererToutesRecettes(...) : Récupère toutes les recettes.
recupererRecetteParId(...) : Récupère une recette par son ID.
mettreAJourRecette(...) : Met à jour une recette par son ID.
supprimerRecette(...) : Supprime une recette par son ID.
Middleware
Le middleware authentication vérifie la présence d'un token JWT dans les en-têtes de la requête et valide ce token. Si le token est valide, il permet l'accès aux routes protégées.

Contrôleurs
Les contrôleurs gèrent la logique des routes. Ils appellent les modèles pour effectuer des opérations sur la base de données et renvoient des réponses appropriées.

Utilisateur
registerUser(...) : Gère l'enregistrement d'un nouvel utilisateur.
loginUser(...) : Gère la connexion d'un utilisateur.
getUserProfile(...) : Récupère le profil de l'utilisateur connecté.
Recette
getAllRecettes(...) : Récupère toutes les recettes.
getRecetteById(...) : Récupère une recette par son ID.
createRecette(...) : Crée une nouvelle recette.
updateRecette(...) : Met à jour une recette par son ID.
deleteRecette(...) : Supprime une recette par son ID.
Base de données
La connexion à la base de données est gérée par connexionDB, qui utilise les informations de configuration définies dans le fichier .env.

Démarrage de l'application
Pour démarrer l'application, utilisez la commande suivante :

Copier
npm start
L'application écoutera sur le port défini (par défaut 9000).


