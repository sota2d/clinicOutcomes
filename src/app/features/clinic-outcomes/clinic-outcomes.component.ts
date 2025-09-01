import { Component } from '@angular/core';
import { FilterButtonGroupComponent } from '../components/filter-button-group/filter-button-group.component';

@Component({
  selector: 'app-clinic-outcomes',
  imports: [FilterButtonGroupComponent],
  templateUrl: './clinic-outcomes.component.html',
  styleUrl: './clinic-outcomes.component.scss',
})
export class ClinicOutcomesComponent {}
