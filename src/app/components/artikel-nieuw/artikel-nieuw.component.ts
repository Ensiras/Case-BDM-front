import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {GebruikerService} from '../../services/gebruiker.service';

@Component({
  selector: 'app-artikel-nieuw',
  templateUrl: './artikel-nieuw.component.html',
  styleUrls: ['./artikel-nieuw.component.css', '../../app.component.css']
})
export class ArtikelNieuwComponent implements OnInit {
  ArtikelForm = new FormGroup(
    {
    soort: new FormControl('', Validators.required),
    naam: new FormControl('', Validators.required),
    prijs: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    omschrijving: new FormControl(),
  });
  categorieen = ['TestCategorie1', 'TestCategorie2'];
  showBezorgwijzen = false;
  bezorgwijzenGebruiker;

  constructor(private gebruikerService: GebruikerService) {
  }

  ngOnInit(): void {
  }

  setFormFields() {
    if (this.ArtikelForm.controls.soort.value === 'Product') {
      this.showBezorgwijzen = true;
      this.bezorgwijzenGebruiker = this.gebruikerService.getBezorgwijzen();
    } else {
      this.showBezorgwijzen = false;
      this.bezorgwijzenGebruiker = undefined;
    }
  }
}
