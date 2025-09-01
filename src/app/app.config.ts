import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ClinicEffects } from './store/clinic.effects';
import { reducers } from './store';
import { routes } from './app.routes';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { provideStoreDevtools } from '@ngrx/store-devtools';

Chart.register(ChartDataLabels);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(reducers),
    provideCharts(withDefaultRegisterables()),
    provideEffects([ClinicEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
