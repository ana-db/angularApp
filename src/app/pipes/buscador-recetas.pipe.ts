import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetasFiltro'
})
export class BuscadorRecetasPipe implements PipeTransform {

  transform(datos: any, busqueda : string ): any {

    console.trace('---------- empieza pipe ----------');
    console.debug(datos); //contenido del array
    console.debug(busqueda); //elementos por los que filtramos: nombre de la receta
    console.trace('---------- termina pipe ----------');

    if( busqueda && '' !== busqueda.trim() ){ //con este if evitamos que cuando entremos en la pagina, tengamos la lista vacía (undefined)

      //1) filtramos por NOMBRE:
      busqueda = busqueda.toUpperCase();

      const resultado = datos.filter( (el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase(); //pasamos el nombre a mayúsculas, porque incudes() distingue entre mayus y minus
        return nombre.includes(busqueda);  //includes indica si la palabra en "busqueda" está en "nombre"
      });

    }

    return datos;
    
  } //fin transform

} //fin BuscadorRecetasPipe
