import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { InscripcionWithAll, CreateInscripcionData } from '../models';

export const InscripscionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripsciones': emptyProps(),
    'Load Inscripsciones Success': props<{ data: InscripcionWithAll[] }>(),
    'Load Inscripsciones Failure': props<{ error: unknown }>(),
    'Delete Inscripsciones': props<{ id: number }>(),
    'Delete Inscripsciones Success': props<{ data: number }>(),
    'Delete Inscripsciones Failure': props<{ error: unknown }>(),
    'Create Inscripsciones': props<{ data: CreateInscripcionData }>(),
    'Create Inscripsciones Success': props<{ data: InscripcionWithAll }>(),
    'Create Inscripsciones Failure': props<{ error: unknown }>(),
  }
});
