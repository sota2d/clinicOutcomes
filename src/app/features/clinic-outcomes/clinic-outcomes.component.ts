import { Component, signal } from '@angular/core';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';
import { DATE_RANGE_OPTIONS } from '../../core/constants';
import { FilterOption } from '../../core/models';
import { GmiChartComponent } from '../components/gmi-chart/gmi-chart.component';
import { TirChartComponent } from '../components/tir-chart/tir-chart.component';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [FilterButtonGroupComponent, GmiChartComponent, TirChartComponent],
  templateUrl: './clinic-outcomes.component.html',
  styleUrl: './clinic-outcomes.component.scss',
})
export class ClinicOutcomesComponent {
  filterOptions: ReadonlyArray<FilterOption> = DATE_RANGE_OPTIONS;
  selectedRange = signal(30);
  gmi = [
    {
      label: '≤7%',
      percent: 85,
      color: '#10b981',
    },
    {
      label: '7-8%',
      percent: 2,
      color: '#f59e0b',
    },
    {
      label: '≥8%',
      percent: 14,
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
      color: '#10b981',
      percent: 70,
    },
    {
      label: '181-250',
      color: '#f59e0b',
      percent: 7,
    },
    {
      label: '>250',
      color: '#ef4444',
      percent: 8,
    },
  ];

  onSelectDateRange(value: number) {
    this.selectedRange.set(value);
    console.log('Selected option:', value);
  }
}
