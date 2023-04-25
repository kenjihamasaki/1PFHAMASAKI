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
    MatDialogModule
  ]
})
export class CursoModule { }
