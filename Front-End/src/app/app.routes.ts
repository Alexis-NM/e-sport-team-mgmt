import { Routes } from '@angular/router';
import { HomeComponent } from '../app/views/home/home.component';
import { MembersComponent } from './views/members/members.component';
import { TeamComponent } from './views/team/team.component';
import { Page404 } from './views/page404/page404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team/:id', component: TeamComponent },
  {
    path: 'team/:teamId/:memberType/:memberId',
    component: MembersComponent,
  },
  { path: '**', component: Page404 },
];
