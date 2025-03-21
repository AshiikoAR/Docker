# Application Docker - CRUD avec FastAPI, React et SQLite

Application full-stack de gestion des fournisseurs (CRUD des données des fournisseurs), comprenant deux conteneurs **Docker** (Backend + Frontend). Elle utilise FastAPI pour le backend, React pour le frontend, SQLite pour la base de données et Docker pour la gestion des conteneurs.

---

## Fonctionnalités de l'application
L'application permet de :
- Ajouter un fournisseur avec des informations telles que le nom, l'adresse et le contact.
- Modifier les informations d'un fournisseur existant.
- Supprimer un fournisseur après confirmation.
- Afficher une liste des fournisseurs dans un tableau interactif.
- Rechercher un fournisseur par nom ou autre critère.
- Persister les données dans une base SQLite.

---

## Pourquoi ce choix de technologies ?
- **FastAPI** : Framework moderne, rapide et asynchrone pour construire des APIs en Python.
- **React** : Bibliothèque JavaScript populaire pour créer des interfaces utilisateur dynamiques.
- **SQLite** : Moteur de base de données léger, parfait pour des applications de petite taille.
- **Tabler** : Kit d'interface utilisateur basé sur Bootstrap 5, avec des composants réactifs et des mises en page variées.
- **Docker** : Simplifie la configuration et le déploiement sur différents environnements.

---

## Documentation technique
### Points d'attention
1. **Backend** :
   - La base de données SQLite est persistante grâce à un volume Docker. Assurez-vous que le dossier `backend/data` est correctement monté pour éviter toute perte de données.
   - Les dépendances Python sont listées dans `requirements.txt`. Toute nouvelle dépendance doit y être ajoutée.

2. **Frontend** :
   - Le frontend utilise le thème "Tabler". Si vous souhaitez personnaliser le style, modifiez les fichiers CSS dans le dossier `public`.
   - Les composants React sont organisés dans le dossier `src/components`.

3. **Docker** :
   - Les conteneurs sont définis dans le fichier `docker-compose.yml`. Vérifiez les ports exposés pour éviter les conflits avec d'autres applications.

---

## Étapes pour installer le projet
1. **Prérequis** :
   - Installer [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/).
   - (Optionnel) Installer Python 3.9+ et Node.js si vous souhaitez exécuter les services localement sans Docker.

2. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/AshiikoAR/Docker.git
   cd Docker
   ```

3. **Lancer l'application avec Docker** :
   ```bash
   docker compose up --build -d
   ```

4. **Accéder à l'application** :
   - **Backend** : Accessible à l'adresse `http://localhost:8000/docs` pour la documentation Swagger.
   - **Frontend** : Accessible à l'adresse `http://localhost:3000`.

5. **Gestion de la base de données** :
   - Le fichier SQLite `sql_app.db` est situé dans le dossier `backend/data`. Vous pouvez l'explorer avec un outil comme [DB Browser for SQLite](https://sqlitebrowser.org/).

6. **Arrêter les conteneurs** :
   ```bash
   docker compose down
   ```

---

## Aperçu de l'architecture
Ci-dessous un diagramme illustrant l'architecture du projet :  
![Architecture du projet](https://github.com/AshiikoAR/Docker/blob/main/schema-architecture.png)

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
|------ vendors.py    # Routeur CRUD permettant de gérer les fournisseurs
|--- data
|------ sql_app.db    # Fichier de bdd SQLite
|--- dockerfile       # Dockerfile pour containeriser l'application FastAPI
|--- requirements.txt # Dépendances Python
```

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
|--------- FournForm.js    # Formulaire de création/modification d'un fournisseur
|--------- FournTable.js   # Tableau des fournisseurs
|--- public
|------ index.html         # Inclut le CSS et la logique de base html
|------ dist               
|------ favicon            # Fichiers d'icônes de l'outil
```

## Description
- **Dashboard.js** utilise **FournTable.js** pour afficher un tableau des fournisseurs.  
- Le bouton "Ajouter un fournisseur" ouvre **FournForm.js**, utilisé pour créer ou modifier un fournisseur.  
- Le bouton "Supprimer" ouvre **ConfirmForm.js** pour confirmer la suppression.  
- Le frontend utilise le thème "Tabler". Pour plus d'informations -> [Tabler](https://tabler.io/admin-template).
