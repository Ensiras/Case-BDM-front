import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrerenGebruikerService {

  url = 'http://localhost:9080/gebruikers/nieuw';
  gebruikers: Gebruiker[] = [];

  constructor(private httpClient: HttpClient) {
  }

  registreerGebruiker(gebruiker: Gebruiker) {
    console.log('Registeren gebruiker met email: ' + gebruiker.email);
    delete gebruiker.emailCheck; // TODO: zorgen dat dit niet meer nodig is.
    const objectObservable = this.httpClient.post<Gebruiker>(this.url, gebruiker);
    objectObservable.subscribe();
    return this.gebruikers;
  }

  // FIXME: als ik tijd overheb proberen te controleren of een email al bekend is.
  private async checkReponse(objectObservable: Observable<HttpResponse<Gebruiker>>) {
    console.log('checking response');
    await objectObservable.subscribe(resp => {
      status = resp.headers.get(status);
    });
    console.log(status);
    if (status === '400') {
      console.log('Email already exists.');
    }
  }
}
