import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Gebruiker} from './models/gebruiker';
import {GebruikerService} from './services/gebruiker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'BDMFront';
    huidigeGebruiker: Gebruiker;

    constructor(private gebruikerService: GebruikerService) {
    }

    login() {
        this.huidigeGebruiker = this.gebruikerService.login();
    }

    loguit() {
      this.huidigeGebruiker = undefined;
    }
}

