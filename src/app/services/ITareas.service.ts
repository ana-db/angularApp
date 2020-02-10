import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareasService{

    listar(): Observable<Array<Tarea>>; //devuelve un array de observables de tareas

    detalle( id: number ): Observable<Tarea>; //le pasamos un id y nos devuelve su observable de tipo tarea

    /**
     * Crear nueva tarea
     * @param tarea a dar de alta, sin id
     * @return un Observable con la tarea dada de alta e ID actualizado
     */
    crear( tarea: Tarea ): Observable<Tarea>; 

    modificar( tarea: Tarea ): Observable<Tarea>; 

    eliminar( id: number ): Observable<Tarea>; 
}