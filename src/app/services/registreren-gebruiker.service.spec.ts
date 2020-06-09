import { TestBed } from '@angular/core/testing';

import { RegistrerenGebruikerService } from './registreren-gebruiker.service';

describe('RegistrerenGebruikerService', () => {
  let service: RegistrerenGebruikerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrerenGebruikerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
