import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerListComponent } from './player-list.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { Player } from '../../../models/player';
import { CommonModule } from '@angular/common';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PlayerCardComponent, PlayerListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher une liste de joueurs', () => {
    const dummyPlayers: Player[] = [
      {
        country: 'Pays A',
        firstname: 'Prénom A',
        id: 1,
        lastname: 'Nom A',
        nickname: 'Surnom A',
        photo: 'photoA.png',
        role: 'Rôle A',
        game: {
          bannerimg: 'bannièreA.png',
          img: 'jeuA.png',
          name: 'Jeu A',
          pegi: 12,
          styles: [{ style: 'Style A' }],
          year: 2021,
        },
        team: {
          id: 1,
          team: 'Équipe A',
          logo: 'logoA.png',
          maxplayers: 5,
          game: {
            bannerimg: 'bannièreA.png',
            img: 'jeuA.png',
            name: 'Jeu A',
            pegi: 12,
            styles: [{ style: 'Style A' }],
            year: 2021,
          },
          players: [],
          staff: [],
        },
      },
      {
        country: 'Pays B',
        firstname: 'Prénom B',
        id: 2,
        lastname: 'Nom B',
        nickname: 'Surnom B',
        photo: 'photoB.png',
        role: 'Rôle B',
        game: {
          bannerimg: 'bannièreB.png',
          img: 'jeuB.png',
          name: 'Jeu B',
          pegi: 16,
          styles: [{ style: 'Style B' }],
          year: 2022,
        },
        team: {
          id: 2,
          team: 'Équipe B',
          logo: 'logoB.png',
          maxplayers: 5,
          game: {
            bannerimg: 'bannièreB.png',
            img: 'jeuB.png',
            name: 'Jeu B',
            pegi: 16,
            styles: [{ style: 'Style B' }],
            year: 2022,
          },
          players: [],
          staff: [],
        },
      },
    ];

    component.players = dummyPlayers;
    component.teamId = 1;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const playerCards = compiled.querySelectorAll('app-player-card');

    expect(playerCards.length).toBe(dummyPlayers.length);

    playerCards.forEach((card, index) => {
      const player = dummyPlayers[index];
      expect(card.querySelector('.player-number-title')?.textContent).toContain(
        `Joueur N° ${player.id + 1}`
      );
      expect(
        card.querySelector('.player-info-text li:nth-child(1)')?.textContent
      ).toContain(player.nickname);
      expect(
        card.querySelector('.player-info-text li:nth-child(2)')?.textContent
      ).toContain(player.role);
    });
  });
});
