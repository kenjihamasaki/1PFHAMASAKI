import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  notifier = new Subject<string>();


  emailControl = new FormControl();
  nombreControl = new FormControl();

  authForm = new FormGroup({
    email: this.emailControl,
    nombre: this.nombreControl,
  })

  constructor(
    private notificationService: NotificationsService,
    private authService: AuthService,
  ) {}
  async ngOnInit(): Promise<void> {

    this.escucharCambiosEnEmailControl();

    this.notifier.next('Se completo con exito');
 }

 escucharCambiosEnEmailControl(): void {
  this.emailControl.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe((valor) => console.log(valor));
}

crearUsuario(): void {
  this.notificationService.mostrarMensaje('');
}


login(): void {
  this.authService.login({
    ...(this.authForm.value as any),
    id: 54,
  });
}
}
