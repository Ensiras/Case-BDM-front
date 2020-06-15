import {TestBed} from '@angular/core/testing';

import {CategorieService} from './categorie.service';
import {Categorie} from '../models/categorie';
import {ArtikelSoort} from '../models/artikel-soort.enum';

describe('CategorieService', () => {
  let service: CategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieService);
    service.categorieen = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return productcategorieen', () => {
    const productCategorie: Categorie =
      {
        categorieNaam: 'Elektronica',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'TV\'s, computers, laptops en dergelijke'
      };

    const dienstCategorie: Categorie =
      {
        categorieNaam: 'Coaching',
        categorieSoort: ArtikelSoort.Dienst,
        categorieOmschrijving: 'Lifestyle, carrière, sport, enz.'};

    service.categorieen = [productCategorie, dienstCategorie];
    const productCategorieen = service.getProductCategorieen();

    expect(productCategorieen).toContain(jasmine.objectContaining(productCategorie));
    expect(productCategorieen).not.toContain(jasmine.objectContaining(dienstCategorie));

  });

  it('should return dienstcategorieen', () => {
    const productCategorie: Categorie =
      {
        categorieNaam: 'Elektronica',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'TV\'s, computers, laptops en dergelijke'
      };

    const dienstCategorie: Categorie =
      {
        categorieNaam: 'Coaching',
        categorieSoort: ArtikelSoort.Dienst,
        categorieOmschrijving: 'Lifestyle, carrière, sport, enz.'};

    service.categorieen = [productCategorie, dienstCategorie];
    const productCategorieen = service.getDienstCategorieen();

    expect(productCategorieen).toContain(jasmine.objectContaining(dienstCategorie));
    expect(productCategorieen).not.toContain(jasmine.objectContaining(productCategorie));
  });
});
