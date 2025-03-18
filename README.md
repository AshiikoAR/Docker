# Docker

# Task Manager

Création d’une application Docker de type « task manager » comprenant 2 conteneurs (ex : API + FRONTEND), utilisant « Vue.js ».

## Installation

Instructions pour installer le projet.

1. Clonez le dépôt GitHub :
   ```sh
   git clone <URL_DU_DEPOT>
   ```
2. Naviguez dans le répertoire du projet :
   ```sh
   cd Docker
   ```
3. Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.

## Utilisation

Instructions pour utiliser le projet.

1. Démarrez les conteneurs Docker :
   ```sh
   docker-compose up -d
   ```
2. Accédez à l'application frontend via `http://localhost:8080`.
3. L'API est accessible via `http://localhost:3002`.

## Fonctionnalités

- Ajouter une nouvelle tâche
- Mettre à jour une tâche existante
- Supprimer une tâche
- Marquer une tâche comme terminée
- Obtenir une tâche par ID

## Contribuer

Instructions pour contribuer au projet.

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez votre branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## Fichiers Importants

- `docker-compose.yml` : Fichier de configuration pour Docker Compose.
- `.env` : Fichier pour gérer les différentes variables d’environnement.

Le but de cette application pour l’évaluateur est de pouvoir cloner le dépôt de l’application et lancer l’application à l’aide d’un simple « docker compose up -d » comme s’il était un nouveau dév qui intègre l’équipe.