import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerenFormComponent } from './registreren-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegistrerenGebruikerService} from '../../services/registreren-gebruiker.service';
import {RouterModule} from '@angular/router';
import {routes} from '../../app.routes';

describe('RegistrerenFormComponent', () => {
  let component: RegistrerenFormComponent;
  let fixture: ComponentFixture<RegistrerenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerenFormComponent ],
      // Needed for running tests
      imports: [HttpClientTestingModule, RouterModule.forRoot(routes)],
      providers: [RegistrerenGebruikerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initially adres should not be required', () => {
    const validStraat = component.registerForm.controls.straat.valid;
    const validHuisnummer = component.registerForm.controls.huisnummer.valid;
    const validPostcode = component.registerForm.controls.postcode.valid;
    const validStad = component.registerForm.controls.stad.valid;

    expect(validStraat).toBeTrue();
    expect(validHuisnummer).toBeTrue();
    expect(validPostcode).toBeTrue();
    expect(validStad).toBeTrue();
  });

  it('adres should be required when thuis afhalen is supported', () => {
    component.setAdresVerplicht();
    const validStraat = component.registerForm.controls.straat.valid;
    const validHuisnummer = component.registerForm.controls.huisnummer.valid;
    const validPostcode = component.registerForm.controls.postcode.valid;
    const validStad = component.registerForm.controls.stad.valid;

    expect(validStraat).toBeFalse();
    expect(validHuisnummer).toBeFalse();
    expect(validPostcode).toBeFalse();
    expect(validStad).toBeFalse();
  });

  it('adres should not be required after unchecking bezorgAfhalenThuis checkbox', () => {
    component.setAdresVerplicht(); // fired by click event
    component.setAdresVerplicht(); // fired by click event again

    const validStraat = component.registerForm.controls.straat.valid;
    const validHuisnummer = component.registerForm.controls.huisnummer.valid;
    const validPostcode = component.registerForm.controls.postcode.valid;
    const validStad = component.registerForm.controls.stad.valid;

    expect(validStraat).toBeTrue();
    expect(validHuisnummer).toBeTrue();
    expect(validPostcode).toBeTrue();
    expect(validStad).toBeTrue();
  });

  it('when email is valid and akkoordVoorwaarden is checked form should be valid', () => {
    const emailControl = component.registerForm.controls.email;
    const akkoordVoorwaardenControl = component.registerForm.controls.akkoordVoorwaarden;

    emailControl.setValue('valid@email.com');
    akkoordVoorwaardenControl.setValue(true);

    expect(component.registerForm.valid).toBeTrue();
  });

  it('when one adres field is filled in all are required', () => {
    const straatControl = component.registerForm.controls.straat;
    const validHuisnummer = component.registerForm.controls.huisnummer.valid;
    const validPostcode = component.registerForm.controls.postcode.valid;
    const validStad = component.registerForm.controls.stad.valid;

    straatControl.setValue('een waarde');

    expect(validHuisnummer).toBeFalse();
    expect(validPostcode).toBeFalse();
    expect(validStad).toBeFalse();
  });

});
