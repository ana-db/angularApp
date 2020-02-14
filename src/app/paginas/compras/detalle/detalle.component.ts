import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() fruta: Fruta; //es la fruta que le vamos a pasar //fruta: Fruta;

  constructor() {
    /*
    this.fruta = new Fruta();
    this.fruta.nombre = 'Naranja';
    */
   }

  ngOnInit() {
  }

}
