import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Artikel} from '../models/artikel';
import {GebruikerService} from './gebruiker.service';
import {Router} from '@angular/router';
import {BijlageService} from './bijlage.service';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor(private httpClient: HttpClient,
              private gebruikerService: GebruikerService,
              private bijlageService: BijlageService,
              private router: Router) {
  }

  url = 'http://localhost:9080/artikelen/nieuw';

  aanbiedenArtikel(artikel: Artikel, bijlage: any) {
    artikel = this.verwerkArtikel(artikel);
    const artikelPromise = this.verstuurArtikel(artikel);

    if (bijlage) {
      artikelPromise.then(response => {
          const artikelId = response.id;
          this.bijlageService.verstuurBijlage(bijlage, artikelId);
        },
        error => console.log(error));
    } else {
      artikelPromise.then(() => {
          this.router.navigate(['artikelen/nieuw/succes']);
        },
        error => console.log(error));
    }
  }

  private verstuurArtikel(artikel: Artikel) {
    return this.httpClient.post<Artikel>(this.url, artikel).toPromise();
  }

  private verwerkArtikel(artikel: Artikel) {
    artikel.gebruikerId = this.gebruikerService.huidigeGebruiker.id;
    artikel.prijs = artikel.prijs.replace(',', '.');
    delete artikel.bijlage;
    return artikel;
  }
}
