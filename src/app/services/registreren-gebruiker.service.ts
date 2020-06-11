import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrerenGebruikerService {

  url = 'http://localhost:9080/gebruikers/nieuw';
  gebruikers: Gebruiker[] = [];
  private status: string;

  constructor(private httpClient: HttpClient) {
  }

  registreerGebruiker(gebruiker: Gebruiker) {
    console.log('Registeren gebruiker met email: ' + gebruiker.email);
    return this.httpClient.post<Gebruiker>(this.url, gebruiker)
      .pipe(
        tap(_ => console.log('Gebruiker posted.')));
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
