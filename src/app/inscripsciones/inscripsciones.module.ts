import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripscionesComponent } from './inscripsciones.component';
import { InscripscionesRoutingModule } from './inscripsciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripscionesEffects } from './store/inscripsciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripscionesFeature } from './store/inscripsciones.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InscripcionDialogComponent } from './inscripcion-dialog/inscripcion-dialog.component';



@NgModule({
  declarations: [
    InscripscionesComponent,
    InscripcionDialogComponent
  ],
  imports: [
    CommonModule,
    InscripscionesRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreModule.forFeature(inscripscionesFeature),
    EffectsModule.forFeature([InscripscionesEffects]),
  ]
})
export class InscripscionesModule { }
