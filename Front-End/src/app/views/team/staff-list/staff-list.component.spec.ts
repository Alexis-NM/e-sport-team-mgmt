import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffListComponent } from './staff-list.component';
import { StaffCardComponent } from './staff-card/staff-card.component';
import { Staff } from '../../../models/staff';
import { CommonModule } from '@angular/common';

describe('StaffListComponent', () => {
  let component: StaffListComponent;
  let fixture: ComponentFixture<StaffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, StaffCardComponent, StaffListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffListComponent);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher une liste de membres du personnel', () => {
    const dummyStaff: Staff[] = [
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

    component.staff = dummyStaff;
    component.teamId = 1;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const staffCards = compiled.querySelectorAll('app-staff-card');

    expect(staffCards.length).toBe(dummyStaff.length);

    staffCards.forEach((card, index) => {
      const staffMember = dummyStaff[index];
      expect(card.querySelector('.staff-number-title')?.textContent).toContain(
        `Staff N° ${staffMember.id + 1}`
      );
      expect(
        card.querySelector('.staff-info-text li:nth-child(1)')?.textContent
      ).toContain(staffMember.nickname);
      expect(
        card.querySelector('.staff-info-text li:nth-child(2)')?.textContent
      ).toContain(staffMember.role);
    });
  });
});
