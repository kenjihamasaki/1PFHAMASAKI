import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Alumno, CreateAlumno } from '../models';

export const AlumnoActions = createActionGroup({
  source: 'Alumno',
  events: {
    'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data: Alumno[]}>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),
    'Delete Alumnos': props<{ id: number }>(),
    'Delete Alumnos Success': props<{ data: number }>(),
    'Delete Alumnos Failure': props<{ error: unknown }>(),
    'Create Alumnos': props<{ data: CreateAlumno }>(),
    'Create Alumnos Success': props<{ data: Alumno }>(),
    'Create Alumnos Failure': props<{ error: unknown }>(),
  }
});
