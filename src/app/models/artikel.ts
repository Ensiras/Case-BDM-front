import {ArtikelSoort} from './artikel-soort.enum';
import {Categorie} from './categorie';

export interface Artikel {
  id: number;
  soort: ArtikelSoort;
  naam: string;
  prijs: number;
  categorie: Categorie;
  omschrijving: string;
  bezorgAfhalenThuis: boolean;
  bezorgAfhalenMagazijn: boolean;
  bezorgVersturenVooruit: boolean;
  bezorgVersturenRembours: boolean;
  gebruikerId: number;
  bijlage: File[];
}
