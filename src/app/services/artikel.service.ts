import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artikel} from '../models/artikel';
import {ArtikelInput} from '../models/artikel-input';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:9080/artikelen/nieuw';

  aanbiedenArtikel(artikel: Artikel) {

    console.log('Artikel received!');
    console.log(artikel);
    const objectObservable = this.httpClient.post(this.url, artikel);
    objectObservable.subscribe();
  }

  verwerkArtikel(artikel: Artikel) {
  }
}
