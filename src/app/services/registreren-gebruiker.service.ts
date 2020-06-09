import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';
import {Bezorgwijze} from '../models/bezorgwijze.enum';

@Injectable({
  providedIn: 'root'
})
export class RegistrerenGebruikerService {

  constructor(private httpClient: HttpClient) { }

  registreerGebruiker(userInput: Gebruiker) {
    console.log('GebruikerService: registreergebruiker');
    for (const key of Object.keys(userInput)) {
      const propName = userInput[key];
      console.log(key + ': ' + propName);
    }



  }
}
