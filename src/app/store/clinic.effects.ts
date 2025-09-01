import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClinicActions } from './clinic.actions';
import { MockApiService } from '../core/mock-api.service';
import { catchError, map, of, switchMap } from 'rxjs';

export class ClinicEffects {
  private actions$ = inject(Actions);
  private api = inject(MockApiService);

  //Both of them assigned to variables for better readability

  loadTIR$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClinicActions.loadTIR, ClinicActions.setTimeRange),
      switchMap((action) =>
        this.api.getTirData(action.timeRange ?? 30).pipe(
          map((tir) => ClinicActions.loadTIRSuccess({ tir })),
          catchError((error: unknown) =>
            of(ClinicActions.loadTIRFailure({ error }))
          )
        )
      )
    )
  );

  loadGMI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClinicActions.loadGMI, ClinicActions.setTimeRange),
      switchMap((action) =>
        this.api.getGmiData(action.timeRange ?? 30).pipe(
          map((res) => ClinicActions.loadGMISuccess(res)),
          catchError((error: unknown) =>
            of(ClinicActions.loadGMIFailure({ error }))
          )
        )
      )
    )
  );
}
