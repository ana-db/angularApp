import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutaSeleccionada: Fruta;
  frutas: Array<Fruta>;

  constructor() {

    this.frutaSeleccionada = new Fruta();

    // incializar array de frutas
    this.frutas = [];

    // datos hardcodeadeos, TODO llamar a un servicio ngOnInit
    this.frutas.push( new Fruta('pera') );
    this.frutas.push( new Fruta('manzana') );
    this.frutas.push( new Fruta('Aguacate') );
    
   }

  ngOnInit() {
    
  }


  recogerEvento(event){
    console.debug('ComprasComponent componente padre y recibe la fruta');
    this.frutaSeleccionada = event; //cuando recibimos el evento, es la porpia fruta seleccionada
  }

}
