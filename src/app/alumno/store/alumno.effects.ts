import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AlumnoActions } from './alumno.actions';
import { AlumnoService } from '../services/alumno.service';


@Injectable()
export class AlumnoEffects {

  loadAlumnos$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.loadAlumnos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.alumnoService.getStudentsFromDB().pipe(
          map(data => AlumnoActions.loadAlumnosSuccess({ data })),
          catchError(error => of(AlumnoActions.loadAlumnosFailure({ error }))))
      )
    );
  });

  deleteAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.deleteAlumnos),
      concatMap((action) =>
        this.alumnoService.deleteAlumnoById(action.id).pipe(
          map(data => AlumnoActions.deleteAlumnosSuccess({ data: action.id })),
          catchError(error => of(AlumnoActions.deleteAlumnosFailure({ error })))
        )
      )
    )
  })
  createAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.createAlumnos),
      concatMap(
        (action) =>
          this.alumnoService.createAlumnos(action.data)
            .pipe(
              map((res) => AlumnoActions.createAlumnosSuccess({ data: res })),
              catchError((error) => of(AlumnoActions.createAlumnosFailure({ error })))
            )
      )
    )
  });


  constructor(private actions$: Actions, private alumnoService: AlumnoService) {}
}
