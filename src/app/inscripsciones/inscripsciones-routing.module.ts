import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscripscionesComponent } from './inscripsciones.component';

const routes: Routes =[
  {
    path:'',
    component: InscripscionesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class InscripscionesRoutingModule { }
