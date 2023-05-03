import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Usuario } from '../core/models/index';
import { Subject,Observable} from 'rxjs';
import links from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy{
  showFiller = false;

  authUser$: Observable<Usuario | null>;

  links = links;


  destroyed$ = new Subject<void>();


  constructor(
    private authService: AuthService,
    private router: Router
    ) {

      this.authUser$ = this.authService.obtenerUsuarioAutenticado()


}ngOnDestroy(): void {
  this.destroyed$.next();
    this.destroyed$.complete();
}
logOut(): void {
  this.authService.logout();
}
}
