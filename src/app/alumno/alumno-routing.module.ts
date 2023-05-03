import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path:'',
        component: AlumnoComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnoRoutingModule { }
