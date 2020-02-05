import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHello]' //para usar la directiva, usaremos este selector en el html
})
export class HelloDirective {

  //Input. pasamos a la directiva un parámetro para decirle el color de fondo que queremos:
  //@Input() appHello:string;
  @Input() colorTexto: string;
  @Input() colorFondo: string;

  constructor(private element: ElementRef) { 
    console.trace('HelloDirective constructor');
  } //fin constructor


  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('HelloDirective publiconMouseEnter');

    //1) cuando pasamos el ratón por el elemento que tenga la directiva, se pintará de color rojo
    //Para esto hay que pasárselo al constructor:
    //this.element.nativeElement.style.backgroundColor = "red"; 

    //2) Input. pasamos a la directiva un parámetro para decirle el color de fondo que queremos:
    //this.element.nativeElement.style.backgroundColor = this.appHello;
    
    //3) podemos usar varios parámetros:
    this.element.nativeElement.style.backgroundColor = this.colorFondo;
    this.element.nativeElement.style.color = this.colorTexto;

  } //fin publiconMouseEnter
 
  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('HelloDirective publiconMouseLeave');
    //al quitar el ratón dejamos el formato normal:
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.color = 'black';
  } //fin publiconMouseLeave

} //fin HelloDirective
