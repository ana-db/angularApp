import { Component } from '@angular/core';
import { GLOBAL } from '../app/global';

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
  //variables
  title = 'angularApp'; //la podemos pintar en app.component.html con {{title}}
  subtitle = 'subtitulo de angularApp';

  global: Array<string>;

  productos = [{
      "id": 34,
      "nombre": "Cafe",
      "imagen": "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      "gluten": false,
      "precio": 1.46,
      "categoria": {
        "id": 1,
        "nombre": "Bebidas"
      },
      "historico": [{
          "fecha": "17 / 01 / 2020",
          "precio": 1.45
        },
        {
          "fecha": "01 / 12 / 2019",
          "precio": 1.40
        },
        {
          "fecha": "25 / 11 / 2019",
          "precio": 1.20
        }
      ]
    },

    {
      "id": 4,
      "nombre": "Leche",
      "imagen": "https://ep01.epimg.net/elpais/imagenes/2019/12/20/buenavida/1576848685_542543_1576848937_noticia_normal.jpg",
      "gluten": false,
      "precio": 1.10,
      "categoria": {
        "id": 1,
        "nombre": "Bebidas"
      },
      "historico": [{
          "fecha": "31 / 12 / 2019",
          "precio": 1.05
        },
        {
          "fecha": "31 / 12 / 2018",
          "precio": 1.00
        },
        {
          "fecha": "31 / 12 / 2017",
          "precio": 0.95
        }
      ]
    },

    {
      "id": 10,
      "nombre": "Galletas",
      "imagen": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/08/galletas-caseras-de-chispas-de-chocolate-sin-horno.jpg",
      "gluten": true,
      "precio": 1.5,
      "categoria": {
        "id": 2,
        "nombre": "Panaderia"
      },
      "historico": [{
          "fecha": "10 / 01 / 2020",
          "precio": 2
        },
        {
          "fecha": "01 / 12 / 2019",
          "precio": 1.75
        },
        {
          "fecha": "10 / 8 / 2019",
          "precio": 2
        }
      ]
    }
  ];


  constructor() {
    console.trace('AppComponent constructor');        
    this.global = [GLOBAL.usuario, GLOBAL.github, GLOBAL.version]; //array vacío: this.global = [];
  } //fin constructor


  //función: 
  pSeleccionado = this.productos[0];

  seleccionarProducto = function(producto){
    console.log('Hemos hecho click en el producto %o', producto ); //%o', producto --> para sacar todos los datos de la variable producto
    this.pSeleccionado = producto;
  }


}

