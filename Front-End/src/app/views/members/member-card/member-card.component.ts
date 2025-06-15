import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../models/player';
import { Staff } from '../../../models/staff';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() member!: Player | Staff;
  @Input() memberType!: 'player' | 'staff';

  memberForm!: FormGroup;
  isEditing = false; // Variable d'état pour le mode édition

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      firstname: [this.member.firstname, Validators.required],
      lastname: [this.member.lastname, Validators.required],
      nickname: [this.member.nickname, Validators.required],
      country: [this.member.country, Validators.required],
    });
  }

  enableEditing(): void {
    this.isEditing = true;
  }

  saveChanges(): void {
    if (this.memberForm.valid) {
      this.member.firstname = this.memberForm.value.firstname;
      this.member.lastname = this.memberForm.value.lastname;
      this.member.nickname = this.memberForm.value.nickname;
      this.member.country = this.memberForm.value.country;
      console.log('Updated Member:', this.member);
      this.isEditing = false;
    }
  }
}
