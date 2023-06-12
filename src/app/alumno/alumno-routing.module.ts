import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AlumnoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnoRoutingModule { }
