import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BijlageService {

  private BIJLAGE_MAX_SIZE = 10000000;
  url = 'http://localhost:9080/artikelen/nieuw/bijlage';

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  public checkBestandsGrootte(bestand: any) {
    const size = bestand.item(0).size;
    return size <= this.BIJLAGE_MAX_SIZE;
  }

  public checkBestandsType(bestand: any) {
    const type = bestand.item(0).type;
    return type.includes('image') || type.includes('video') || type.includes('audio');
  }

  public verstuurBijlage(bijlage: any, artikelId: any) {
    const data = bijlage.item(0);
    const type = bijlage.item(0).type;
    const naam = bijlage.item(0).name;

    const params = this.setParams(naam, type, artikelId);
    this.httpClient.post(this.url, data, {params, responseType: 'text'})
      .subscribe(
        resp => this.router.navigate(['artikelen/nieuw/succes']),
        error => this.router.navigate(['artikelen/nieuw/error'])
      );
  }

  private setParams(naam, type, artikelId: any) {
    let params = new HttpParams();
    params = params.append('bijlagenaam', naam);
    params = params.append('bijlagetype', type);
    params = params.append('artikelid', artikelId);
    return params;
  }
}
