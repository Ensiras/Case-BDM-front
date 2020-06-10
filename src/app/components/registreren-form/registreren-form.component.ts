import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrerenGebruikerService} from '../../services/registreren-gebruiker.service';
import {Gebruiker} from '../../models/gebruiker';
import {validateEmail} from '../../validators/email-validator';

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

  adresVerplicht = false;
  gebruikers: Gebruiker[];

  constructor(private registrerenGebruikerService: RegistrerenGebruikerService) {
  }

  ngOnInit(): void {
  }

  setAdresVerplicht() {
    this.adresVerplicht = !this.adresVerplicht;
    /*this.adresForm.controls.adresStraat.setValidators(Validators.required);*/
  }


  registreerGebruiker() {
    this.gebruikers = this.registrerenGebruikerService.registreerGebruiker(this.registerForm.value);
  }
}
