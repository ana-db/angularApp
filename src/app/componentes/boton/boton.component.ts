import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  //declaramos variables
  numero: number;

  constructor() {
    console.trace('BotonComponent constructor');
    //se inicializan las variables
    this.numero = 0;
  }

  ngOnInit() {
    console.trace('BotonComponent ngOnInit');
  }

  //funciones
  contando = function(numero){
    console.log('Hemos hecho click en el boton');

    if(this.numero < 6){
      this.numero ++;
    }

  }
}
