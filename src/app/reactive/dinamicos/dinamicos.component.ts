import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  miformulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    favoritos:this.fb.array( [
      ['Real Betis',Validators.required],
      ['Real Madrid',Validators.required]
    ], Validators.required )
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miformulario.get('favoritos') as FormArray;
  }

  campoNoValido(campo: string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.valid){
      this.favoritosArr.push(new FormControl( this.nuevoFavorito.value , Validators.required));
      // this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value , Validators.required));
      this.nuevoFavorito.reset();  
    }
  }



  guardar(){

    if(this.miformulario.invalid){
      this.miformulario.markAllAsTouched();
      return;
    }else{
      console.log(this.miformulario.value)
      this.miformulario.reset();      
    }
    
  }

  eliminar(index:number){

    this.favoritosArr.removeAt(index);
  }

}
