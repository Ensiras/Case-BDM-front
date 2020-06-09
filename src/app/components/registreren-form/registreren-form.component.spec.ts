import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerenFormComponent } from './registreren-form.component';

describe('RegistrerenFormComponent', () => {
  let component: RegistrerenFormComponent;
  let fixture: ComponentFixture<RegistrerenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerenFormComponent ]
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
});
