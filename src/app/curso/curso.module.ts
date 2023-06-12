import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CursoRoutingModule } from './curso-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CursoEffects } from './store/curso.effects';
import { cursoFeature } from './store/curso.reducer';
import { StoreModule } from '@ngrx/store';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CursoComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    CursoRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    StoreModule.forFeature(cursoFeature),
    EffectsModule.forFeature([CursoEffects])
  ]
})
export class CursoModule { }
