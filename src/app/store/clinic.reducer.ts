import { createReducer, on, createFeature, createSelector } from '@ngrx/store';
import { ClinicActions } from './clinic.actions';
import { ClinicState, DateRange } from '../core/models';

const initialState: ClinicState = {
  timeRange: 30,
  tir: [],
  gmi: [],
  activePatients: null,
  dateFrom: null,
  dateTo: null,
  lastUpdated: null,
  averageGMI: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ClinicActions.init, (s, { timeRange }) => ({ ...s, timeRange })),
  on(ClinicActions.setTimeRange, (s, { timeRange }) => ({ ...s, timeRange })),

  on(ClinicActions.loadTIR, (s) => ({ ...s, error: null })),
  on(ClinicActions.loadTIRSuccess, (s, { tir }) => ({
    ...s,
    tir,
  })),
  on(ClinicActions.loadTIRFailure, (s, { error }) => ({
    ...s,
    error: String(error),
  })),

  on(ClinicActions.loadGMI, (s) => ({ ...s, error: null })),
  on(
    ClinicActions.loadGMISuccess,
    (
      s,
      { gmi, dateFrom, dateTo, lastUpdated, averageGMI, activePatients }
    ) => ({
      ...s,
      gmi,
      dateFrom,
      dateTo,
      lastUpdated,
      averageGMI,
      activePatients,
    })
  ),
  on(ClinicActions.loadGMIFailure, (s, { error }) => ({
    ...s,
    error: String(error),
  }))
);

export const clinicFeature = createFeature({
  name: 'clinic',
  reducer,
});

export const {
  name: clinicFeatureKey,
  reducer: clinicReducer,

  selectTimeRange,
  selectTir,
  selectGmi,
  selectActivePatients,
  selectDateFrom,
  selectDateTo,
  selectLastUpdated,
  selectAverageGMI,
  selectError,
} = clinicFeature;

export const selectDateRange = createSelector(
  selectDateFrom,
  selectDateTo,
  (from, to): DateRange => ({ from, to })
);
