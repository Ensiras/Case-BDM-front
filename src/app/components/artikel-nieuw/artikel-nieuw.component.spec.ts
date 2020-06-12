import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelNieuwComponent } from './artikel-nieuw.component';

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
});
