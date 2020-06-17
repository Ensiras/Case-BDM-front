import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtikelNieuwComponent} from './artikel-nieuw.component';
import {GebruikerService} from '../../services/gebruiker.service';
import {CategorieService} from '../../services/categorie.service';
import {ArtikelService} from '../../services/artikel.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ArtikelNieuwComponent', () => {
  let component: ArtikelNieuwComponent;
  let fixture: ComponentFixture<ArtikelNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtikelNieuwComponent],
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

  // FIXME: bestand.item is not a function?
  it('when bijlage is added should check its type and accept it if it is supported', () => {
    const image = {name: 'test.jpg', type: 'image', size: 1};
    const video = {name: 'test.jpg', type: 'video', size: 1};
    const audio = {name: 'test.jpg', type: 'audio', size: 1};

    const resultImage = component.checkBijlage(image);
    const resultVideo = component.checkBijlage(video);
    const resultAudio = component.checkBijlage(audio);

    expect(resultImage).toBeTrue();
    expect(resultVideo).toBeTrue();
    expect(resultAudio).toBeTrue();
  });

  it('when bijlage is added should check its type and reject it if it is not supported', () => {
    const application = {name: 'test.jpg', type: 'application'};

    const resultApp = component.checkBijlage(application);

    expect(resultApp).toBeFalse();

  });

  it('when bijlage is added should check its size and return true if it is within limits', () => {
    const image = {name: 'test.jpg', type: 'image', size: 10000000};

    const resultImage = component.checkBijlage(image);

    expect(resultImage).toBeTrue();
  });

  it('when bijlage is added should check its size and return false if it is too big', () => {
    const image = {name: 'test.jpg', type: 'image', size: 10000001};

    const resultImage = component.checkBijlage(image);

    expect(resultImage).toBeFalse();
  });

  it('when artikelsoort is product form should be invalid if no bezorgwijze is checked', () => {
    const controls = component.artikelForm.controls;
    controls.soort.setValue('Product');
    component.setFormFields();
    controls.naam.setValue('Testproduct');
    controls.prijs.setValue('10');
    controls.categorie.setValue('Een categorie');
    expect(component.artikelForm.invalid).toBeTrue();
  });

  it('when artikelSoort is product form should be valid if any bezorgwijze is checked', () => {
    const controls = component.artikelForm.controls;
    controls.soort.setValue('Product');
    component.setFormFields();
    controls.naam.setValue('Testproduct');
    controls.prijs.setValue('10');
    controls.categorie.setValue('Een categorie');
    expect(component.artikelForm.invalid).toBeTrue();
  });

});
