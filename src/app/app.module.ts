import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrerenFormComponent} from './components/registreren-form/registreren-form.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ObservableTestingComponent } from './components/observable-testing/observable-testing.component';
import { RegistrerenSuccesComponent } from './components/registreren-succes/registreren-succes.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrerenFailComponent } from './components/registreren-fail/registreren-fail.component';
import { ArtikelNieuwComponent } from './components/artikel-nieuw/artikel-nieuw.component';
import { ArtikelNieuwSuccesComponent } from './components/artikel-nieuw-succes/artikel-nieuw-succes.component';
import { ArtikelNieuwFailComponent } from './components/artikel-nieuw-fail/artikel-nieuw-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrerenFormComponent,
    ObservableTestingComponent,
    RegistrerenSuccesComponent,
    NotFoundComponent,
    HomeComponent,
    RegistrerenFailComponent,
    ArtikelNieuwComponent,
    ArtikelNieuwSuccesComponent,
    ArtikelNieuwFailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
