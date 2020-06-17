import {Injectable} from '@angular/core';
import {Gebruiker} from '../models/gebruiker';
import {Bezorgwijze} from '../models/bezorgwijze';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor() {
  }

  // Basic gebruiker object for simulating logged in state.
  gebruikerDummy = {
    id: 1,
    email: 'simulatie@inlog.com',
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

  getBezorgwijzen() {
    if (!this.huidigeGebruiker) {
      this.login(); // For testing purposes, force login if not yet done
    }
    const bezorgwijzen: Bezorgwijze[] = [];
    if (this.huidigeGebruiker.bezorgAfhalenThuis) {
      bezorgwijzen.push({displayName: 'Afhalen thuis', attributeName: 'bezorgAfhalenThuis'});
    }
    if (this.huidigeGebruiker.bezorgAfhalenMagazijn) {
      bezorgwijzen.push({displayName: 'Afhalen magazijn', attributeName: 'bezorgAfhalenMagazijn'});
    }
    if (this.huidigeGebruiker.bezorgVersturenVooruit) {
      bezorgwijzen.push({displayName: 'Versturen vooruitbetaald', attributeName: 'bezorgVersturenVooruit'});
    }
    if (this.huidigeGebruiker.bezorgVersturenRembours) {
      bezorgwijzen.push({displayName: 'Versturen rembours', attributeName: 'bezorgVersturenRembours'});
    }
    return bezorgwijzen;
  }
}
