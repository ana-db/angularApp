import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //relacionado con la programación reactiva
//import { IPokemonService } from './Ipokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService { //implements IPokemonService {
  
  constructor(private http: HttpClient) { 
    console.trace('PokemonService constructor');
  }

  getPokemon( nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url); //devuelve un objeto de tipo observable: hace una llamada, observa y en algún momento devuelve los datos
  }

  getHabilidad(id: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${id}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url); //devuelve un objeto de tipo observable: hace una llamada, observa y en algún momento devuelve los datos
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
