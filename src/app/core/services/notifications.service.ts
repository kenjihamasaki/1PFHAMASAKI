import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private mensaje$ = new Subject()

  constructor() {
    this.mensaje$.subscribe((msg) => Swal.fire("El usuario se creo correctamente"));
  }

  mostrarMensaje(msg: string) {
    this.mensaje$.next(msg);
  };
}

