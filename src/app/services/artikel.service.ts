import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:9080/artikelen/nieuw';

  aanbiedenArtikel() {
  }
}
