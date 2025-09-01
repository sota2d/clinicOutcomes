import { Component, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ChartSlice } from '../../../core/models';

@Component({
  selector: 'gmi-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './gmi-chart.component.html',
  styleUrls: ['./gmi-chart.component.scss'],
})
export class GmiChartComponent {
  config?: ChartConfiguration<'pie'> | null = null;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective<'pie'>;
  @Input() set data(slices: ChartSlice[] | null) {
    if (!slices) return;
    console.log('GMI input:', slices);
    const labels = slices.map((slice) => slice.label);
    const values = slices.map((slice) => slice.percent);
    const colors = slices.map((slice) => slice.color);
    this.config = {
      type: 'pie',
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: colors, borderWidth: 0 }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#9aa3b2' } },

          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 12 },
            formatter: (value: number) => `${value}%`,
            anchor: 'center',
            align: 'center',
          },
        },
      },
    };
  }
}
