import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';
import { Team } from '../../../models/team';
import { CardTeamComponent } from './card-team/card-team.component';


@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss'],
  standalone: true,
  imports: [CardTeamComponent],
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor(private teamsService: TeamsService) {
    this.teams = [];
  }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
  }
}
