import {CategorieSoort} from './categorie-soort.enum';

export interface Categorie {
  categorieNaam: string;
  categorieSoort: CategorieSoort;
  categorieOmschrijving: string;
}
