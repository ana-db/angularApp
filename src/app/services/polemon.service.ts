import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolemonService {

  constructor(private http: HttpClient) { 
    console.trace('PolemonService constructor');
  }

  getPokemon(){
    console.trace('PolemonService getPokemon ' + url);
    let url = 'https://pokeapi.co/api/v2/pokemon/4';
    return this.http.get(url);
  }


}
