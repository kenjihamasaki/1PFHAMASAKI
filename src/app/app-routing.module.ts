import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginGuard } from './auth/guards/login.guard';


const routes: Routes = [
  {
    path: 'navbar',
    canActivate: [AuthGuard],
    component: NavbarComponent,
    loadChildren:() => import('./navbar/navbar.module').then((m)=>m.NavbarModule)
  },
  
    {
    path: 'auth',
    canActivate: [LoginGuard],
    component: AuthComponent,
    loadChildren:() => import('./auth/auth.module').then((m)=>m.AuthModule)
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
