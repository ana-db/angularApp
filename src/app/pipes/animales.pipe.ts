import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  /**
   * Filtro personalizado para buscar animales por su NOMBRE y/o TIPO
   * @param datos Array<any> con animales
   * @param busqueda cadena de caracteres que buscamos dentro del atributo Nombre
   * @param tipo tipo del animal para filtrar por atributo de Tipo
   * @see app/animales.ts json con los datos de los animales
   */
  transform(datos: any, busqueda : string, tipo : string): any {

    console.trace('---------- empieza pipe ----------');
    console.debug(datos); //contenido del array
    console.debug(busqueda); //elementos por los que filtramos: nombre del animal
    console.debug(tipo); //elementos por los que filtramos: tipo de animal
    console.trace('---------- termina pipe ----------');

    if( busqueda && '' !== busqueda.trim() ){ //con este if evitamos que cuando entremos en la pagina, tengamos la lista vacía (undefined)

      //1) filtramos por NOMBRE:
      busqueda = busqueda.toUpperCase();

      const resultado = datos.filter( (el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase(); //pasamos el nombre a mayúsculas, porque incudes() distingue entre mayus y minus
        return nombre.includes(busqueda);  //includes indica si la palabra en "busqueda" está en "nombre"
      });

      //2) filtramos por TIPO:
      if( tipo && tipo !== "Todos"){
        return resultado.filter( (el) => el.Tipo === tipo);
      }else{
        return resultado;
      }

    }else{
      if ( tipo && tipo !== "Todos" ) {
        return datos.filter( (el) => el.Tipo === tipo);
      }else{
        return datos;
      }  
    }

  } //fin transform

} //fin AnimalesPipe
