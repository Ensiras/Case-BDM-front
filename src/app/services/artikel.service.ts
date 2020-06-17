import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Artikel} from '../models/artikel';
import {GebruikerService} from './gebruiker.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor(private httpClient: HttpClient,
              private gebruikerService: GebruikerService,
              private router: Router) {
  }

  url = 'http://localhost:9080/artikelen/nieuw';

  // TODO: deze bende refactoren
  aanbiedenArtikel(artikel: Artikel, bijlage: any) {
    console.log('Artikel received!');
    artikel.gebruikerId = this.gebruikerService.huidigeGebruiker.id;
    artikel.prijs = artikel.prijs.replace(',', '.');
    delete artikel.bijlage;
    console.log(artikel);
    const artikelPromise = this.httpClient.post<Artikel>(this.url, artikel).toPromise();
    if (bijlage) {
      artikelPromise.then(response => {
        const artikelId = response.id;
        this.verstuurBijlage(bijlage, artikelId);
      }, error => console.log(error));
    } else {
      artikelPromise.then(() => {
        this.router.navigate(['artikelen/nieuw/succes']);
      }, error => console.log(error));
    }
  }

  private verstuurBijlage(bijlage: any, artikelId: any) {
    const url = this.url + '/bijlage';
    const data = bijlage.item(0);
    const type = bijlage.item(0).type;
    const naam = bijlage.item(0).name;
    console.log('Bijlage ontvangen' + naam + type + data);
    let params = new HttpParams();
    params = params.append('bijlagenaam', naam);
    params = params.append('bijlagetype', type);
    params = params.append('artikelid', artikelId);
    this.httpClient.post(url, data, {params, responseType: 'text'})
      .subscribe(
        resp => this.router.navigate(['artikelen/nieuw/succes']),
        error => this.router.navigate(['artikelen/nieuw/error'])
      );
  }
}
