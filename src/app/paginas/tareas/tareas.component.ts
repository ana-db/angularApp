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

  mensaje: string;
  idTareaMensaje: string; 
  tituloTareaMensaje: string;
  showMensaje: boolean;
  modoEdicion: boolean;
  

  constructor( private servicioTarea: TareasService ) { //4) inyectamos private servicioTarea: TareasService, para llamar al servicio rest

    console.trace('TareasComponent constructor');

    this.tareas = []; //2) incializamos el array vacio en el constructor
    this.tituloNuevo = '';

    this.mensaje = '';
    this.idTareaMensaje = '';
    this.tituloTareaMensaje = '';
    this.showMensaje = false;

    this.modoEdicion = false;

  } //fin constructor


  ngOnInit() {

    console.trace('TareasComponent ngOnInit');

    //3) en ngOnInit llamamos al service para obtener tarea:
    this.cargarTareas();

  } //fin ngOnInit


  editarEstado( tarea: Tarea){

    console.debug('Click check estado %o', tarea);

    tarea.completada = !tarea.completada; //cambiamos el estado de la tarea

    this.servicioTarea.modificar(tarea).subscribe( () => {
      this.mensaje = 'Has modificado el estado de la tarea con ';
      this.idTareaMensaje = `id ${tarea.id} `;
      this.tituloTareaMensaje = `y titulo ${tarea.titulo}`;
      this.showMensaje = true;
      this.cargarTareas();
    }); //como no vamos usar los datos que devuelve el método, podemos poner () delante de =>. Es decir, la tarea modifica no la vamos a usar, sólo visualizar

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
    },
    (error) => {
      console.warn('El servicio Rest no funciona', error);
      this.mensaje = 'Error de conexión: el servicio rest no funciona. Posiblemente el json-server no esté arrancado';
      this.showMensaje = true;
    } ); 

  } //fin cargarTareas


  eliminarTarea(tarea: Tarea){

    console.debug('Click eliminar %o', tarea);

    if( confirm('¿Estás seguro de que quieres eliminar esta tarea?') ){
      console.trace('Eliminación confirmada');
      
      this.servicioTarea.eliminar(tarea.id).subscribe( () =>{
        this.mensaje = 'Has eliminado la tarea con ';
        this.idTareaMensaje = `id ${tarea.id} `;
        this.tituloTareaMensaje = `y titulo ${tarea.titulo}`;
        this.showMensaje = true;
        this.cargarTareas();
      } ); 
    }else{
      console.trace('Eliminación cancelada');
    } 

  } //fin eliminarTarea


  crearTarea(): void{

    console.debug('Click crear nueva tarea %s', this.tituloNuevo);

    //creamos un objeto tarea nuevo:
    const tareaNueva = new Tarea();
    
    if ( this.tituloNuevo.trim().length > 1){
      tareaNueva.titulo = this.tituloNuevo;
      console.debug('Tarea nueva %o', tareaNueva);

      this.servicioTarea.crear(tareaNueva).subscribe( datos => {
        console.debug('Nueva tarea creada en json-server %o', datos);
        this.tituloNuevo = ''; //limpiamos input text
        this.cargarTareas();

        this.mensaje = 'Has creado una tarea nueva con ';
        this.idTareaMensaje = `id ${datos.id} `;
        this.tituloTareaMensaje = `y titulo ${datos.titulo}`;
        this.showMensaje = true;
      });
    }else{
      this.mensaje = 'El titulo de la tarea no es válido, debe contener al menos 2 caracteres';
    } 
  
  } //fin crearTarea


  cambiarTitulo(tarea : Tarea): void{
    console.debug('loose focus para editar titulo de la tarea %o', tarea);
    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() ); 
  }// fin cambiarTitulo


}//fin TareasComponent
