import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';    //módulo para llamadas por http

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //módulo para llamadas por http
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
