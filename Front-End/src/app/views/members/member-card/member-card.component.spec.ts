import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberCardComponent } from './member-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Player } from '../../../models/player';

describe('MemberCardComponent', () => {
  let component: MemberCardComponent;
  let fixture: ComponentFixture<MemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MemberCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberCardComponent);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    const dummyPlayer: Player = {
      country: 'Pays mis à jour',
      firstname: 'Prénom mis à jour',
      id: 1,
      lastname: 'Nom de famille mis à jour',
      nickname: 'Surnom mis à jour',
      photo: 'photoA.png',
      role: 'Rôle A',
      game: {
        bannerimg: 'bannerA.png',
        img: 'gameA.png',
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
          bannerimg: 'bannerA.png',
          img: 'gameA.png',
          name: 'Jeu A',
          pegi: 12,
          styles: [{ style: 'Style A' }],
          year: 2021,
        },
        players: [],
        staff: [],
      },
    };
    component.member = dummyPlayer;
    component.memberType = 'players';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("devrait activer le mode d'édition lorsque le bouton d'édition est cliqué", () => {
    const dummyPlayer: Player = {
      country: 'Pays mis à jour',
      firstname: 'Prénom mis à jour',
      id: 1,
      lastname: 'Nom de famille mis à jour',
      nickname: 'Surnom mis à jour',
      photo: 'photoA.png',
      role: 'Rôle A',
      game: {
        bannerimg: 'bannerA.png',
        img: 'gameA.png',
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
          bannerimg: 'bannerA.png',
          img: 'gameA.png',
          name: 'Jeu A',
          pegi: 12,
          styles: [{ style: 'Style A' }],
          year: 2021,
        },
        players: [],
        staff: [],
      },
    };
    component.member = dummyPlayer;
    component.memberType = 'players';
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.edit-button'));
    editButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isEditing).toBe(true);
    const form = fixture.debugElement.query(By.css('.member-infos-form'));
    expect(form).not.toBeNull();
  });

  it("devrait enregistrer les modifications et désactiver le mode d'édition lorsque le bouton de sauvegarde est cliqué", () => {
    const dummyPlayer: Player = {
      country: 'Pays mis à jour',
      firstname: 'Prénom mis à jour',
      id: 1,
      lastname: 'Nom de famille mis à jour',
      nickname: 'Surnom mis à jour',
      photo: 'photoA.png',
      role: 'Rôle A',
      game: {
        bannerimg: 'bannerA.png',
        img: 'gameA.png',
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
          bannerimg: 'bannerA.png',
          img: 'gameA.png',
          name: 'Jeu A',
          pegi: 12,
          styles: [{ style: 'Style A' }],
          year: 2021,
        },
        players: [],
        staff: [],
      },
    };
    component.member = dummyPlayer;
    component.memberType = 'players';
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.edit-button'));
    editButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    component.memberForm.setValue({
      firstname: 'Prénom mis à jour',
      lastname: 'Nom de famille mis à jour',
      nickname: 'Surnom mis à jour',
      country: 'Pays mis à jour',
    });

    const saveButton = fixture.debugElement.query(
      By.css('.member-infos-form button[type="submit"]')
    );
    saveButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isEditing).toBe(true);
    expect(component.member.firstname).toBe('Prénom mis à jour');
    expect(component.member.lastname).toBe('Nom de famille mis à jour');
    expect(component.member.nickname).toBe('Surnom mis à jour');
    expect(component.member.country).toBe('Pays mis à jour');
  });

  it('devrait afficher les détails du membre correctement', () => {
    const dummyPlayer: Player = {
      country: 'Pays mis à jour',
      firstname: 'Prénom mis à jour',
      id: 1,
      lastname: 'Nom de famille mis à jour',
      nickname: 'Surnom mis à jour',
      photo: 'photoA.png',
      role: 'Rôle A',
      game: {
        bannerimg: 'bannerA.png',
        img: 'gameA.png',
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
          bannerimg: 'bannerA.png',
          img: 'gameA.png',
          name: 'Jeu A',
          pegi: 12,
          styles: [{ style: 'Style A' }],
          year: 2021,
        },
        players: [],
        staff: [],
      },
    };
    component.member = dummyPlayer;
    component.memberType = 'players';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const memberName = compiled.querySelector('.name-title');
    const memberCountry = compiled.querySelector(
      '.member-infos-text p:nth-child(1)'
    );
    const memberFirstName = compiled.querySelector(
      '.member-infos-text p:nth-child(2)'
    );
    const memberNickname = compiled.querySelector(
      '.member-infos-text p:nth-child(3)'
    );

    expect(memberName?.textContent).toContain(
      'Prénom mis à jour Nom de famille mis à jour'
    );
    expect(memberCountry?.textContent).toContain('Pays mis à jour');
    expect(memberFirstName?.textContent).toContain(
      'Prénom mis à jour | Nom de famille mis à jour'
    );
    expect(memberNickname?.textContent).toContain('Surnom mis à jour');
  });
});
