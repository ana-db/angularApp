import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITareasService } from './ITareas.service';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareasService{

  //inyectamos private http: HttpClient en el constructor para poder hacer las llamadas al servicio rest
  constructor(private http: HttpClient) { 
    console.trace('TareasService constructor');
  } //fin constructor


  //importamos import { Observable } from "rxjs"; y import { Tarea } from '../model/tarea';
  //luego importamos los métodos desde la clase con la bombilla azul
  listar(): Observable<Tarea[]> {

    //el servicio rest funciona en la url http://localhost:3000/tareas
    const url = 'http://localhost:3000/tareas';
    console.debug(`GET ${url}`);

    return this.http.get<Array<Tarea>>(url); //el método get sólo está definido para any así que necesitamos hacer este cast get<Array<Tarea>>(url) en lugar de get(url);
  }


  detalle(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  crear(tarea: Tarea): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  modificar(tarea: Tarea): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  eliminar(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }



} //fin TareasService
