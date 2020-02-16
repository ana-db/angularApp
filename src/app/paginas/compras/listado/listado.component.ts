import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() frutas = Array<Fruta>();
  @Output() pasameFrutaEvento = new EventEmitter();

  //frutas: Array<Fruta>;
  frutaSeleccionada: Fruta;


  constructor() { 
    this.frutas = new Array<Fruta>();
    this.frutaSeleccionada = new Fruta();

    /* 
    esta inicialización la vamos a hacer en el constructor de compras.component.ts
    para pasarlo como evento de input, @Input() frutas = Array<Fruta>():
    this.frutas.push( new Fruta('pera') );
    this.frutas.push( new Fruta('manzana') );
    this.frutas.push( new Fruta('aguacate') );
    */
  }

  ngOnInit() {
  }


  seleccionarFruta(fruta: Fruta){
    console.debug('ListadoComponent seleccionarFruta');
    
  }


  // Cuando se lance el evento click en la plantilla llamaremos a este método
  lanzar(event, fruta){
    // Usamos el método emit
    console.debug('ListadoComponent lanzar evento al padre');
    this.frutaSeleccionada = fruta;
    this.pasameFrutaEvento.emit( this.frutaSeleccionada );
  }

}
