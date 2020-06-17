import {Injectable} from '@angular/core';
import {Categorie} from '../models/categorie';
import {ArtikelSoort} from '../models/artikel-soort.enum';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() {
  }

  categorieen: Categorie[];

  getProductCategorieen(): Categorie[] {
    this.getCategorieen();
    return this.filterCategorieen(ArtikelSoort.Product);
  }

  getDienstCategorieen() {
    this.getCategorieen();
    return this.filterCategorieen(ArtikelSoort.Dienst);
  }

  private filterCategorieen(categorieSoort: ArtikelSoort) {
    const categorieenFiltered: Categorie[] = [];
    for (const categorie of this.categorieen) {
      if (categorie.categorieSoort === categorieSoort) {
        categorieenFiltered.push(categorie);
      }
    }
    return categorieenFiltered;
  }

  // Temporary implementation to make available categories without calling backend
  private getCategorieen() {
    const productCategorie1: Categorie =
      {
        categorieNaam: 'Boeken',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'Boeken enzo.'
      };

    const productCategorie2: Categorie =
      {
        categorieNaam: 'Elektronica',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'TV\'s, computers, laptops en dergelijke'
      };

    const productCategorie3: Categorie =
      {
        categorieNaam: 'Muziek',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'CD\'s, LP\'s, etc.'
      };

    const productCategorie4: Categorie =
      {
        categorieNaam: 'Sport',
        categorieSoort: ArtikelSoort.Product,
        categorieOmschrijving: 'Alle sportartikelen'
      };

    const dienstCategorie1: Categorie = {
      categorieNaam: 'Bijles',
      categorieSoort: ArtikelSoort.Dienst,
      categorieOmschrijving: 'Bijles nodig?'
    };

    const dienstCategorie2: Categorie =
      {
        categorieNaam: 'Coaching',
        categorieSoort: ArtikelSoort.Dienst,
        categorieOmschrijving: 'Lifestyle, carrière, sport, enz.'
      };

    const dienstCategorie3: Categorie = {
      categorieNaam: 'Klussen',
      categorieSoort: ArtikelSoort.Dienst,
      categorieOmschrijving: 'Kleine klusjes rond het huis, enz.'
    };

    const dienstCategorie4: Categorie =
      {
        categorieNaam: 'Vertalen',
        categorieSoort: ArtikelSoort.Dienst,
        categorieOmschrijving: 'Iets laten vertalen, klik hier!'
      };

    this.categorieen = [productCategorie1, productCategorie2, productCategorie3, productCategorie4,
      dienstCategorie1, dienstCategorie2, dienstCategorie3, dienstCategorie4];
    this.categorieen = this.categorieen.sort();
  }
}
