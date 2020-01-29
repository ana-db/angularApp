import { Observable } from "rxjs";

interface IPokemonService {

    getAll();

    getById( idPokemon: number ); 

    getByName( idPokemon: string );

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre : string nombre del Pokemon a buscar
     * @see GET /api/v2/pokemon/{nombre}/
     */
    getPokemon(nombre: string): Observable<any>;

    /**
     * Recupera un JSON con las caracteristicas de un Pokemon
     * @param id : number identificador del pokemon
     * @see GET /api/v2/characteristic/{id}/
     */
    getHabilidad(id: number): Observable<any>;
}