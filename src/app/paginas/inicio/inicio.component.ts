import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemon: any; //creamos una variable pokemon de cualquier tipo

  constructor( private pokemonService: PokemonService ) {
    console.trace('InicioComponent constructor');
    this.pokemon = {};
  } // fin constructor

  ngOnInit() {

    console.trace('InicioComponent ngOnInit');

    this.pokemonService.getPokemon().subscribe(
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

}
