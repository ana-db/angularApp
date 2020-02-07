import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: string;

  constructor(private route: ActivatedRoute) { 

    console.trace('SaludarComponent constructor');

    this.nombre = '';
    this.route.params.subscribe( params => this.nombre = params.pNombre ); //params devuelve un observable --> nos tenemos que subscribir
    /*lo desplegamos para depurar mejor:
    this.route.params.subscribe( params => {
      return this.nombre = params['pNombre']; 
    });
    */

  } //fin constructor


  ngOnInit() {
    console.trace('SaludarComponent ngOnInit');
  } //fin ngOnInit

} //fin SaludarComponent
