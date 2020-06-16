import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GebruikerService} from '../../services/gebruiker.service';
import {CategorieService} from '../../services/categorie.service';
import {Categorie} from '../../models/categorie';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/artikel';
import {Observable, of} from 'rxjs';
import {BijlageService} from '../../services/bijlage.service';
import {validateBedrag} from '../../validators/bedrag-validator';
import {validateBezorgwijzen} from '../../validators/artikel-bezorgwijze-validator';

@Component({
  selector: 'app-artikel-nieuw',
  templateUrl: './artikel-nieuw.component.html',
  styleUrls: ['./artikel-nieuw.component.css', '../../app.component.css']
})

export class ArtikelNieuwComponent implements OnInit {
  artikelForm = new FormGroup(
    {
      soort: new FormControl('', Validators.required),
      naam: new FormControl('', Validators.required),
      prijs: new FormControl('', [Validators.required, validateBedrag]),
      categorie: new FormControl('', Validators.required),
      omschrijving: new FormControl(),
      bijlage: new FormControl()
    });
  categorieen: Categorie[];
  showBezorgwijzen = false;
  bezorgwijzenGebruiker;
  bijlageValidatieBericht = undefined;
  private bijlage: any;

  constructor(private gebruikerService: GebruikerService,
              private categorieService: CategorieService,
              private artikelService: ArtikelService,
              private bijlageService: BijlageService) {
  }

  ngOnInit(): void {
  }

  setFormFields() {
    if (this.artikelForm.controls.soort.value === 'Product') {
      this.showBezorgwijzen = true;
      this.bezorgwijzenGebruiker = this.gebruikerService.getBezorgwijzen();
      this.addFormControls();
      this.categorieen = this.categorieService.getProductCategorieen();
    } else {
      this.showBezorgwijzen = false;
      this.removeFormControls(this.bezorgwijzenGebruiker);
      this.bezorgwijzenGebruiker = undefined;
      this.categorieen = this.categorieService.getDienstCategorieen();
    }
  }

  aanbiedenArtikel() {
    const artikel: Artikel = this.artikelForm.value;
    this.artikelService.aanbiedenArtikel(artikel, this.bijlage);
    console.log(this.artikelForm.value);
  }

  private addFormControls() {
    for (const bezorgwijze of this.bezorgwijzenGebruiker) {
      this.artikelForm.addControl(bezorgwijze.attributeName, new FormControl(''));
    }
    this.artikelForm.setValidators(validateBezorgwijzen);
    this.artikelForm.updateValueAndValidity();
  }

  private removeFormControls(bezorgwijzenGebruiker: any) {
    if (!bezorgwijzenGebruiker) {
      return false;
    }
    for (const bezorgwijze of bezorgwijzenGebruiker) {
      this.artikelForm.removeControl(bezorgwijze.attributeName);
    }
    this.artikelForm.clearValidators();
    this.artikelForm.updateValueAndValidity();
  }

  verwerkBijlage(bijlage: any) {
    if (this.checkBijlage(bijlage)) {
      this.bijlage = bijlage;
      console.log(this.bijlage);
    }
  }

  checkBijlage(files: any) {
    const checkBestandsType = this.bijlageService.checkBestandsType(files);
    if (!checkBestandsType) {
      this.setBijlageValidatieBericht('Dit type bestand wordt niet ondersteund, u mag alleen foto\'s, audio- en videobestanden uploaden.');
      this.artikelForm.controls.bijlage.reset();
      return false;
    }

    const grootteCheck = this.bijlageService.checkBestandsGrootte(files);
    if (!grootteCheck) {
      this.setBijlageValidatieBericht('Dit bestand is te groot (max. 10 mb).');
      this.artikelForm.controls.bijlage.reset();
      return false;

    }
    return true;
  }

  setBijlageValidatieBericht(bericht: string) {
    this.bijlageValidatieBericht = bericht;
  }
}
