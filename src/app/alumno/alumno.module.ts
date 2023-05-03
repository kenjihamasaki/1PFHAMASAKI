import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AlumnoComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlumnoComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      },
    ])
  ], 
  exports: [
    AlumnoComponent
  ]
})
export class AlumnoModule { }
