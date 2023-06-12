import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateUsuarioData, Usuario } from '../models';

export const UsuarioActions = createActionGroup({
  source: 'Usuario',
  events: {
    'Load Usuarios': emptyProps(),
    'Load Usuarios Success': props<{ data: Usuario[] }>(),
    'Load Usuarios Failure': props<{ error: unknown }>(),
    'Delete Usuarios': props<{ id: number }>(),
    'Delete Usuarios Success': props<{ data: number }>(),
    'Delete Usuarios Failure': props<{ error: unknown }>(),
    'Create Usuarios': props<{ data: CreateUsuarioData }>(),
    'Create Usuarios Success': props<{ data: Usuario }>(),
    'Create Usuarios Failure': props<{ error: unknown }>(),
  }
});
