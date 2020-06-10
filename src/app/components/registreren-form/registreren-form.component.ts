import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrerenGebruikerService} from '../../services/registreren-gebruiker.service';
import {Gebruiker} from '../../models/gebruiker';
import {validateEmail} from '../../validators/email-validator';
import {validatePostcode} from '../../validators/postcode-validator';

@Component({
  selector: 'app-registreren-form',
  templateUrl: './registreren-form.component.html',
  styleUrls: ['./registreren-form.component.css']
})

export class RegistrerenFormComponent implements OnInit {

  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, validateEmail]),
      bezorgAfhalenThuis: new FormControl(),
      bezorgAfhalenMagazijn: new FormControl(),
      bezorgVersturenVooruit: new FormControl(),
      bezorgVersturenRembours: new FormControl(),
      straat: new FormControl(),
      huisnummer: new FormControl(),
      postcode: new FormControl(),
      stad: new FormControl(),
      akkoordVoorwaarden: new FormControl('', Validators.required)
    });

  private adresVerplicht = false;
  gebruikers: Gebruiker[];

  constructor(private registrerenGebruikerService: RegistrerenGebruikerService) {
  }

  ngOnInit(): void {
  }

  setAdresVerplicht() {
    this.adresVerplicht = !this.adresVerplicht;
    if (this.adresVerplicht) {
      this.addAdresValidators();
    } else {
      this.removeAdresValidators();
    }
  }

  registreerGebruiker() {
    this.gebruikers = this.registrerenGebruikerService.registreerGebruiker(this.registerForm.value);
  }

  private addAdresValidators() {
    // Needed to only iterate through adres controls, no others.
    const adresKeys = ['straat', 'huisnummer', 'postcode', 'stad'];
    for (const key of adresKeys) {
      const adresControl = this.registerForm.get(key);
      if (key === 'postcode') { // postcode is special because it needs 2 validators
        adresControl.setValidators([Validators.required, validatePostcode]);
      } else {
        adresControl.setValidators(Validators.required);
      }
      adresControl.updateValueAndValidity();
    }
  }

  private removeAdresValidators() {
    const adresKeys = ['straat', 'huisnummer', 'postcode', 'stad'];
    for (const key of adresKeys) {
      const adresControl = this.registerForm.get(key);
      adresControl.clearValidators();
      adresControl.updateValueAndValidity();
    }
  }
}
