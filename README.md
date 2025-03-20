# Application Docker - CRUD avec FastAPI, React et SQLite

Application full-stack de gestion des fournisseurs (CRUD des données des fournisseurs : ), comprenant deux conteneurs **Docker** (Backend + Frontend). Elle utilise FastAPI pour le backend, React pour le frontend, SQLite pour la base de données et Docker pour la gestion des conteneurs.

## Pourquoi ce choix de technologies ?
- **FastAPI** : Est un framework moderne, rapide et asynchrone pour construire des APIs en Python.
- **React** : Une des bibliothèques JavaScript les plus populaires pour créer des interfaces utilisateur.
- **SQLite** : Moteur de bdd simple/léger, parfait pour des applications de petite taille.
- **Tabler** : Kit d'interface utilisateur basé sur Bootstrap 5, avec des composants réactifs et des mises en page variées.
- **Docker** : Simplifie la configuration et le déploiement sur différents environnements.

## Aperçu de l'architecture
Ci-dessous un diagramme illustrant l'architecture du projet :  
![Architecture du projet](https://github.com/Ashiiko/Docker/blob/main/schema-architecture.png)

--- 

# Comment utiliser ce modèle ?
1. Clonez le dépôt.
2. Lancez l'application avec Docker :
```
docker compose up --build -d
```

---

# Gestion de la base de données
La base de données SQLite est persistante grâce à l'utilisation d'un volume Docker. Vous pouvez trouver le fichier `sql_app.db` dans le dossier `backend/data`.

---

# Backend
## Structure des dossiers
```
|- backend
|--- app
|------ __init__.py
|------ database.py   # Fichier de configuration de SQLite, moteur SQLAlchemy, Base, SessionLocal
|------ main.py       # Point d'entrée de l'application FastAPI
|------ models.py     # Modèles SQLAlchemy
|--- routers
|------ __init__.py
|------ vendors.py    # Routeu/CRUD permettant de gérer les fournisseurs
|--- data
|------ sql_app.db    # Fichier de bdd SQLite
|--- dockerfile       # Dockerfile pour containeriser l'application FastAPI
|--- requirements.txt # Dépendances Python
```

## Fichiers importants
- **database.py** : Configuration de la base de données SQLite et du moteur SQLAlchemy. Définit également `SessionLocal` pour la gestion des sessions et `Base` pour les modèles.
- **main.py** : Point d'entrée principal de l'application FastAPI, où les routes API sont définies.
- **models.py** : Définit les modèles de base de données avec SQLAlchemy.
- **vendors.py** : Contient les opérations CRUD pour la ressource "fournisseur" avec FastAPI et SQLAlchemy.
- **sql_app.db** : Fichier de base de données SQLite où toutes les données sont stockées.
- **dockerfile** : Définit comment containeriser l'application FastAPI avec Docker.

---

# Frontend
## Structure des dossiers
```
|- frontend
|--- package.json
|--- package-lock.json
|--- dockerfile
|--- src
|------ app.js             # Routes de l'application
|------ index.js           # Point d'entrée de l'appli React
|------ Dashboard.js       # Liste des fournisseurs
|------ components
|--------- ConfirmForm.js  # Formulaire de confirmation de suppression d'un fournisseur
|--------- FournForm.js    # Formulaire de création/modification un fournisseur
|--------- FournTable.js   # Tableau des fournisseurs
|--- public
|------ index.html         # Inclut le CSS et la logique de base html
|------ dist               
|------ favicon            # Fichiers d'icones de l'outil
```

## Description
- **Dashboard.js** utilise **FournTable.js** pour afficher un tableau des fournisseurs.  
- Le bouton "Ajouter un fournisseur" ouvre **FournForm.js**, utilisé pour créer ou modifier un fournisseur.  
- Le bouton "Supprimer" ouvre **ConfirmForm.js** pour confirmer la suppression.  
- Le frontend utilise le thème "Tabler". Pour plus d'informations -> [Tabler](https://tabler.io/admin-template).
