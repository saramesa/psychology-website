import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  home = 'Home';
  whoAmI = 'Quién soy';
  contact = 'Contacto';
  service = 'Servicios';
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/images/playstonessmall.jpg'
  }
}
