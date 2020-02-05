import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar:string; //color

  colorSelecccionado: string;

  //inyectamos en el constructor el elemento en que vamos a poner la directiva:
  constructor(private element: ElementRef) { 

    console.trace('SubrayarDirective constructor');

    this.colorSelecccionado = "blue";

  } //fin constructor


  @HostListener('mouseenter') //evento al entrar con el ratón
  publiconMouseEnter(){

    console.trace('SubrayarDirective publiconMouseEnter color ${this.appSubrayar}');

    //1) cuando pasamos el ratón por el elemento que tenga la directiva, 
    //se subrayará del color que le indiquemos en el html gracias a la variable this.appSubrayar
    this.element.nativeElement.style.textDecorationLine = "underline"; 
    this.element.nativeElement.style.color = this.appSubrayar;  //this.element.nativeElement.style.textDecorationColor = this.appSubrayar; 

    //this.element.nativeElement.style.textDecorationColor = this.colorSelecccionado; 

  } //fin publiconMouseEnter
 

  @HostListener('mouseleave') //evento al salir con el ratón
  publiconMouseLeave(){

    console.trace('SubrayarDirective publiconMouseLeave');

    //quitamos el formato cuando separemos el ratón de la frase:
    this.element.nativeElement.style.textDecorationLine = "none"; 
    this.element.nativeElement.style.color = "black"; 

  } //fin publiconMouseLeave


} //fin SubrayarDirective
