import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TeamComponent } from './team.component';
import { TeamsService } from '../../services/teams.service';
import { Team } from '../../models/team';
import { StaffListComponent } from './staff-list/staff-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { CommonModule } from '@angular/common';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let teamsService: jasmine.SpyObj<TeamsService>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    const teamsServiceSpy = jasmine.createSpyObj('TeamsService', ['getById']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        StaffListComponent,
        PlayerListComponent,
        TeamComponent,
      ],
      providers: [
        { provide: TeamsService, useValue: teamsServiceSpy },
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    teamsService = TestBed.inject(TeamsService) as jasmine.SpyObj<TeamsService>;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it("devrait naviguer vers la page d'accueil lors de l'appel à navigateToHome", () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateToHome();

    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });

  it("devrait obtenir l'équipe par son identifiant lors de l'initialisation", () => {
    const dummyTeam: Team = {
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
    };

    teamsService.getById.and.returnValue(of(dummyTeam));

    component.ngOnInit();

    expect(teamsService.getById).toHaveBeenCalledWith(1);
    expect(component.team).toEqual(dummyTeam);
  });

  it("devrait afficher les détails de l'équipe", () => {
    const dummyTeam: Team = {
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
    };

    teamsService.getById.and.returnValue(of(dummyTeam));
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const teamName = compiled.querySelector('.team-title p:nth-child(2)');
    const teamLogo = compiled.querySelector(
      '.team-header-logo'
    ) as HTMLImageElement;

    expect(teamName).not.toBeNull();
    expect(teamName?.textContent).toContain('Équipe A');
    expect(teamLogo).not.toBeNull();
    expect(teamLogo?.src).toContain('logoA.png');
  });
});
