import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../recetas';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas : Array<any>;
  rSeleccionada: Array<any>; 
  checkGluten: boolean;
  busqueda: string;

  constructor() { 
    console.trace('RecetarioComponent constructor');
    this.recetas = RECETAS;
    this.rSeleccionada = this.recetas[0]; 
    /*this.rSeleccionada = this.recetas[0]; --> tenemos que hacer esta asignación en el constructor 
    porque si no, tenía un error "TypeError: Cannot read property '0' of undefined" 
    porque no había declarado rSeleccionada en ningún sitio ni la había inicializado
    */
   this.checkGluten = false;
   this.busqueda = "";
  } //fin constructor


  ngOnInit() {
    console.trace('RecetarioComponent ngOnInit');
  } // fin constructor


  //función para seleccionar recetas y sacar su detalle: 
  seleccionarReceta = function(receta){
    console.log('Hemos hecho click en la receta %o', receta ); 
    this.rSeleccionada = receta;
  }
  

}
