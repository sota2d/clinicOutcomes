import { createActionGroup, props } from '@ngrx/store';
import { ChartSlice, TimeRange } from '../core/models';

export const ClinicActions = createActionGroup({
  source: 'Clinic',
  events: {
    Init: props<{ timeRange: TimeRange }>(),
    'Set Time Range': props<{ timeRange: TimeRange }>(),

    'Load TIR': props<{ timeRange: TimeRange }>(),
    'Load TIR Success': props<{
      tir: ChartSlice[];
    }>(),
    'Load TIR Failure': props<{ error: unknown }>(),

    'Load GMI': props<{ timeRange: TimeRange }>(),
    'Load GMI Success': props<{
      gmi: ChartSlice[];
      dateFrom: string;
      dateTo: string;
      lastUpdated: string;
      averageGMI: number;
      activePatients: number;
    }>(),
    'Load GMI Failure': props<{ error: unknown }>(),
  },
});
