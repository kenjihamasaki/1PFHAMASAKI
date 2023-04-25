import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ObservablesComponent } from './observables/observables.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { AlumnoDetalleComponent } from './alumno/pages/alumno-detalle/alumno-detalle.component';
import { CursoComponent } from './curso/curso.component';


const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path:'alumno',
        children: [
          {
            path: '',
            component: AlumnoComponent,
          },
          {
            path:':posicion',
            component: AlumnoDetalleComponent,
          },
        ]
      },
      {
        path: 'curso',
        component: CursoComponent
      },
      
      {
        path: 'observables',
        component: ObservablesComponent,
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'navbar',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
