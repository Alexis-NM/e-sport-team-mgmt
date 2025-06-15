# Projet Esport

## Introduction

Ce projet montre un exemple simple de :

- Projet Maven
- Projet Spring Boot avec API REST
- Projet avec Spring JPA

## Pré-requis

### Docker

Installez Docker Desktop sur votre ordinateur :
[Docker Desktop](https://www.docker.com/products/docker-desktop/)

Une fois installé, lancez Docker Desktop. Ensuite, ouvrez un terminal et passez au chapitre suivant pour créer le conteneur Docker.

### Base de données

Assurez-vous d'avoir un serveur de base de données MariaDB via Docker pour créer votre base. Exemple de commande pour créer un conteneur MariaDB (remplacez le mot de passe 'my-SecrEt-PW' par votre mot de passe sécurisé) :

```bash
docker run --detach --name my-mariadb --env MYSQL_ROOT_PASSWORD=my-SecrEt-PW -p 3306:3306 mariadb:latest
```

La commande ci-dessus va :

- Démarrer un container (run)
- En mode détaché (--detach) ce qui fait que vous pourrez fermer le terminal sans arrêter le conteneur
- Nommer le conteneur my-mariadb (--name)
- Passer au conteneur la variable d'environnement MYSQL_ROOT_PASSWORD avec la valeur qui va bien (--env)
- Mapper le port 3306 du host (votre PC) vers le port 3306 du conteneur
- Utiliser mariadb:latest comme image de conteneur pour créer le conteneur

**Note :** Si la création échoue car le port 3306 est déjà utilisé, modifiez le mapping de port de la commande ci-dessus en mettant : 3307:3306

Ensuite, connectez-vous au serveur de base de données via DBeaver (user=root et mot de passe que vous avez défini juste avant) et exécutez les deux fichiers SQL du projet (du dossier sql) pour créer la base de données `esport` :

- esport.sql
- esport_insert.sql

**Attention au port,** si vous l'avez changé pour 3307, il faudra mettre 3307 dans DBeaver. Comprenez bien que le serveur est dans le container et que vous y accédez via le mapping de port.
Le nom de la base de données créée est : `esport`
À noter que le fichier esport.sql va créer également le compte utilisateur `dbuser_esport/dbuser_esport`. En entreprise, on évite de travailler avec le compte root.

## Logs

Conformément à la config du fichier `logback.xml`, les logs seront écrits dans la console.

## Test de l'application

Pour tester, il suffit de lancer la classe `EsportBackApplication` (Run As > Java Application).
Vous trouverez un fichier JSON à la racine qui est une collection Postman pour tester l'application. Importez cette collection dans Postman. À noter que cette collection utilise des variables, il vous faudra donc créer un environnement dans Postman et définir les variables attendues.

## Front-End

Le front-end de ce projet est réalisé en Angular.

### Pré-requis

Assurez-vous d'avoir Node.js et npm installés sur votre machine. Vous pouvez les télécharger et les installer depuis [Node.js](https://nodejs.org/).

### Installation des packages

Ouvrez un terminal, accédez au dossier du projet Angular, et exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

### Lancer l'application

Pour démarrer l'application Angular en mode développement, exécutez la commande suivante :

```bash
ng serve
```

Par défaut, l'application sera accessible sur `http://localhost:4200`.

---

## Aperçu de l'application

### Page gestion d'équipe

![Gestion d'équipe](/docs/page_equipe.png)

### Carte de membre

![Carte de membre](/docs/carte_staff.png)

---

## Contributeurs

- [Alexis NM](https://github.com/Alexis-NM)

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
