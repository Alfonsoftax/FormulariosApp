import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';

const routes: Routes = [
  {
    path:'template',
    loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)   //lazyLoad
  },
  {
    path:'reactive',
    loadChildren:()=>import('./reactive/reactive.module').then(m=>m.ReactiveModule)   //lazyLoad
  },
  {
    path:'**',
    redirectTo:'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
