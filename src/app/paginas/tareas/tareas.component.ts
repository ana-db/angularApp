import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>; //1) array de tareas
  tituloNuevo: string;

  alertaTareaCreada: boolean;
  alertaEstadoEditado: boolean;
  alertaTareaEliminada: boolean;
  idEliminado: number;
  tituloTareaEliminada: string;
  tituloTareaEditada: string;

  constructor( private servicioTarea: TareasService ) { //4) inyectamos private servicioTarea: TareasService, para llamar al servicio rest

    console.trace('TareasComponent constructor');

    this.tareas = []; //2) incializamos el array vacio en el constructor
    this.tituloNuevo = '';

    this.alertaTareaCreada = false;
    this.alertaEstadoEditado = false;
    this.alertaTareaEliminada = false;
    this.idEliminado = 0;
    this.tituloTareaEliminada = '';
    this.tituloTareaEditada = '';

  } //fin constructor


  ngOnInit() {

    console.trace('TareasComponent ngOnInit');

    //3) en ngOnInit llamamos al service para obtener tarea:
    this.cargarTareas();

  } //fin ngOnInit


  editarEstado( tarea: Tarea){

    console.debug('Click check estado %o', tarea);

    tarea.completada = !tarea.completada; //cambiamos el estado de la tarea

    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() ); //como no vamos usar los datos que devuelve el método, podemos poner () delante de =>. Es decir, la tarea modifica no la vamos a usar, sólo visualizar

    this.alertaEstadoEditado = true; 
    this.tituloTareaEditada = tarea.titulo

  } //fin editarEstado


  /**
   * Llama al servicio para cargar todas las tareas
   * Nos va a servir para refrescar la lista de tareas
   */
  private cargarTareas(): void{ //no devuelve nada

    console.trace('cargarTareas');

    //llamamos al service para obtener tarea:
    this.servicioTarea.listar().subscribe( datos => { 
      //nos susbscribimos porque devuelve un observable. Nos devolverá los datos, es decir, las tareas
      console.debug('Esto se ejecuta de forma asincrona');
      this.tareas = datos; //asginamos los datos a las tareas
    }); 

  }


  eliminarTarea(tarea: Tarea){

    console.debug('Click eliminar %o', tarea);

    if( confirm('¿Estás seguro de que quieres eliminar esta tarea?') ){
      console.trace('Eliminación confirmada');
      this.idEliminado = tarea.id;
      this.tituloTareaEliminada = tarea.titulo
      this.servicioTarea.eliminar(tarea.id).subscribe( () => this.cargarTareas() ); 
    }else{
      console.trace('Eliminación cancelada');
    } 

    this.alertaTareaEliminada = true;

  } //fin eliminarTarea


  crearTarea(): void{

    console.debug('Click crear nueva tarea %s', this.tituloNuevo);

    //creamos un objeto tarea nuevo:
    const tareaNueva = new Tarea();
    
    //if ( this.tituloNuevo.length > 1 ){
      tareaNueva.titulo = this.tituloNuevo;
      console.debug('Tarea nueva %o', tareaNueva);

      this.servicioTarea.crear(tareaNueva).subscribe( datos => {
        console.debug('Nueva tarea creada en json-server %o', datos);
        this.tituloNuevo = ''; //limpiamos input text
        this.cargarTareas();
      });
      this.alertaTareaCreada = true;
   /* }else{
      let mensaje = "El titulo de la tarea debe contener al menos 1 caracter";
    } 
  */
  } //fin crearTarea


}//fin TareasComponent
