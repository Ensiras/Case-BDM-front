import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BijlageService {

  private BIJLAGE_MAX_SIZE = 10000000;

  constructor() {
  }

  public checkBestandsGrootte(bestand: any) {
    const size = bestand.item(0).size;
    return size <= this.BIJLAGE_MAX_SIZE;
  }

  public checkBestandsType(bestand: any) {
    const type = bestand.item(0).type;
    return type.includes('image') || type.includes('video') || type.includes('audio');
  }



}
