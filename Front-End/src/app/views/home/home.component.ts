import { Component } from '@angular/core';
import { TeamListComponent } from './list-team/list-team.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TeamListComponent],
})
export class HomeComponent {}
