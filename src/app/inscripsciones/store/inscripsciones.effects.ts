import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripscionesActions } from './inscripsciones.actions';
import { InscripscionesService } from '../service/inscripsciones.service';


@Injectable()
export class InscripscionesEffects {

  createInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripscionesActions.createInscripsciones),
      concatMap(
        (action) =>
          this.inscripscionesService.createInscripcion(action.data)
            .pipe(
              map((res) => InscripscionesActions.createInscripscionesSuccess({ data: res })),
              catchError((error) => of(InscripscionesActions.createInscripscionesFailure({ error })))
            )
      )
    )
  });

  loadInscripsciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripscionesActions.loadInscripsciones),
      concatMap(() =>
        this.inscripscionesService.getAllInscripciones().pipe(
          map(data => InscripscionesActions.loadInscripscionesSuccess({ data })),
          catchError(error => of(InscripscionesActions.loadInscripscionesFailure({ error }))))
      )
    );
  });

  deleteInscripscion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripscionesActions.deleteInscripsciones),
      concatMap((action) =>
      this.inscripscionesService.deleteInscripcionById(action.id).pipe(
        map(data=> InscripscionesActions.deleteInscripscionesSuccess({data: action.id})),
        catchError(error => of(InscripscionesActions.deleteInscripscionesFailure({ error })))
      ))
    )
  })


  constructor(
    private actions$: Actions,
    private inscripscionesService: InscripscionesService
    ) {}
}
