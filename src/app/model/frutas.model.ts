import { Color } from './color.model';


export class Fruta{

    id: number;
    nombre: string;
    imagen: string;
    precio: number;
    colores: Array<Color>;

    constructor( nombre?: string ){
        this.id = 0;
        this.nombre = (nombre) ? nombre : ''; //si nombre está definido le asigna el nombre; si no, le asigna un vacío y sería undefined
        this.imagen = "assets/imagenes/fruta.jpg";
        this.precio = 0;
        this.colores = new Array<Color>(); //this.colores = [];
    } //con nombre? indicamos que sea opcional

}