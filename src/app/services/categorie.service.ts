import {Injectable} from '@angular/core';
import {Categorie} from '../models/categorie';
import {CategorieSoort} from '../models/categorie-soort.enum';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  categorieen: Categorie[];

  getProductCategorieen(): Categorie[] {
    this.getCategorieen();
    return this.filterCategorieen(CategorieSoort.Product);
  }

  private filterCategorieen(categorieSoort: CategorieSoort) {
    const categorieenFiltered: Categorie[] = [];
    for (const categorie of this.categorieen) {
      if (categorie.categorieSoort === categorieSoort) {
        categorieenFiltered.push(categorie);
      }
    }
    return categorieenFiltered;
  }

  getDienstCategorieen() {
    return this.filterCategorieen(CategorieSoort.Dienst);
  }

  // Temporary implementation to make available categories without calling backend
  private getCategorieen() {
    const productCategorie1: Categorie =
      {
        categorieNaam: 'Sport',
        categorieSoort: CategorieSoort.Product,
        categorieOmschrijving: 'Alle sportartikelen'
      };

    const productCategorie2: Categorie =
      {
        categorieNaam: 'Muziek',
        categorieSoort: CategorieSoort.Product,
        categorieOmschrijving: 'CD\'s, LP\'s, etc.'
      };

    const productCategorie3: Categorie =
      {
        categorieNaam: 'Elektronica',
        categorieSoort: CategorieSoort.Product,
        categorieOmschrijving: 'TV\'s, computers, laptops en dergelijke'
      };

    const dienstCategorie1: Categorie =
      {
        categorieNaam: 'Coaching',
        categorieSoort: CategorieSoort.Dienst,
        categorieOmschrijving: 'Lifestyle, carrière, sport, enz.'};

    const dienstCategorie2: Categorie =
      {
        categorieNaam: 'Vertalen',
        categorieSoort: CategorieSoort.Dienst,
        categorieOmschrijving: 'Iets laten vertalen, klik hier!'};

    this.categorieen = [productCategorie1, productCategorie2, productCategorie3, dienstCategorie1, dienstCategorie2];
  }
}
