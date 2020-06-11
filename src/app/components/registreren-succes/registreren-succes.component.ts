import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registreren-succes',
  templateUrl: './registreren-succes.component.html',
  styleUrls: ['./registreren-succes.component.css', '../../app.component.css']
})
export class RegistrerenSuccesComponent implements OnInit {
  toggle: boolean;

  constructor() { }

  ngOnInit(): void {
    this.toggle = true;
  }

  toggleParagraph() {
    this.toggle = !this.toggle;
  }
}
