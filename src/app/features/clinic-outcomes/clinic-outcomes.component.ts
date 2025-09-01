import { Component, signal, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';
import { DATE_RANGE_OPTIONS } from '../../core/constants';
import { FilterOption, TimeRange } from '../../core/models';
import { GmiChartComponent } from '../components/gmi-chart/gmi-chart.component';
import { TirChartComponent } from '../components/tir-chart/tir-chart.component';
import { ClinicActions } from '../../store/clinic.actions';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [FilterButtonGroupComponent, GmiChartComponent, TirChartComponent],
  templateUrl: './clinic-outcomes.component.html',
  styleUrl: './clinic-outcomes.component.scss',
})
export class ClinicOutcomesComponent implements OnInit {
  private store = inject(Store<AppState>);
  filterOptions: ReadonlyArray<FilterOption> = DATE_RANGE_OPTIONS;
  selectedRange = signal<TimeRange>(30);
  gmi = [
    {
      label: '≤7%',
      percent: 85,
      color: '#8fda48ff',
    },
    {
      label: '7-8%',
      percent: 14,
      color: '#f6c548',
    },
    {
      label: '≥8%',
      percent: 2,
      color: '#ef4444',
    },
  ];
  tir = [
    {
      label: '<54',
      color: '#ef4444',
      percent: 3,
    },
    {
      label: '54-69',
      color: '#f97316',
      percent: 12,
    },
    {
      label: '70-180',
      color: '#8fda48ff',
      percent: 70,
    },
    {
      label: '181-250',
      color: '#f6c548',
      percent: 7,
    },
    {
      label: '>250',
      color: '#ef4444',
      percent: 8,
    },
  ];

  ngOnInit() {
    this.store.dispatch(ClinicActions.init({ timeRange: 30 }));
    this.refresh(30);
  }

  onSelectDateRange(range: TimeRange) {
    // this.selectedRange.set(range);
    console.log('Selected option:', range);
    this.refresh(range);
  }

  private refresh(range: 30 | 60 | 90) {
    this.store.dispatch(ClinicActions.setTimeRange({ timeRange: range }));
    this.store.dispatch(ClinicActions.loadTIR({ timeRange: range }));
    this.store.dispatch(ClinicActions.loadGMI({ timeRange: range }));
  }
}
