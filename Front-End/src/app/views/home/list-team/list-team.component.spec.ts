import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TeamListComponent } from './list-team.component';
import { TeamsService } from '../../../services/teams.service';
import { of } from 'rxjs';
import { Team } from '../../../models/team';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
  let teamsService: jasmine.SpyObj<TeamsService>;

  beforeEach(waitForAsync(() => {
    const teamsServiceSpy = jasmine.createSpyObj('TeamsService', ['getAllTeams']);
    teamsServiceSpy.getAllTeams.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [TeamListComponent],
      providers: [
        { provide: TeamsService, useValue: teamsServiceSpy }
      ]
    })
    .compileComponents();

    teamsService = TestBed.inject(TeamsService) as jasmine.SpyObj<TeamsService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait obtenir toutes les équipes lors de l\'initialisation', () => {
    const expectedTeams: Team[] = [
      {
        id: 1,
        logo: 'logo.png',
        team: 'Équipe 1',
        maxplayers: 5,
        game: {
          name: 'Jeu 1',
          bannerimg: 'bannière.png',
          img: 'img.png',
          pegi: 3,
          styles: [],
          year: 2022
        },
        staff: [],
        players: []
      },
      {
        id: 2,
        logo: 'logo.png',
        team: 'Équipe 2',
        maxplayers: 5,
        game: {
          name: 'Jeu 1',
          bannerimg: 'bannière.png',
          img: 'img.png',
          pegi: 3,
          styles: [],
          year: 2022
        },
        staff: [],
        players: []
      }
    ];
    teamsService.getAllTeams.and.returnValue(of(expectedTeams));

    component.ngOnInit();

    expect(teamsService.getAllTeams).toHaveBeenCalled();
    expect(component.teams).toEqual(expectedTeams);
  });
});
