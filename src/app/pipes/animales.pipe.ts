import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda : string): any {

    console.trace('---------- empieza pipe ----------');
    console.debug(datos); //contenido del array
    console.debug(busqueda); //elementos por los que filtramos
    console.trace('---------- termina pipe ----------');

    busqueda = busqueda.toUpperCase();

    const resultado = datos.filter( (el) => {
      const nombre = el.Nombre.toUpperCase(); //pasamos el nombre a mayúsculas, porque incudes() distingue entre mayus y minus
      return nombre.includes(busqueda);  //includes indica si la palabra en "busqueda" está en "nombre"
    });

    return resultado;


  } //fin transform

} //fin AnimalesPipe
