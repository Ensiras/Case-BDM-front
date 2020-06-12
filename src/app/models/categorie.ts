import {ArtikelSoort} from './categorie-soort.enum';

export interface Categorie {
  categorieNaam: string;
  categorieSoort: ArtikelSoort;
  categorieOmschrijving: string;
}
