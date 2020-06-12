import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GebruikerService} from '../../services/gebruiker.service';
import {CategorieService} from '../../services/categorie.service';
import {Categorie} from '../../models/categorie';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/artikel';

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
    prijs: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    omschrijving: new FormControl(),
  });
  categorieen: Categorie[];
  showBezorgwijzen = false;
  bezorgwijzenGebruiker;

  constructor(private gebruikerService: GebruikerService,
              private categorieService: CategorieService,
              private artikelService: ArtikelService) {
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
    this.artikelService.aanbiedenArtikel(artikel);
    console.log(this.artikelForm.value);
  }

  private addFormControls() {
    for (const bezorgwijze of this.bezorgwijzenGebruiker) {
      this.artikelForm.addControl(bezorgwijze.attributeName, new FormControl(''));
    }
  }

  private removeFormControls(bezorgwijzenGebruiker: any) {
    for (const bezorgwijze of bezorgwijzenGebruiker) {
      this.artikelForm.removeControl(bezorgwijze.attributeName);
    }
  }
}
