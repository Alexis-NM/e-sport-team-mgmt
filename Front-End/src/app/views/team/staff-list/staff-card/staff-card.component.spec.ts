import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { StaffCardComponent } from './staff-card.component';
import { Staff } from '../../../../models/staff';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

describe('StaffCardComponent', () => {
  let component: StaffCardComponent;
  let fixture: ComponentFixture<StaffCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, StaffCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait naviguer vers les détails du personnel lors du clic', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const dummyStaff: Staff = {
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

    component.member = dummyStaff;
    component.teamId = 1;
    fixture.detectChanges();

    component.onClick();

    expect(navigateSpy).toHaveBeenCalledWith([
      '/team',
      component.teamId,
      'staff',
      component.member.id,
    ]);
  });

  it('devrait afficher les détails du personnel', () => {
    const dummyStaff: Staff = {
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

    component.member = dummyStaff;
    component.teamId = 1;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const staffPhoto = compiled.querySelector(
      '.staff-photo'
    ) as HTMLImageElement;
    const staffNumberTitle = compiled.querySelector('.staff-number-title');
    const staffNickname = compiled.querySelector(
      '.staff-info-text li:nth-child(1)'
    );
    const staffRole = compiled.querySelector(
      '.staff-info-text li:nth-child(2)'
    );

    expect(staffPhoto).not.toBeNull('L\'élément de la photo du personnel ne doit pas être nul');
    expect(staffNumberTitle).not.toBeNull(
      'L\'élément du titre du numéro du personnel ne doit pas être nul'
    );
    expect(staffNickname).not.toBeNull(
      'L\'élément du surnom du personnel ne doit pas être nul'
    );
    expect(staffRole).not.toBeNull('L\'élément du rôle du personnel ne doit pas être nul');

    if (staffPhoto) {
      expect(staffPhoto.src).toContain(dummyStaff.photo);
    }

    if (staffNumberTitle) {
      expect(staffNumberTitle.textContent).toContain(
        (dummyStaff.id + 1).toString()
      );
    }

    if (staffNickname) {
      expect(staffNickname.textContent).toContain(dummyStaff.nickname);
    }

    if (staffRole) {
      expect(staffRole.textContent).toContain(dummyStaff.role);
    }
  });
});
