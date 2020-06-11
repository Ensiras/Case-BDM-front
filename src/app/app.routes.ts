import {Routes} from '@angular/router';
import {RegistrerenFormComponent} from './components/registreren-form/registreren-form.component';
import {RegistrerenSuccesComponent} from './components/registreren-succes/registreren-succes.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {path: '',
  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registreren', component: RegistrerenFormComponent},
  {path: 'registreren/succes', component: RegistrerenSuccesComponent},
  {path: '**', component: NotFoundComponent}
];
