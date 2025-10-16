FROM node:lts-buster-slim

WORKDIR /workdir

ADD . /workdir

# Installer les dépendances du projet (package.json / package-lock.json )
RUN yarn install

# Installation globale de nodemon sur le container
RUN yarn global add nodemon

EXPOSE 8888

CMD [ "yarn", "start" ]
