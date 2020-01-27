import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';

/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'arrays', component: ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
