import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { stringify } from 'querystring';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;
  mensaje: string;

  constructor( private pokemonService: PokemonService ) { //inyectamos el servicio pokemon
    console.trace('PokemonRestComponent constructor');

    this.mensaje = ''; //similar a null, pero en javascript se usa undefined
    this.pokemon = new Pokemon('');
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

          //1) mapear de json a objeto de tipo pokemon
          this.pokemon.nombre = data.name; //data es un objeto que tiene toda la colección de datos del pokemon y lo que vamos haciendo es coger los que nos van interesando
          this.pokemon.imagen = data.sprites.front_default; //sprites es un array con todas las imagenes del pokemon
          this.pokemon.id = data.id;

          this.mensaje = 'Pokemon ' + this.pokemon.nombre + ' cargado correctamente desde https://pokeapi.co/';

          //2) conseguir la habilidad del pokemon a través de su id y haciendo una llamada al servicio:
          const habilidadesNames = data.abilities.map( el => el.ability.name );
          console.debug('habilidades en ingles %o', habilidadesNames);

          habilidadesNames.forEach( habilidad => {
            // conseguir su habilidad en castellano
            this.pokemonService.getHabilidad( habilidad ).subscribe(
              json => {
                console.debug('habilidad %o' ,  json);
                const habilidadCastellano = json.names.find( el => el.language.name === 'es' );
                console.debug('recupera habiliada en castellano %o', habilidadCastellano);
                this.pokemon.habilidades.push( habilidadCastellano.name );
            });
          });

          /* con este código sacamos la habilidad que tiene el mismo id que el pokemon (y esa habilidad no tiene por qué ser del pokemon)
          //2) conseguir la habilidad del pokemon a través de su id y haciendo una llamada al servicio:
          this.pokemonService.getHabilidad( this.pokemon.id ).subscribe(
            data => {
              console.debug('Habilidad: peticion correcta data o%', data);

              //mapear el dato de la habilidad de json a objeto pokemon:
              //this.pokemon.habilidad = data.name; //nombre de la habilidad en inglés
              this.pokemon.habilidad = data.names[4].name; //la habilidad en castellano está en la posición 4 del array names
              
            },
            error => {
              console.warn('Habilidad: peticion erronea data o%', error);
              this.mensaje = 'No se ha podido encontrar la habilidad';
            },
            () => {
              console.trace('esto se hace siempre, tanto si funciona como si hay un error');
            }
          );
          */
      
      },
      error => {
          console.warn('peticion erronea data o%', error);

          this.mensaje = 'No existe el Pokemon';
      },
      () => {
          console.trace('esto se hace siempre, tanto si funciona como si hay un error');
      }
    );


  }


}
