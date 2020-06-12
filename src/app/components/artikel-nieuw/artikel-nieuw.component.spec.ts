import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelNieuwComponent } from './artikel-nieuw.component';
import anything = jasmine.anything;

describe('ArtikelNieuwComponent', () => {
  let component: ArtikelNieuwComponent;
  let fixture: ComponentFixture<ArtikelNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelNieuwComponent ]
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
    component.ArtikelForm.controls.soort.setValue('Product');
    component.setFormFields();
    expect(component.bezorgwijzenGebruiker).toBeTruthy();
  });

  it('when artikelSoort is dienst bezorgwijzen should be undefined', () => {
    component.ArtikelForm.controls.soort.setValue('Dienst');
    component.setFormFields();
    expect(component.bezorgwijzenGebruiker).toBeFalsy();
  });
});
