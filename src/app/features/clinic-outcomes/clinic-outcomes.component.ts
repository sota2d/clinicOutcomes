import { Component, signal } from '@angular/core';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';
import { DATE_RANGE_OPTIONS } from '../../core/constants';
import { FilterOption } from '../../core/models';
import { GmiChartComponent } from '../components/gmi-chart/gmi-chart.component';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [FilterButtonGroupComponent, GmiChartComponent],
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

  onSelectDateRange(value: number) {
    this.selectedRange.set(value);
    console.log('Selected option:', value);
  }
}
