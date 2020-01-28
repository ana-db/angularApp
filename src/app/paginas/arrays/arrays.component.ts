import { Component, OnInit } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  //definimos array
  frutas: any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<string>; //array de strings para guardar el nombre de las frutas
  frutasConDescuento: Array<string>;
  nombreFrutasAmarillas: Array<string>;
  precioTotalFrutasAmarillas: number;
  primeraFrutaVerde: Array<string>;
  colores: Array<string>;


  constructor() { 
    console.trace(`ArraysComponent constructor`);

    //inicialización de variables:
    this.total = 0; //necesitamos poner this para indicar el ámbito de la variable y que podamos acceder
    this.totalDescuento = 0;
    this.aSoloNombres = []; //array vacío
    this.frutasConDescuento = [];
    this.nombreFrutasAmarillas = [];
    this.precioTotalFrutasAmarillas = 0;
    this.primeraFrutaVerde = [];
    this.colores = [];

    this.frutas = [
      {'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['roja']},
      {'nombre': 'pera', 'precio': 3.50, 'descuento': 10, 'colores': ['amarillo', 'verde']},
      {'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarillo', 'verde','roja']}
    ];
  }

  ngOnInit() {
    console.trace(`ArraysComponent ngOnInit`);

    /*
    //recorremos el array para calcular el precio total de todas las frutas:
    for (let fruta of this.frutas){
      this.total = this.total + fruta.precio;
      console.debug(`Suma total del precio de las frutas: ` + this.total);
    }
    */

    /* modo extendido para poder depurar
    //vamos a volver a recorrer el array para calcular el precio total usando reduce:
    this.total = this.frutas.map( el => {
        console.debug(el);
        return el.precio; 
      } ).reduce( (previous, current, index, array)=>{
        console.debug(previous, current, index, array);
        return previous + current; 
    }, 0 );
    */

    //modo reducido:
    //calcular el precio total:
    this.total = this.frutas.map( el => el.precio ).reduce( (p,c) => p+c );

    //precio total con descuento:
    this.totalDescuento = this.frutas.reduce( (p,c) => (p + (c.precio - ((c.precio*c.descuento)/100))), 0 );
    
    //nombres de las frutas:
    this.aSoloNombres = this.frutas.map( el => el.nombre );

    //nombre de las frutas que tengan descuento, filter():
    this.frutasConDescuento = this.frutas.filter( el => el.descuento > 0 ).map( el => el.nombre );

    //Nombre de las frutas amarillas (hay 2 formas de hacerlo: con indexOf y con includes):
    //this.nombreFrutasAmarillas = this.frutas.filter( el => el.colores.indexOf('amarillo') !== -1 ).map( el => el.nombre );
    this.nombreFrutasAmarillas = this.frutas.filter( el => el.colores.includes('amarillo')).map( el => el.nombre );

    //Precio total de las frutas amarillas:
    this.precioTotalFrutasAmarillas = this.frutas.filter( el => el.colores.includes('amarillo') ).map( el => el.precio ).reduce( (p,c) => p+c );
  
    //Buscar 1a fruta verde (find()):
    this.primeraFrutaVerde = this.frutas.find(el => el.colores.includes('verde'));

    //Array de colores sin colores repetidos:
    //this.colores = this.frutas.map( el => el.colores ); //así se repiten
    this.colores = this.frutas.map( el => el.colores ).filter( color => color.includes('roja') && color.includes('amarillo') && color.includes('verde') );

    /*
    this.colores = this.frutas.reduce( (p, c) => {
        console.log(...c.colores);
        return [p, ...c.colores];
    }, [] );
    */

    /*
    //colores en modo extendido para poder depurar (sin terminar):
    this.colores = this.frutas.map( el => el.colores ).filter( color => color.includes('roja') && color.includes('amarillo') && color.includes('verde') );
    this.colores = this.frutas.map( el => {
        console.debug(el);
        return el.colores; 
    } ).filter( (previous, current, index, array) => {
          console.debug(previous, current, index, array);
          return 
      }, 0 )
      */
  
    }
    

}
