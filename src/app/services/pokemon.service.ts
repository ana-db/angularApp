import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  constructor(private http: HttpClient) { 
    console.trace('PokemonService constructor');
  }

  getPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon/4/';
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getAll() {
    throw new Error("Method not implemented.");
  }
  
  getById( id: number ) {
    throw new Error("Method not implemented.");
  }

  getByName(idPokemon: string) {
    throw new Error("Method not implemented.");
  }


}
