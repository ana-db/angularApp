import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  coches: Array<any>;
  coche1: any;
  coche2: any;

  constructor() { 

    console.trace('ComparadorComponent constructor');

    this.coches = [
      {
        'nombre': 'cinquecento',
        'precio': 3000
      },
      {
        'nombre': 'renault megan',
        'precio': 3500
      },
      {
        'nombre': 'ferrari',
        'precio': 80000
      }
    ];

    this.coche1 = this.coches[0];
    this.coche2 = this.coches[1];

  } //fin constructor

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');
  } //fin ngOnInit

  seleciconarCoche( cocheSeleccionado: any) {
    console.debug('click cocheSeleccionado', cocheSeleccionado);    
    this.coche2 = this.coche1;
    this.coche1 = cocheSeleccionado;
  }

} //fin ComparadorComponent
