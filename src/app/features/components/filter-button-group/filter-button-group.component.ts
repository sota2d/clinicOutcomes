import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-filter-button-group',
  imports: [],
  templateUrl: './filter-button-group.component.html',
  styleUrl: './filter-button-group.component.scss',
})
export class FilterButtonGroupComponent {
  options = [
    { id: 'opt1', label: '30 days', value: '30' },
    { id: 'opt2', label: '60 days', value: '60' },
    { id: 'opt3', label: '90 days', value: '90' },
  ];
  //I wasn't sure if I should use signals or input decorators because I don't know what you guys are using in your projects.
  // so I used it here to show that I'm familiar with the syntax.

  selectedOption = signal('30');

  onSelectOption(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.selectedOption.set(value);
    console.log('Selected option:', value);
  }
}
