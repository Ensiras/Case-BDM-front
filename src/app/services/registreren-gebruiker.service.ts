import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';


@Injectable({
  providedIn: 'root'
})
export class RegistrerenGebruikerService {

  url = 'http://localhost:9080/gebruikers/nieuw';

  constructor(private httpClient: HttpClient) {
  }

  registreerGebruiker(gebruiker: Gebruiker) {
    console.log('Registeren gebruiker met email: ' + gebruiker.email);
    return this.httpClient.post<Gebruiker>(this.url, gebruiker);
  }

}
