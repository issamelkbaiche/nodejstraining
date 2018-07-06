import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { SprintComponent } from './sprint/sprint.component';
import { NewComponent } from './new/new.component';
import { AuthGuardService } from './auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'sprint', component: SprintComponent, canActivate: [AuthGuardService] },
  { path: 'new', component: NewComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
