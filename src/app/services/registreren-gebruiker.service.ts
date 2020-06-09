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

  registreerGebruiker(userInput: Gebruiker) {
    console.log('Registeren gebruiker met email: ' + userInput.email);
    this.gebruikers.push(userInput);
    delete userInput.emailCheck;
    const gebruiker = new Gebruiker();
    gebruiker.email = userInput.email;
    gebruiker.straat = userInput.straat;
    gebruiker.bezorgAfhalenMagazijn = userInput.bezorgAfhalenMagazijn;
    gebruiker.bezorgAfhalenThuis = userInput.bezorgAfhalenThuis;
    gebruiker.bezorgVersturenRembours = userInput.bezorgVersturenRembours;
    gebruiker.bezorgVersturenVooruit = userInput.bezorgVersturenVooruit;
    gebruiker.huisnummer = userInput.huisnummer;
    gebruiker.postcode = userInput.postcode;
    gebruiker.stad = userInput.stad;
    gebruiker.akkoordVoorwaarden = userInput.akkoordVoorwaarden;

    /*let objectObservable = this.httpClient.get(this.url, {responseType: 'text'});
    objectObservable.subscribe(msg => console.log(msg));*/
    const objectObservable = this.httpClient.post(this.url, gebruiker, {responseType: 'json'});
    objectObservable.subscribe(gebr => this.gebruikers.push());
    return this.gebruikers;
  }

  /*console.log('GebruikerService: registreergebruiker');
  for (const key of Object.keys(userInput)) {
    const propName = userInput[key];
    console.log(key + ': ' + propName);
  }
  const gebruikerObservable = this.httpClient.post<Gebruiker>(this.url, userInput);
  gebruikerObservable.subscribe();
}*/
}
