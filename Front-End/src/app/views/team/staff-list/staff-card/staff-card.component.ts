import { Component, Input } from '@angular/core';
import { Staff } from '../../../../models/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [],
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss'],
})
export class StaffCardComponent {
  @Input() member!: Staff;
  @Input() teamId!: number;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/team', this.teamId, 'staff', this.member.idMember]);
  }
}
