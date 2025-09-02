import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import {
  selectActivePatients,
  selectDateRange,
  selectGmi,
  selectLastUpdated,
  selectTir,
  selectTimeRange,
  selectAverageGMI,
} from '../../store/clinic.reducer';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';
import { DATE_RANGE_OPTIONS } from '../../core/constants';
import { FilterOption, TimeRange } from '../../core/models';
import { GmiChartComponent } from '../components/gmi-chart/gmi-chart.component';
import { TirChartComponent } from '../components/tir-chart/tir-chart.component';
import { ClinicActions } from '../../store/clinic.actions';
import { AsyncPipe } from '@angular/common';
import { ClinicMetaPipe } from './meta-lines.pipe';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { tooltipAdjustment } from '../../core/utils';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [
    FilterButtonGroupComponent,
    GmiChartComponent,
    TirChartComponent,
    AsyncPipe,
    ClinicMetaPipe,
    NgbTooltip,
  ],
  templateUrl: './clinic-outcomes.component.html',
  styleUrls: ['./clinic-outcomes.component.scss'],
})
export class ClinicOutcomesComponent implements OnInit {
  private store = inject(Store<AppState>);
  filterOptions: ReadonlyArray<FilterOption> = DATE_RANGE_OPTIONS;
  selectedRange = this.store.selectSignal(selectTimeRange);
  averageGMI$ = this.store.select(selectAverageGMI);
  timeRange$ = this.store.select(selectTimeRange);
  tir$ = this.store.select(selectTir);
  gmi$ = this.store.select(selectGmi);
  activePatients$ = this.store.select(selectActivePatients);
  dateRange$ = this.store.select(selectDateRange);
  lastUpdated$ = this.store.select(selectLastUpdated);
  tooltipOptions = tooltipAdjustment;

  ngOnInit() {
    this.store.dispatch(ClinicActions.init({ timeRange: 30 }));
    this.refresh(30);
  }

  onSelectDateRange(range: TimeRange) {
    this.refresh(range);
  }

  private refresh(range: TimeRange) {
    this.store.dispatch(ClinicActions.setTimeRange({ timeRange: range }));
    this.store.dispatch(ClinicActions.loadTIR({ timeRange: range }));
    this.store.dispatch(ClinicActions.loadGMI({ timeRange: range }));
  }
}
