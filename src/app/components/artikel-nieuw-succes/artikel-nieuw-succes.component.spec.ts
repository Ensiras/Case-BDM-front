import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelNieuwSuccesComponent } from './artikel-nieuw-succes.component';

describe('ArtikelNieuwSuccesComponent', () => {
  let component: ArtikelNieuwSuccesComponent;
  let fixture: ComponentFixture<ArtikelNieuwSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelNieuwSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelNieuwSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
