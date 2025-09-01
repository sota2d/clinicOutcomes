import { Component } from '@angular/core';
import { FilterButtonGroupComponent } from './features/filter-button-group/filter-button-group.component';

@Component({
  selector: 'app-root',
  imports: [FilterButtonGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
