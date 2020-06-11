import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerenFailComponent } from './registreren-fail.component';

describe('RegistrerenFailComponent', () => {
  let component: RegistrerenFailComponent;
  let fixture: ComponentFixture<RegistrerenFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerenFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerenFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
