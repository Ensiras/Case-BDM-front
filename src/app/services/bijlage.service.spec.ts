import { TestBed } from '@angular/core/testing';

import { BijlageService } from './bijlage.service';

describe('BijlageService', () => {
  let service: BijlageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BijlageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
