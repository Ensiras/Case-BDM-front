import {Routes} from '@angular/router';
import {RegistrerenFormComponent} from './components/registreren-form/registreren-form.component';
import {RegistrerenSuccesComponent} from './components/registreren-succes/registreren-succes.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {RegistrerenFailComponent} from './components/registreren-fail/registreren-fail.component';
import {ArtikelNieuwComponent} from './components/artikel-nieuw/artikel-nieuw.component';
import {ArtikelNieuwSuccesComponent} from './components/artikel-nieuw-succes/artikel-nieuw-succes.component';
import {ArtikelNieuwFailComponent} from './components/artikel-nieuw-fail/artikel-nieuw-fail.component';

export const routes: Routes = [
  {path: '',
  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registreren', component: RegistrerenFormComponent},
  {path: 'registreren/succes', component: RegistrerenSuccesComponent},
  {path: 'registreren/error', component: RegistrerenFailComponent},
  {path: 'artikelen/nieuw', component: ArtikelNieuwComponent},
  {path: 'artikelen/nieuw/succes', component: ArtikelNieuwSuccesComponent},
  {path: 'artikelen/nieuw/error', component: ArtikelNieuwFailComponent},
  {path: '**', component: NotFoundComponent}
];
