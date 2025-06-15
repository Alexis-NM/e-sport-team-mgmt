import { Component, Input } from '@angular/core';
import { Staff } from '../../../models/staff';
import { CommonModule } from '@angular/common';
import { StaffCardComponent } from './staff-card/staff-card.component';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [CommonModule, StaffCardComponent],
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent {
  @Input() staff: Staff[];
  @Input() teamId!: number;

  constructor() {
    this.staff = [];
  }
}
