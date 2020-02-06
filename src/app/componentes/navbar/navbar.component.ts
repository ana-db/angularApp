import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../rutas';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;

  constructor() { 
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;
  } //fin constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  } //fin ngOnInit

}
