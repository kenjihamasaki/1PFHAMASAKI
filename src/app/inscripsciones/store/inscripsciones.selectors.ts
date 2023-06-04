import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripsciones from './inscripsciones.reducer';

export const selectInscripscionesState = createFeatureSelector<fromInscripsciones.State>(
  fromInscripsciones.inscripscionesFeatureKey
);
