## Étape 1 : Construire l'application React
# Utiliser l'image officielle Node.js 18 pour la construction
FROM node:18 AS build-stage  

# Définir le répertoire de travail
WORKDIR /app  

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./  

# Installer les dépendances
RUN npm install 

# Copier tout le contenu du projet dans le conteneur
COPY . .  

# Construire l'application React
RUN npm run build 


## Étape 2 : Servir l'application avec un serveur Node.js
# Utiliser l'image officielle Node.js 18 pour le serveur
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build-stage /app/build ./build  

# Installer globalement le package "serve"
RUN npm install -g serve  

# Commande pour servir l'application
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]  

# Exposer le port 3000 pour le frontend
EXPOSE 3000  