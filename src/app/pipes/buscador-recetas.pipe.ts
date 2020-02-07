import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetasFiltro'
})
export class BuscadorRecetasPipe implements PipeTransform {

  /**
   * 
   * @param recetas Array<any> con recetas
   * @param checkGluten dato boolean para buscar recetas con o sin gluten
   * @param busqueda cadena de caracteres con el nombre de la receta, cocinero o ingredientes que buscamos
   */
  transform(recetas: any, checkGluten : boolean, busqueda : string ): any {

    console.trace('---------- empieza pipe ----------');
    console.debug('recetas', recetas); //contenido del array
    console.debug('checkGluten', checkGluten); //elementos por los que filtramos: recetas con o sin gluten
    console.debug('busqueda', busqueda); //elementos por los que filtramos: nombre de la receta, cocinero o ingredientes
    console.trace('---------- termina pipe ----------');

    let resultado = recetas;

    //1) filtrar por recetas SIN GLUTEN:
    if(checkGluten){
      resultado = resultado.filter( (el) => el.isGlutenFree );
    }

    //2) filtrar por NOMBRE, COCINERO o INGREDIENTES de la receta:
    if( busqueda && '' !== busqueda ){ 

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter( (el) => {
        const ingredientes = el.ingredientes.reduce( (c,p) => c + p, '' ); //cogemos el array con todos los ingredientes y los ingredientes y los reducimos a 1 string
        const encontrar = (el.nombre + el.cocinero + ingredientes).toLowerCase(); //concatenamos el nombre de la receta, del cocinero y el string con los igredientes y lo pasamos a minúsculas
        console.debug('encontrar', encontrar);
        return encontrar.includes(busqueda);  //includes indica si la cadena que tenemos guardada en "busqueda" está en "encontrar", si es asi, lo guarda en resultado para mostrarlo por pantalla
      });

    }

    return resultado;
    
  } //fin transform

} //fin BuscadorRecetasPipe
