import { Component, input, output, model } from '@angular/core';
import { FilterOption } from '../../../core/models';

@Component({
  selector: 'app-filter-button-group',
  imports: [],
  templateUrl: './filter-button-group.component.html',
  styleUrl: './filter-button-group.component.scss',
})

//I wasn't sure if I should use signals or input decorators because I don't know what you guys are using in your projects.
// so I used it here to show that I'm familiar with the syntax.
export class FilterButtonGroupComponent {
  options = input.required<ReadonlyArray<FilterOption>>();
  selectedOption = model.required<number>();
  selected = output<number>();

  onSelectOption(value: number) {
    this.selectedOption.set(value);
  }
}
