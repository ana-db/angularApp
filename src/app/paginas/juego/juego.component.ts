import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

//las ctes se declaran fuera del componente:
const TIEMPO_JUEGO = 2000; //2ms

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  puntos: number;
  jugador: string;
  ranking: Map<string, number>;
  isActivo: boolean;

  constructor() { 

    console.trace('JuegoComponent constructor');

    this.puntos = 0;
    this.jugador = "";
    this.ranking = new Map();

    this.ranking.set("Pepe", 100);
    this.ranking.set("Pepa", 3200);
    this.ranking.set("Iñigo", 1100);

    this.isActivo = false;

  } //fin constructor


  ngOnInit() {

    console.trace('JuegoComponent ngOnInit');

  } //fin ngOnInit


  jugar(): void {

    console.trace('JuegoComponent jugar()' + this.jugador);

    this.isActivo = true; //habilitamos el boton de clicks para jugar
    this.ranking.set(this.jugador, this.puntos); //guardamos los datos del jugador en el hashmap

    setTimeout( () => {
      console.debug('Termina timeout');
      
      this.isActivo = false;
      this.puntos = 0;
      this.jugador = "";
    }, TIEMPO_JUEGO );

  } //fin jugar


  contarClicks(): void {

    console.trace('JuegoComponent contarClicks');
    this.puntos++;

  } //fin contarClicks


} //fin JuegoComponent
