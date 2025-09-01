import { Component, signal } from '@angular/core';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';
import { DATE_RANGE_OPTIONS } from '../../core/constants';
import { FilterOption } from '../../core/models';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [FilterButtonGroupComponent],
  templateUrl: './clinic-outcomes.component.html',
  styleUrl: './clinic-outcomes.component.scss',
})
export class ClinicOutcomesComponent {
  filterOptions: ReadonlyArray<FilterOption> = DATE_RANGE_OPTIONS;
  selectedRange = signal(30);

  onSelectDateRange(value: number) {
    this.selectedRange.set(value);
    console.log('Selected option:', value);
  }
}
