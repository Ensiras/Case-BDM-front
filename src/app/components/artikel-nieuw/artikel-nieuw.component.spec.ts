import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelNieuwComponent } from './artikel-nieuw.component';
import {GebruikerService} from '../../services/gebruiker.service';
import {CategorieService} from '../../services/categorie.service';
import {ArtikelService} from '../../services/artikel.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ArtikelNieuwComponent', () => {
  let component: ArtikelNieuwComponent;
  let fixture: ComponentFixture<ArtikelNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelNieuwComponent ],
      imports: [HttpClientTestingModule],
      providers: [GebruikerService, CategorieService, ArtikelService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when artikelSoort is product bezorgwijzen should be set', () => {
    component.artikelForm.controls.soort.setValue('Product');
    component.setFormFields();
    expect(component.bezorgwijzenGebruiker).toBeTruthy();
  });

  it('when artikelSoort is dienst bezorgwijzen should be undefined', () => {
    component.artikelForm.controls.soort.setValue('Dienst');
    component.setFormFields();
    expect(component.bezorgwijzenGebruiker).toBeFalsy();
  });

  it('when artikelSoort is product new FormControls should be added', () => {
    component.artikelForm.controls.soort.setValue('Product');
    component.setFormFields();
    expect(component.artikelForm.controls.bezorgAfhalenThuis).toBeTruthy();
  });

  it('when artikelSoort is first Product and then changed to Dienst FormControls should be removed', () => {
    component.artikelForm.controls.soort.setValue('Product');
    component.setFormFields();
    component.artikelForm.controls.soort.setValue('Dienst');
    component.setFormFields();
    expect(component.artikelForm.controls.bezorgAfhalenThuis).toBeFalsy();
  });
});
