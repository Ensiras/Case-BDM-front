import {TestBed} from '@angular/core/testing';

import {GebruikerService} from './gebruiker.service';

describe('GebruikerService', () => {
  let service: GebruikerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GebruikerService);
    service.login(); // Simulating logging in
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add bezorgwijzen to array', () => {
    const expectedBezorgwijzen = [
      {displayName: 'Afhalen thuis', attributeName: 'bezorgAfhalenThuis'},
      {displayName: 'Versturen vooruitbetaald', attributeName: 'bezorgVersturenVooruit'}]; // expected values are from GebruikerDummy
    const bezorgwijzen = service.getBezorgwijzen();
    expect(bezorgwijzen).toEqual(expectedBezorgwijzen);
  });
});
