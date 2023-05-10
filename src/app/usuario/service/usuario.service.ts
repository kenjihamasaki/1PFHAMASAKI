import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Usuario } from '../../core/models';

const USUARIO_MOCKS: Usuario[] = [
];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private usuarios$ = new BehaviorSubject<Usuario[]>(
    []
  );

  constructor() { }
  obtenerUsuario(): Observable<Usuario[]> {
    this.usuarios$.next(USUARIO_MOCKS);
    return this.usuarios$.asObservable();
  }

}