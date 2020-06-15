import {ArtikelSoort} from './artikel-soort.enum';

export interface Categorie {
  categorieNaam: string;
  categorieSoort: ArtikelSoort;
  categorieOmschrijving: string;
}
