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
import { EffectsModule } from '@ngrx/effects';
import { AlumnoEffects } from './store/alumno.effects';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { alumnoFeature } from './store/alumno.reducer';
import { AlumnoRoutingModule } from './alumno-routing.module';



@NgModule({
  declarations: [
    AlumnoComponent,
    AbmAlumnosComponent,
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
    AlumnoRoutingModule,
    MatCardModule,
    StoreModule.forFeature(alumnoFeature),
    EffectsModule.forFeature([AlumnoEffects]),
    
  ], 
  exports: [
    AlumnoComponent
  ]
})
export class AlumnoModule { }
