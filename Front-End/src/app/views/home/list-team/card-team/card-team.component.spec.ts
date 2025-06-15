import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardTeamComponent } from './card-team.component';
import { Team } from '../../../../models/team';
import { Game } from '../../../../models/game';
import { of } from 'rxjs';

describe('CardTeamComponent', () => {
  let component: CardTeamComponent;
  let fixture: ComponentFixture<CardTeamComponent>;
  let router: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTeamComponent, CommonModule],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTeamComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    component.team = {
      id: 1,
      logo: 'logo.png',
      team: 'Team 1',
      maxplayers: 5,
      game: {
        name: 'Game 1',
        bannerimg: 'banner.png',
        img: 'img.png',
        pegi: 3,
        styles: [],
        year: 2022
      },
      staff: [],
      players: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to team details page when clicked', () => {
    const team: Team = {
      id: 1,
      logo: 'logo.png',
      team: 'Team 1',
      maxplayers: 5,
      game: {
        name: 'Game 1',
        bannerimg: 'banner.png',
        img: 'img.png',
        pegi: 3,
        styles: [],
        year: 2022
      },
      staff: [],
      players: []
    };
    component.team = team;
    fixture.detectChanges();

    component.onClick();

    expect(router.navigate).toHaveBeenCalledWith(['/team', team.id]);
  });
});