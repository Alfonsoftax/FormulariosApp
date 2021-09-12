import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miformulario: FormGroup= new FormGroup({
  //   'nombre'     : new FormControl('Real Betis'),
  //   'precio'     : new FormControl(1500),
  //   'existencias': new FormControl(5)
  // });

  ngOnInit(){
    this.miformulario.reset({
      nombre:'Alfonso',
      precio :1600,
      existencias: 1
    })
  }
  miformulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)], ],
    precio:[, [Validators.required, Validators.min(1)]],
    existencias:[, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { }

  campoNoValido(campo: string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched;
  }

  guardar(){

    if(this.miformulario.invalid){
      this.miformulario.markAllAsTouched();
    }else{
      this.miformulario.reset();
    }

  }

  

}
