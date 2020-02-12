import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../rutas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;
  isLogeado: boolean;


  constructor( private router: Router,
              private usuarioService: UsuarioService ) { //inyectamos UsuarioService para poder habilitar/deshabilitar el link de la zona privada
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;
    this.isLogeado = usuarioService.estaLogeado(); //así mejoramos un poco el código evitando que por consola nos aparezca el mensaje de está logeado varias veces (tantas como veces llamamos a la función desde el navbar)
  } //fin constructor


  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  } //fin ngOnInit


  salir(){
    console.trace('NavbarComponent salir');

    const mensaje = '¿Estás seguro de que quieres cerrar la sesión?'
    if( confirm(mensaje) ){
      this.usuarioService.cerrarSesion(); 
      this.router.navigate(['/']); //le redireccionamos a inicio
    }

  } //fin salir

}// fin NavbarComponent
