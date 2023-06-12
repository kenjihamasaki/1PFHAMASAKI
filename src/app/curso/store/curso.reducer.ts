import { createFeature, createReducer, on } from '@ngrx/store';
import { CursoActions } from './curso.actions';
import { CursoWithSubject } from '../models';

export const cursoFeatureKey = 'curso';

export interface State {
  loading: boolean;
  cursos: CursoWithSubject[];
  error: unknown;
  
}

export const initialState: State = {
  loading: false,
  cursos: [],
  error: null,
};

/* cargar */

export const reducer = createReducer(
  initialState,
  on(CursoActions.loadCursos, state => {
    return {
    ...state,
    loading: true,
    }
  }),
  on(CursoActions.loadCursosSuccess, (state, action) => {
    return {
    ...state,
    loading: false,
    cursos: action.data
  }
}),
  on(CursoActions.loadCursosFailure, (state, action) => {
    return {
    ...state,
    loading: false,
    error: action.error
  }}),

  /* eliminar */

on(CursoActions.deleteCursos, (state) => {
  return {
    ...state,
    loading: true
  }
}),

on(CursoActions.deleteCursosSuccess, (state, action) => {
  return {
    ...state,
    cursos: state.cursos.filter((i) => i.id !== action.data),
    loading: false
  };
}),

on(CursoActions.deleteCursosFailure, (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}),

on(CursoActions.createCursos, (state) => {
  return {
    ...state,
    loading: true,
  }
}),


on(CursoActions.createCursosSuccess, (state, action) => {
  const newCurso = action.data;
  return {
    ...state,
    loading: false,
    cursos: [...state.cursos, newCurso]
  }
}),

on(CursoActions.createCursosFailure, (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  }
}),
);




export const cursoFeature = createFeature({
  name: cursoFeatureKey,
  reducer,
});

