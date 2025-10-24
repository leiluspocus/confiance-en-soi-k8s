FROM node:lts-buster-slim

WORKDIR /workdir

ADD . /workdir

# Installer les dépendances du projet (package.json / package-lock.json )
RUN npm install --legacy-peer-deps

# Installation globale de nodemon sur le container
RUN npm install nodemon --legacy-peer-deps

EXPOSE 8888

CMD [ "npm", "start" ]
