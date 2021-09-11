import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemunuComponent } from './sidemunu/sidemunu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidemunuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidemunuComponent
  ]
})
export class SharedModule { }
