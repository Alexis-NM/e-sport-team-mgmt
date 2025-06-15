import { Component, Input } from '@angular/core';
import { Player } from '../../../models/player';
import { PlayerCardComponent } from './player-card/player-card.component';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [PlayerCardComponent],
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent {
  @Input() player: Player[];
  @Input() teamId!: number;

  constructor() {
    this.player = [];
  }
}
