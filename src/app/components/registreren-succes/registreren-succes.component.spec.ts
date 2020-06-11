import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerenSuccesComponent } from './registreren-succes.component';

describe('RegistrerenSuccesComponent', () => {
  let component: RegistrerenSuccesComponent;
  let fixture: ComponentFixture<RegistrerenSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerenSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerenSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
