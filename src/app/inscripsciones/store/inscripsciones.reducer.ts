import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripscionesActions } from './inscripsciones.actions';
import { InscripcionWithAll } from '../models';

export const inscripscionesFeatureKey = 'inscripsciones';

export interface State {
  loading: boolean;
  inscripciones: InscripcionWithAll[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  inscripciones: [],
  error: null,

};

export const reducer = createReducer<State>(
  initialState,
  
  on(InscripscionesActions.loadInscripsciones, state => {
    return{
      ...state,
      loading: true,
    }
  }),

  on(InscripscionesActions.loadInscripscionesSuccess, (state, action) => {
    return{
      ...state,
      loading: false,
      inscripciones: action.data
    }
  }),
  
  on(InscripscionesActions.loadInscripscionesFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }),

on(InscripscionesActions.deleteInscripsciones, (state) => {
  return {
    ...state,
    loading: true
  }
}),

on(InscripscionesActions.deleteInscripscionesSuccess, (state, action) => {
  return {
    ...state,
    inscripciones: state.inscripciones.filter((i) => i.id !== action.data),
    loading: false
  };
}),

on(InscripscionesActions.deleteInscripscionesFailure, (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}),

on(InscripscionesActions.createInscripsciones, (state) => {
  return {
    ...state,
    loading: true,
  }
}),


on(InscripscionesActions.createInscripscionesSuccess, (state, action) => {
  const newInscripcion = action.data;
  return {
    ...state,
    loading: false,
    inscripciones: [...state.inscripciones, newInscripcion]
  }
}),

on(InscripscionesActions.createInscripscionesFailure, (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  }
}),
);

export const inscripscionesFeature = createFeature({
  name: inscripscionesFeatureKey,
  reducer,
});

