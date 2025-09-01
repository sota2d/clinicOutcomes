import { ActionReducerMap } from '@ngrx/store';
import { clinicFeatureKey, clinicReducer } from './clinic.reducer';
import { ClinicState } from '../core/models';

export interface AppState {
  clinic: ClinicState;
}
export const reducers: ActionReducerMap<AppState> = {
  [clinicFeatureKey]: clinicReducer,
};
