import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  //para poder redireccionar al usuario, necesitamos inyectarlo en el constructor
  constructor( private router : Router, private usuarioService: UsuarioService){
    console.debug('LoginGuard constructor');
  }//fin constructor

  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.debug('LoginGuard canActivate');

    const logeado: boolean = this.usuarioService.estaLogeado();

    if( !logeado ){
      this.router.navigate(['login']);
    }

    //TODO si el usuario no se ha logeado false, en cso contrario true
    //TODO crear providero servicio para login de usuario
    //TODO servicio rest contra mySql (200 ok, 404 el usuario no existe)

    this.router.navigate(['login']); //si el usurio no tiene permisos, le redireccionamos al login

    return false; //si devuleve un false, no podemos entrar en la pagina "privado"
  }// fin canActivate
  
}
