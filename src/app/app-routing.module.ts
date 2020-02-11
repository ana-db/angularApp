import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';

/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'arrays', component: ArraysComponent},
  {path: 'pokemon', component: PokemonRestComponent},
  {path: 'estilos', component: EstilosComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'recetario', component: RecetarioComponent},
  // :pNombre los : sirven para indicar que es un parámetro
  {path: 'saludar/:pNombre', component: SaludarComponent}, //vamos a pasar un parámetro en la url 
  {path: 'comparador', component: ComparadorComponent},    
  {path: 'tareas', component: TareasComponent}, 
  //vamos a porteger esta ruta con una guarda:
  {path: 'privado', component: PrivadoComponent, canActivate: [LoginGuard]},  
  {path: 'login', component: LoginComponent},                   
  {path: '**', component: Error404Component} //llega a esta pagina si hay algún error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
