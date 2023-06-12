import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnoActions } from './alumno.actions';
import { Alumno } from '../models';

export const alumnoFeatureKey = 'alumno';

export interface State {
  loading: boolean;
  alumno: Alumno[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  alumno: [],
  error: null,

};

export const reducer = createReducer<State>(
  initialState,
  on(AlumnoActions.loadAlumnos, state =>{
    return{
      ...state,
      loading: true,
    }
  }),
  on(AlumnoActions.loadAlumnosSuccess, (state, action) => {
    return{
      ...state,
      loading: false,
      alumno: action.data
    }
  }),
  on(AlumnoActions.loadAlumnosFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }),

  on(AlumnoActions.deleteAlumnos, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(AlumnoActions.deleteAlumnosSuccess, (state, action) => {
    return {
      ...state,
      alumno: state.alumno.filter((i) => i.id !== action.data),
      loading: false
    };
  }),

  on(AlumnoActions.deleteAlumnosFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  on(AlumnoActions.createAlumnos, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),


  on(AlumnoActions.createAlumnosSuccess, (state, action) => {
    const newInscripcion = action.data;
    return {
      ...state,
      loading: false,
      alumno: [...state.alumno, newInscripcion]
    }
  }),

  on(AlumnoActions.createAlumnosFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  }),


);

export const alumnoFeature = createFeature({
  name: alumnoFeatureKey,
  reducer,
});

