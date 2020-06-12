import {TestBed} from '@angular/core/testing';

import {ArtikelService} from './artikel.service';
import {ArtikelInput} from '../models/artikel-input';
import {ArtikelSoort} from '../models/categorie-soort.enum';
import {Artikel} from '../models/artikel';

describe('ArtikelService', () => {
  let service: ArtikelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
