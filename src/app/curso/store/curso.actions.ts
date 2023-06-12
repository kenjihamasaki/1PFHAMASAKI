import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateCursoData, CursoWithAll, CursoWithSubject,} from '../models';


export const CursoActions = createActionGroup({
  source: 'Curso',
  events: {
    'Load Cursos': emptyProps(),
    'Load Cursos Success': props<{ data: CursoWithSubject[] }>(),
    'Load Cursos Failure': props<{ error: unknown }>(),
    'Delete Cursos': props<{ id: number}>(),
    'Delete Cursos Success': props<{ data: number }>(),
    'Delete Cursos Failure': props<{ error: unknown }>(),
    'Create Cursos': props<{ data: CreateCursoData }>(),
    'Create Cursos Success': props<{ data: CursoWithSubject }>(),
    'Create Cursos Failure': props<{ error: unknown }>(),
  }
});
