import { Game } from './game';
import { Style } from './style';

describe('Game', () => {
  it('devrait créer une instance de Game', () => {
    const styles: Style[] = [{ style: 'Action' }, { style: 'Aventure' }];
    const game = new Game('banniere.jpg', 'jeu.jpg', 'Jeu Exemple', 12, styles, 2023);

    expect(game).toBeTruthy();
  });

  it('devrait avoir les propriétés correctes', () => {
    const banniereimg = 'banniere.jpg';
    const img = 'jeu.jpg';
    const nom = 'Jeu Exemple';
    const pegi = 12;
    const styles: Style[] = [{ style: 'Action' }, { style: 'Aventure' }];
    const annee = 2023;

    const game = new Game(banniereimg, img, nom, pegi, styles, annee);

    expect(game.bannerimg).toBe(banniereimg);
    expect(game.img).toBe(img);
    expect(game.name).toBe(nom);
    expect(game.pegi).toBe(pegi);
    expect(game.styles).toEqual(styles);
    expect(game.year).toBe(annee);
  });

  it('devrait gérer différentes classifications PEGI', () => {
    const styles: Style[] = [{ style: 'Action' }];
    const classificationsPEGI = [3, 7, 12, 16, 18];

    classificationsPEGI.forEach((classification) => {
      const game = new Game('banniere.jpg', 'jeu.jpg', 'Jeu Exemple', classification, styles, 2023);
      expect(game.pegi).toBe(classification);
    });
  });
});
