import {Injectable} from '@angular/core';
import {Gebruiker} from '../models/gebruiker';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor() {
  }

  // Basic gebruiker object for simulating logged in state.
  gebruikerDummy = {
    id: 1,
    email: 'test@example.com',
    bezorgAfhalenThuis: true,
    bezorgAfhalenMagazijn: false,
    bezorgVersturenVooruit: true,
    bezorgVersturenRembours: false,
    straat: 'teststraat@test.nl',
    huisnummer: '45A',
    postcode: '1321TY',
    stad: 'Apeldoorn',
    akkoordVoorwaarden: true
  };
  huidigeGebruiker: Gebruiker;

  // Temporary function for simulating logged in state (needed for aanbieden artikel)
  login() {
    this.huidigeGebruiker = this.gebruikerDummy;
    return this.huidigeGebruiker;
  }
}
