import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  puntos: number;
  jugador: string;

  constructor() { 

    console.trace('JuegoComponent constructor');

    this.puntos = 0;
    this.jugador = '';

  } //fin constructor


  ngOnInit() {

    console.trace('JuegoComponent ngOnInit');

  } //fin ngOnInit


  contarClicks() {

    console.trace('Juego contarClicks' + this.jugador);
    this.puntos++;

    setTimeout(function() {
      alert("Fin de tu partida");
    }, 10000);

  } //fin contarClicks


} //fin JuegoComponent
