import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  frutas: Array<Fruta>;

  constructor() { 
    this.frutas = new Array<Fruta>();
    this.frutas.push( new Fruta('pera') );
    this.frutas.push( new Fruta('manzana') );
    this.frutas.push( new Fruta('aguacate') );
  }

  ngOnInit() {
  }

}
