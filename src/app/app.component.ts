import { Component } from '@angular/core';
import { ClinicOutcomesComponent } from './features/clinic-outcomes/clinic-outcomes.component';

@Component({
  selector: 'app-root',
  imports: [ClinicOutcomesComponent],
  template: '<app-clinic-outcomes/>',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
