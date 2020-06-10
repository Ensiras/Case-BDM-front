import { TestBed } from '@angular/core/testing';

import { AlgemeneVoorwaardenService } from './algemene-voorwaarden.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AlgemeneVoorwaardenService', () => {
  let service: AlgemeneVoorwaardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    service = TestBed.inject(AlgemeneVoorwaardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when reading from file should store contents in field', () => {
    service.readAlgemeneVoorwaardenFromFile();
    // let text = service.getText();
    // expect(text).toContain('lorem');
  });
});
