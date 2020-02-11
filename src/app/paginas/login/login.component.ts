import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;


  constructor( private builder: FormBuilder) {

    console.trace('LoginComponent constructor');

    //construimos formulario:
    this.formulario = this.builder.group({
      //definimos los FormControl == inputs [value, validaciones]
      nombre: ['', Validators.required],
      pass: ['', Validators.required]
    }); //llaves y paréntesis porque tenemos un objeto

  }//fin constructor


  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  }//fin ngOnInit


  enviar( values: any ){
    console.trace('Enviar formulario %o', values);
  } //enviar

}//fin LoginComponent
