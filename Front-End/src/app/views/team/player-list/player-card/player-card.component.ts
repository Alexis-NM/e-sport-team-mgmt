import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input() player!: Player;
  @Input() teamId!: number;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/team', this.teamId, 'player', this.player.idMember]);
  }
}
