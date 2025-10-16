# m2-confiance-en-soi-docker

📦 Application Express (Node.js) à dockeriser !

Dans cette branche, tu trouveras une proposition de `Dockerfile` pour la partie API, un `Dockerfile` pour la partie front et un fichier `compose.yaml` qui permet la bonne synchronisation des différents containers.

> Disclaimer: Il est possible que ton code soit différent et c'est OK ! Plusieurs solutions sont possibles, à toi de les comparer !

## Comment démarrer le projet ?

- Clone le projet sur son ordinateur
- Place toi à la racine du dossier cloné
- Execute la commande `cp .env.dist .env` à la racine du projet et pense à changer le mot de passe de la BDD avec celui de ton choix
- Enlève le commentaire explicatif dans ton `.env` à côté de la variable `MYSQL_HOST` (pour ne garder que `MYSQL_HOST=database`)
- Te placer dans le dossier `api`
- Execute la commande `cp .env.dist .env` à la racine du projet et pense à changer le mot de passe de la BDD avec celui de ton choix
- Enlève le commentaire explicatif dans ton `.env` à côté de la variable `MYSQL_HOST` (pour ne garder que `MYSQL_HOST=database`)
- `docker compose up` pour démarrer le projet

> 🚧 A améliorer: Il existe deux fichiers `.env` identiques : l'un utilisé par l'API, l'autre utilisé par Docker.

## Comment tester le projet ?

Tu peux alors ouvrir sur un navigateur (ou [Postman](https://www.postman.com/) / [HTTPie](https://httpie.io/) / [Bruno](https://www.usebruno.com/) selon ta préférence) et accéder aux deux URLs suivantes :

Pour les routes de l'API

- http://localhost:7777/affirmation/en
- http://localhost:7777/affirmation/fr

> 💡 Tu as remarqué ? L'application démarre sur le port 8888 du container, qui communique avec la machine hôte (ton ordinateur) via le port 7777! Les ports sont définis dans le fichier .env

Pour l'unique route du front

- http://localhost:3000
