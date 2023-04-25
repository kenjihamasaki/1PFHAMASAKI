import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Usuario } from '../core/models';
import { Subject, Subscription, takeUntil } from 'rxjs';
import links from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy{
  showFiller = false;

  authUser: Usuario | null = null;

  links = links;

  suscripcionAuthUser: Subscription | null = null;

  destroyed$ = new Subject<void>();


  constructor(
    private authService: AuthService,
    private router: Router
    ) {

    this.authService.obtenerUsuarioAutenticado()
      .pipe(

        takeUntil(this.destroyed$)
      )
      .subscribe((usuario) => this.authUser = usuario);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logOut(): void{
    this.router.navigate(['auth', 'login'])
  }
}
