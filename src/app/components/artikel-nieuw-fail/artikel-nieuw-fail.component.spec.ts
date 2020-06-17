import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelNieuwFailComponent } from './artikel-nieuw-fail.component';

describe('ArtikelNieuwFailComponent', () => {
  let component: ArtikelNieuwFailComponent;
  let fixture: ComponentFixture<ArtikelNieuwFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelNieuwFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelNieuwFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
