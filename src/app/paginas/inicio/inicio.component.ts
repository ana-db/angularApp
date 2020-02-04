import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemon: any; //creamos una variable pokemon de cualquier tipo
  title: string;
  numeroClicks: number;

  constructor( private pokemonService: PokemonService ) {
    console.trace('InicioComponent constructor');

    //inicializamos variables:
    this.pokemon = {};
    this.title = "Welcome to Angular";
    this.numeroClicks = 0;

  } // fin constructor

  ngOnInit() {

    console.trace('InicioComponent ngOnInit');

    //pokemonService:
    this.pokemonService.getPokemon('charmander').subscribe(
      data => {
        console.debug('petición ok %o' , data);
        this.pokemon = data;
      },
      error => console.warn(error),
      () => {
        console.trace('petición completa');
      }
    );

  } // fin ngOnInit


  //contador número de clicks para ver el Flujo de información de la vista al modelo y modelo a vista:
  contarClicks() {

    console.trace('Contar Clicks');
    this.numeroClicks++;

  } //fin contarClicks


} //fin InicioComponent
