import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UsuarioActions } from './usuario.actions';
import { UsuarioService } from '../service/usuario.service';


@Injectable()
export class UsuarioEffects {

  loadUsuarios$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UsuarioActions.loadUsuarios),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.usuarioService.obtenerUsuario().pipe(
          map(data => UsuarioActions.loadUsuariosSuccess({ data })),
          catchError(error => of(UsuarioActions.loadUsuariosFailure({ error }))))
      )
    );
  });

  deleteUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.deleteUsuarios),
      concatMap((action) =>
        this.usuarioService.deleteUsuarioById(action.id).pipe(
          map(data => UsuarioActions.deleteUsuariosSuccess({ data: action.id })),
          catchError(error => of(UsuarioActions.deleteUsuariosFailure({ error })))
        )
      )
    )
  })

  createUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuarioActions.createUsuarios),
      concatMap(
        (action) =>
          this.usuarioService.createUsuario(action.data)
            .pipe(
              map((res) => UsuarioActions.createUsuariosSuccess({ data: res })),
              catchError((error) => of(UsuarioActions.createUsuariosFailure({ error })))
            )
      )
    )
  });


  constructor(private actions$: Actions, private usuarioService: UsuarioService) {}
}
