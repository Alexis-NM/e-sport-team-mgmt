import { Component, Input } from '@angular/core';
import { Team } from '../../../../models/team';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CardTeamComponent {
  @Input() team!: Team;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/team', this.team.idTeam]);
  }
}
