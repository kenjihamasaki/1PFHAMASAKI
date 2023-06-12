import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, take } from 'rxjs';
import { Usuario } from '../../core/models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';
import { CreateUsuarioData } from '../models';

const USUARIO_MOCKS: Usuario[] = [
];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private usuarios$ = new BehaviorSubject<Usuario[]>(
    []
  );

  constructor(private httpClient: HttpClient) { }
  
  obtenerUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(
      `${enviroment.apiBaseUrl}/usuarios`
    )
  }

  obtenerUsuarioById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(
      `${enviroment.apiBaseUrl}/usuarios/${id}`
    )
  }

  deleteUsuarioById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroment.apiBaseUrl}/usuarios/${id}`
    );
  }

  createUsuario(data: CreateUsuarioData): Observable<Usuario> {
    return this.httpClient
      .post<Usuario>(`${enviroment.apiBaseUrl}/usuarios`, data)
      .pipe(
        concatMap((createResponse) =>
          this.obtenerUsuarioById(createResponse.id)
        )
      );
  }

}