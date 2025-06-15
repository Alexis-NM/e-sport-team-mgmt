# Introduction

Ce projet montre un exemple simple de :
  - projet Maven 
  - projet Spring Boot avec API REST
  - projet avec Spring JPA

 
# Pré-requis

## Docker
Installez Docker Desktop sur votre ordinateur : 

> [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

- Une fois installé, lancez Docker Desktop.
- Ensuite, ouvrez un terminal et passez au chapitre suivant pour créer le **conteneur docker**.


## Base de données

 1. assurez-vous d'avoir un serveur de base de donnees **mariadb** via docker pour créer votre base. Avec Docker, c'est relativement rapide et simple de créer un serveur de base de données. Exemple de commande pour créer un conteneur mariadb. Remplacez le mot de passe '**my-SecrEt-PW**' ci-dessous par votre mot de passe securisé !

```
    docker run --detach --name my-mariadb --env MYSQL_ROOT_PASSWORD=my-SecrEt-PW -p 3306:3306 mariadb:latest
```

La commande ci-dessus va :

- démarrer un container (run)
- en mode détaché (--detach) ce qui fait que vous pourrez fermer le terminal sans arrêter le conteneur
- nommer le conteneur my-mariadb (--name)
- passer au conteneur la variable d'environnement MYSQL_ROOT_PASSWORD avec la valeur qui va bien (--env)
- mapper le port 3306 du host (votre pc) vers le port 3306 du conteneur
- utiliser [mariadb:latest](https://hub.docker.com/_/mariadb) comme image de conteneur pour créer le conteneur
    - il existe énormément d'images sur le [docker hub](https://hub.docker.com)

> Si la création échoue car le port 3306 est déjà utilisé, cela signifie que vous avez déjà un seveur de base de données à l'écoute sur ce port. Vous pouvez modifier le mapping de port de la commande ci-dessus en mettant : **3307:3306**

 2. ensuite, connectez vous au serveur de base de données via [DBeaver](https://dbeaver.io/) (user=**root** et mot de passe que vous avez défini juste avant) et exécutez les deux fichiers sql du projet (du dossier sql) pour créer la base de données **esport** : 
 
    - esport.sql
    - esport_insert.sql

Attention au port, si vous l'avez changé pour 3307, il faudra mettre 3307 dans DBeaver. Comprenez bien que le serveur est **dans** le container et que vous y accédez via le mapping de port.

Le nom de la base de données créée est : **esport**
    
à noter que le fichier **esport.sql** va créer également le compte utilisateur **dbuser_esport/dbuser_esport**. 
En entreprise, on évite de travailler avec le compte root.



# Logs

Conformément à la config du fichier **logback.xml**, les logs seront écrits dans la console


----------------------------------------------------------------------------------------------------
 
# Test de l'application
Pour tester, il suffit de lancer la classe **EsportBackApplication** (Run As > Java Application)
 
Vous trouverez un fichier json à la racine qui est une collection Postman pour tester l'application. Importez cette collection dans Postman. à noter que cette collection utilise des variables, il vous faudra donc créer un environnement dans Postman et définir les variables attendues.