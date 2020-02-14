import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directivas/hello.directive';
import { SubrayarDirective } from './directivas/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { BuscadorRecetasPipe } from './pipes/buscador-recetas.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { ListadoComponent } from './paginas/compras/listado/listado.component';
import { DetalleComponent } from './paginas/compras/detalle/detalle.component';    //módulo para llamadas por http

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    ProductosComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    RecetarioComponent,
    BuscadorRecetasPipe,
    Error404Component,
    SaludarComponent,
    ComparadorComponent,
    TareasComponent,
    PrivadoComponent,
    LoginComponent,
    ComprasComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //módulo para llamadas por http
    FormsModule, //módulo para usar formularios con banana in a box
    ReactiveFormsModule, //módulo para usar formularios reactivos
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
