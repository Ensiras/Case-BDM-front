import {ArtikelSoort} from './categorie-soort.enum';
import {Categorie} from './categorie';

export interface ArtikelInput {
  id: number;
  gebruikerId: number;
  soort: ArtikelSoort;
  naam: string;
  prijs: number;
  categorie: Categorie;
  omschrijving: string;
  bezorgAfhalenThuis: boolean;
  bezorgAfhalenMagazijn: boolean;
  bezorgVersturenVooruit: boolean;
  bezorgVersturenRembours: boolean;
  bijlagen: string[];
}
