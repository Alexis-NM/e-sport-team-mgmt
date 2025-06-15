import { Player } from './player';
import { Game } from './game';
import { Team } from './team';

describe('Player', () => {
  it('devrait créer une instance de Player', () => {
    const game = new Game('banniere.jpg', 'jeu.jpg', 'Jeu Exemple', 12, [{ style: 'Action' }], 2023);
    const team = new Team(1, 'Equipe Exemple', 'logo.jpg', 10, game, [], []);
    const player = new Player('USA', 'John', 1, 'Doe', 'JD', 'photo.jpg', 'Attaquant', game, team);

    expect(player).toBeTruthy();
  });

  it('devrait avoir les propriétés correctes', () => {
    const pays = 'USA';
    const prenom = 'John';
    const id = 1;
    const nom = 'Doe';
    const surnom = 'JD';
    const photo = 'photo.jpg';
    const role = 'Attaquant';
    const game = new Game('banniere.jpg', 'jeu.jpg', 'Jeu Exemple', 12, [{ style: 'Action' }], 2023);
    const team = new Team(1, 'Equipe Exemple', 'logo.jpg', 10, game, [], []);

    const player = new Player(pays, prenom, id, nom, surnom, photo, role, game, team);

    expect(player.country).toBe(pays);
    expect(player.firstname).toBe(prenom);
    expect(player.id).toBe(id);
    expect(player.lastname).toBe(nom);
    expect(player.nickname).toBe(surnom);
    expect(player.photo).toBe(photo);
    expect(player.role).toBe(role);
    expect(player.game).toEqual(game);
    expect(player.team).toEqual(team);
  });

  it('devrait gérer différentes équipes et jeux', () => {
    const jeu1 = new Game('banniere1.jpg', 'jeu1.jpg', 'Jeu Un', 12, [{ style: 'Action' }], 2023);
    const equipe1 = new Team(1, 'Equipe Un', 'logo1.jpg', 10, jeu1, [], []);
    const joueur1 = new Player('USA', 'John', 1, 'Doe', 'JD', 'photo1.jpg', 'Attaquant', jeu1, equipe1);

    const jeu2 = new Game('banniere2.jpg', 'jeu2.jpg', 'Jeu Deux', 16, [{ style: 'Aventure' }], 2024);
    const equipe2 = new Team(2, 'Equipe Deux', 'logo2.jpg', 12, jeu2, [], []);
    const joueur2 = new Player('Canada', 'Jane', 2, 'Smith', 'JS', 'photo2.jpg', 'Défenseur', jeu2, equipe2);

    expect(joueur1.game).toEqual(jeu1);
    expect(joueur1.team).toEqual(equipe1);

    expect(joueur2.game).toEqual(jeu2);
    expect(joueur2.team).toEqual(equipe2);
  });
});
