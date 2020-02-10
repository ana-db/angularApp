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

  constructor( private servicioTarea: TareasService ) { //4) inyectamos private servicioTarea: TareasService, para llamar al servicio rest

    console.trace('TareasComponent constructor');

    this.tareas = []; //2) incializamos el array vacio en el constructor

  } //fin constructor


  ngOnInit() {

    console.trace('TareasComponent ngOnInit');

    //3) en ngOnInit llamamos al service para obtener tarea:
    this.servicioTarea.listar().subscribe( datos => { 
      //nos susbscribimos porque es un observable. Nos devolverá los datos, es decir, las tareas
      console.debug('Esto se ejecuta de forma asincrona');
      this.tareas = datos; //asginamos los datos a las tareas
    }); 
  } //fin ngOnInit

}//fin TareasComponent
