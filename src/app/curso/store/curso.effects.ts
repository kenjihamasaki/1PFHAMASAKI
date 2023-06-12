import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CursoActions } from './curso.actions';
import { ServiceService } from '../service/service.service';


@Injectable()
export class CursoEffects {

  loadCursos$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CursoActions.loadCursos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.serviceService.obtenerCursosWithSubject().pipe(
          map(data => CursoActions.loadCursosSuccess({ data })),
          catchError(error => of(CursoActions.loadCursosFailure({ error }))))
      )
    );
  });

  deleteCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursoActions.deleteCursos),
      concatMap((action) =>
        this.serviceService.deleteCursoById(action.id).pipe(
          map(data => CursoActions.deleteCursosSuccess({ data: action.id })),
          catchError(error => of(CursoActions.deleteCursosFailure({ error })))
        )
      )
    )
  })

  createCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursoActions.createCursos),
      concatMap(
        (action) =>
          this.serviceService.crearCurso(action.data)
            .pipe(
              map((res) => CursoActions.createCursosSuccess({ data: res })),
              catchError((error) => of(CursoActions.createCursosFailure({ error })))
            )
      )
    )
  });




  constructor(private actions$: Actions, private serviceService: ServiceService) {}
}
