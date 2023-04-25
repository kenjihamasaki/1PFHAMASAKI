import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AlumnoModule } from 'src/app/alumno/alumno.module';
import { ObservablesModule } from 'src/app/observables/observables.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CursoModule } from '../curso/curso.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    AlumnoModule,
    ObservablesModule,
    RouterModule,
    MatListModule, 
    CursoModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
