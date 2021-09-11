import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
@ViewChild('miformulario') miFormulario!:NgForm;

initForm={
   producto:'',
  precio:0,
  existencias:0

}

  guardar(){
    console.log('Añadido correctamente');

    this.miFormulario.resetForm({
      // producto:'Algo',
      precio: 0,
      existencias: 0
    
    }
);
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid && 
    this.miFormulario?.controls.producto?.touched;
  }

  precioValido():boolean{

    return this.miFormulario?.controls.precio?.invalid && 
    this.miFormulario?.controls.precio?.touched;
  }




}
