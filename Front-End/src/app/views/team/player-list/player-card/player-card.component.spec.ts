import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { PlayerCardComponent } from './player-card.component';
import { Player } from '../../../../models/player';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, PlayerCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait naviguer vers les détails du joueur lors du clic', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const dummyPlayer: Player = {
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
    };

    component.player = dummyPlayer;
    component.teamId = 1;
    fixture.detectChanges();

    component.onClick();

    expect(navigateSpy).toHaveBeenCalledWith([
      '/team',
      component.teamId,
      'players',
      component.player.id,
    ]);
  });

  it('devrait afficher les détails du joueur', () => {
    const dummyPlayer: Player = {
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
    };

    component.player = dummyPlayer;
    component.teamId = 1;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const playerPhoto = compiled.querySelector(
      '.player-photo'
    ) as HTMLImageElement;
    const playerNumberTitle = compiled.querySelector('.player-number-title');
    const playerNickname = compiled.querySelector(
      '.player-info-text li:nth-child(1)'
    );
    const playerRole = compiled.querySelector(
      '.player-info-text li:nth-child(2)'
    );

    expect(playerPhoto).not.toBeNull('L\'élément de la photo du joueur ne doit pas être nul');
    expect(playerNumberTitle).not.toBeNull(
      'L\'élément du titre du numéro du joueur ne doit pas être nul'
    );
    expect(playerNickname).not.toBeNull(
      'L\'élément du surnom du joueur ne doit pas être nul'
    );
    expect(playerRole).not.toBeNull('L\'élément du rôle du joueur ne doit pas être nul');

    if (playerPhoto) {
      expect(playerPhoto.src).toContain(dummyPlayer.photo);
    }

    if (playerNumberTitle) {
      expect(playerNumberTitle.textContent).toContain(
        (dummyPlayer.id + 1).toString()
      );
    }

    if (playerNickname) {
      expect(playerNickname.textContent).toContain(dummyPlayer.nickname);
    }

    if (playerRole) {
      expect(playerRole.textContent).toContain(dummyPlayer.role);
    }
  });
});
