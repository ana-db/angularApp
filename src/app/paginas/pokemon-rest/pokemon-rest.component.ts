import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;

  constructor( private pokemonService: PokemonService ) { //inyectamos el servicio pokemon
    console.trace('PokemonRestComponent constructor');

    this.pokemon = new Pokemon('pikachu');
    //this.pokemon.nombre = ''; //setter
    
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    //llamadas a los servicios

    //a un observable nos tenemos que suscribir
    //cuando llamamos a un observable tenemos 3 posibles métodos y sólo 1 es obligatorio (1. cuando todo va bien, 2. cuando falla, 3. siempre)
    
    this.pokemonService.getPokemon( 'pikachu' ).subscribe( //this.pokemonService.getPokemon( this.pokemon.nombre );
      data => {
          console.debug('peticion correcta data o%', data);

          //mapear de json a objeto de tipo pokemon
          this.pokemon.nombre = data.name; //data es un objeto que tiene toda la colección de datos del pokemon y lo que vamos haciendo es coger los que nos van interesando
          this.pokemon.imagen = data.sprites.front_default; //sprites es un array con todas las imagenes del pokemon
          this.pokemon.id = data.id;
      },
      error => {
          console.warn('peticion erronea data o%', error);
      },
      () => {
          console.trace('esto se hace siempre, tanto si funciona como si hay un error');
      }
    );


  }


}
