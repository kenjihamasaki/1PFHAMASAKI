import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ObservablesModule } from 'src/app/observables/observables.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CursoModule } from '../curso/curso.module';
import { CursoComponent } from '../curso/curso.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { UsuarioModule } from '../usuario/usuario.module';


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
    ObservablesModule,
    RouterModule,
    MatListModule, 
    CursoModule,
    UsuarioModule,
    RouterModule.forChild([
          {
            path:'alumno',
            loadChildren: ()=> import('../alumno/alumno.module').then((m) => m.AlumnoModule)
          },
          {
            path: 'curso',
            component: CursoComponent
          },
          {
            path: 'usuario',
            canActivate: [AdminGuard],
            component: UsuarioComponent
          },
          {
            path: 'inscripciones',
            loadChildren: () => import('../inscripsciones/inscripsciones.module').then((m)=>m.InscripscionesModule)
          }
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
