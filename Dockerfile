# Étape 1 : Build de l'application React
FROM node:18 AS build
WORKDIR /app

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Lancer la construction du build front-end
RUN npm run build

# Étape 2 : Utiliser NGINX pour héberger le build
FROM nginx:alpine

# Copier le build généré dans le dossier NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
