# Application de Gestion d'Équipes E-Sport

## Table des Matières
- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribution](#contribution)
- [Licence](#licence)

## Introduction
Il s'agit d'une application Angular conçue pour gérer des équipes e-sport. L'application permet aux utilisateurs de visualiser des informations détaillées sur les équipes, y compris les joueurs et le personnel, et d'effectuer des opérations CRUD.

## Fonctionnalités
- Voir une liste des équipes e-sport
- Voir des informations détaillées sur chaque équipe
- Voir des informations détaillées sur les membres de l'équipe (joueurs et personnel)
- Modifier les informations des membres de l'équipe
- Navigation entre les différentes vues

## Technologies
- Angular
- TypeScript
- RxJS
- Angular Router
- Angular HttpClient
- Jasmine (pour les tests unitaires)
- Karma (test runner)

## Installation
1. Cloner le dépôt :
   ```
   git clone https://github.com/votre-nom-utilisateur/e-sport-team-management.git
   cd e-sport-team-management
    ```
2. Installer les dépendances :
    ```
    npm install
    ```
3. Démarrer le serveur de développement :
    ```
    npm start
    ```
4. Aller à http://localhost:4200 dans votre navigateur pour voir l’application.

## Utilisation

### Voir les Équipes

- Naviguez vers la page d’accueil pour voir une liste des équipes.
- Cliquez sur une équipe pour voir des informations détaillées sur l’équipe.

### Voir les Membres

- Dans la vue détaillée d’une équipe, cliquez sur un joueur ou un membre du personnel pour voir des informations détaillées.

### Modifier les Membres

- Dans la vue détaillée du membre, cliquez sur l’icône de crayon pour activer l’édition.
- Modifiez les informations et cliquez sur l’icône de disquette pour enregistrer les modifications.

## Contribution

	1.	Forkez le dépôt
	2.	Créez une nouvelle branche (git checkout -b feature-branch)
	3.	Faites vos modifications
	4.	Validez vos modifications (git commit -m 'Ajouter une fonctionnalité')
	5.	Poussez vers la branche (git push origin feature-branch)
	6.	Ouvrez une pull request

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.