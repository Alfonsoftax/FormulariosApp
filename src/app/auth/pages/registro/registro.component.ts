import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { emailPattern, nombreApellidoPatern, noStrider } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {





  miformulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPatern)]],
    email: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ], [ this.emailValidator ] ],
    username:['', [Validators.required, this.vs.noStrider]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]]
  },{
    validators: [ this.vs.camposIguales('password', 'password2') ]
  });


  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miformulario.reset({
      nombre:'Alfonso Hidalgo',
      email:'email@email.com',
      username:'softAX',
      password:'123456',
      password2:'123456'
    })
  }

  campoNoValido(campo:string){
    return this.miformulario.get(campo)?.invalid 
      && this.miformulario.get(campo)?.touched;
  }
  submitFormulario(){
    this.miformulario.markAllAsTouched();
  }

  get emailErrorMsg(): string {
    
    const errors = this.miformulario.get('email')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    return '';
  }
  // emailRequired(){
  //   return this.miformulario.get('email')?.errors?.required 
  //   && this.miformulario.get('email')?.touched;   
  // }

  // emailFormato(){
  //   return this.miformulario.get('email')?.errors?.pattern 
  //   && this.miformulario.get('email')?.touched;   
  // }
  // emailTomado(){
  //   return this.miformulario.get('email')?.errors?.emailTomado 
  //   && this.miformulario.get('email')?.touched;   
  // }

}
