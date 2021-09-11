import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favorito: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
  @ViewChild('miformulario') miFormulario!:NgForm;


  persona:Persona={
    nombre:'Alfonso',
    favorito: [
      {id: 1, nombre:'Real Betis'},
      {id: 2, nombre:'Nabil Fekir'}
    ]
  }

  nuevoJuego:string="";

  guardar(){

    console.log('posteado');

  }

    nombreValido():boolean{
      return this.miFormulario?.controls.producto?.invalid && 
      this.miFormulario?.controls.producto?.touched;
    }

    eliminar(index:number){
      this.persona.favorito.splice(index,1);
    }

    agregarJuego(){
      const nuevoFavorito: Favorito={id: this.persona.favorito.length + 1, nombre:this.nuevoJuego}
      this.persona.favorito.push({...nuevoFavorito});

      this.nuevoJuego='';
    }
  

}
