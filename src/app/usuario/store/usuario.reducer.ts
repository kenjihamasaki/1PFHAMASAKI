import { createFeature, createReducer, on } from '@ngrx/store';
import { UsuarioActions } from './usuario.actions';
import { Usuario } from '../models';

export const usuarioFeatureKey = 'usuario';

export interface State {
  loading: boolean;
  usuario: Usuario[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  usuario: [],
  error: null,
};

export const reducer = createReducer<State>(
  initialState,
  on(UsuarioActions.loadUsuarios, state => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(UsuarioActions.loadUsuariosSuccess, (state, action) => {
    return{
      ...state,
      loading: false,
      usuario: action.data
    }
  }),
  on(UsuarioActions.loadUsuariosFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }),

  on(UsuarioActions.deleteUsuarios, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(UsuarioActions.deleteUsuariosSuccess, (state, action) => {
    return {
      ...state,
      usuario: state.usuario.filter((i) => i.id !== action.data),
      loading: false
    };
  }),

  on(UsuarioActions.deleteUsuariosFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  on(UsuarioActions.createUsuarios, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),


  on(UsuarioActions.createUsuariosSuccess, (state, action) => {
    const newUsuarios = action.data;
    return {
      ...state,
      loading: false,
      usuario: [...state.usuario, newUsuarios]
    }
  }),

  on(UsuarioActions.createUsuariosFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  }),
);

export const usuarioFeature = createFeature({
  name: usuarioFeatureKey,
  reducer,
});

