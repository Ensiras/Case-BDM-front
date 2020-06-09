import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';
import {Bezorgwijze} from '../models/bezorgwijze.enum';
import {GebruikerSimpelTest} from '../models/gebruiker-simpel-test';

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
    this.gebruikers.push(gebruiker);
    delete gebruiker.emailCheck; // TODO: zorgen dat dit niet meer nodig is.
    // TODO: zorgen dat er daadwerkelijk een Gebruiker opgestuurd wordt, niet alleen de 'waarden van'.
    const objectObservable = this.httpClient.post<Gebruiker>(this.url, gebruiker, {responseType: 'json'});
    objectObservable.subscribe(gebr => this.gebruikers.push());
    return this.gebruikers;
  }
}
