import { Component } from '@angular/core';

/**
 * componente principal que se carga al arrancar la app
 * 
 * @Component: así se declara 1 componente
 * SELECTOR: nombre de la etiqueta para inyectar componente en HTML
 * templateUrl: vista del HTML
 * styleUrls: estilos para la vista formato scss
 */
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //variable
  title = 'angularApp'; //la podemos pintar en app.component.html con {{title}}

  subtitle = 'subtitulo de angularApp';
}

