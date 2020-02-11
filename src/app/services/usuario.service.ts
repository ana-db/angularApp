import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{

  private isLogged: boolean;
  private usuario: Usuario;


  constructor() { 
    console.trace('UsuarioService constructor');
    this.isLogged = false;
    this.usuario = undefined; 
  }//fin constructor


  estaLogeado(): boolean {
    console.trace('UsuarioService estaLogeado');
    return this.isLogged;
  }


  login(nombre: string, password: string): Usuario {

    console.trace('UsuarioService login nombre %s y password %s', nombre, password);

    const NOMBRE = 'admin';
    const PASS = 'admin';
    let usuarioBuscar: Usuario; //si no entra en el if es undefined

    if( NOMBRE === nombre && PASS === password ){
      console.trace('usuario encontrado');
      usuarioBuscar: new Usuario();
      usuarioBuscar.nombre= nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;
      //marcar que está logeado:
      this.isLogged = true;
    }else{
      console.trace('usuario NO encontrado');
      this.isLogged = false;
    }

    this.isLogged = true;
    return usuarioBuscar; 

  }//fin login


  cerrarSesion(idUsuario: number) {
    console.trace('UsuarioService cerrarSesion');
    this.isLogged = false;
  }

  
}//fin UsuarioService
