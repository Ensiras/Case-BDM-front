import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrerenGebruikerService} from '../../services/registreren-gebruiker.service';
import {Gebruiker} from '../../models/gebruiker';
import {validateEmail} from '../../validators/email-validator';
import {validatePostcode} from '../../validators/postcode-validator';
import {AlgemeneVoorwaardenService} from '../../services/algemene-voorwaarden.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registreren-form',
  templateUrl: './registreren-form.component.html',
  styleUrls: ['./registreren-form.component.css', '../../app.component.css']
})

export class RegistrerenFormComponent implements OnInit {


  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, validateEmail, Validators.maxLength(100)]),
      bezorgAfhalenThuis: new FormControl(),
      bezorgAfhalenMagazijn: new FormControl(),
      bezorgVersturenVooruit: new FormControl(),
      bezorgVersturenRembours: new FormControl(),
      straat: new FormControl({value: '', disabled: true}),
      huisnummer: new FormControl({value: '', disabled: true}),
      postcode: new FormControl({value: '', disabled: true}),
      stad: new FormControl({value: '', disabled: true}),
      akkoordVoorwaarden: new FormControl('', Validators.requiredTrue)
    });

  adresVerplicht = false;
  algemeneVoorwaarden: string;

  constructor(private registrerenGebruikerService: RegistrerenGebruikerService,
              private algemeneVoorwaardenService: AlgemeneVoorwaardenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.algemeneVoorwaarden = this.algemeneVoorwaardenService.getAlgemeneVoorwaarden();
  }

  setAdresVerplicht() {
    this.adresVerplicht = !this.adresVerplicht;
    if (this.adresVerplicht) {
      this.enableAdresControls();
      this.addAdresValidators();

    } else {
      this.disableAdresControls();
      this.removeAdresValidators();
    }
  }

  registreerGebruiker() {
    this.registrerenGebruikerService.registreerGebruiker(this.registerForm.value).
    subscribe(gebruiker => {
        this.router.navigate(['/registreren/succes']);
      },
      error => {
      this.router.navigate(['/registreren/error']);
    });
  }

  private addAdresValidators() {
    // Needed to only iterate through adres controls, no others.
    const adresKeys = ['straat', 'huisnummer', 'postcode', 'stad'];
    for (const key of adresKeys) {
      const adresControl = this.registerForm.get(key);
      if (key === 'postcode') { // postcode is special because it needs 2 validators
        adresControl.setValidators([Validators.required, Validators.maxLength(100), validatePostcode]);
      } else {
        adresControl.setValidators([Validators.required, Validators.maxLength(100)]);
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

  private enableAdresControls() {
    const adresKeys = ['straat', 'huisnummer', 'postcode', 'stad'];
    for (const key of adresKeys) {
      const adresControl = this.registerForm.get(key);
      adresControl.enable();
    }
  }

  private disableAdresControls() {
    const adresKeys = ['straat', 'huisnummer', 'postcode', 'stad'];
    for (const key of adresKeys) {
      const adresControl = this.registerForm.get(key);
      adresControl.disable();
    }
  }

}
