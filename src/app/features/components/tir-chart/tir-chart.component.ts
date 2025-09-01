import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ChartSlice } from '../../../core/models';

@Component({
  selector: 'tir-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './tir-chart.component.html',
  styleUrls: ['./tir-chart.component.scss'],
})
export class TirChartComponent {
  config?: ChartConfiguration<'bar'> | null = null;
  @Input() set data(slices: ChartSlice[]) {
    console.log('TIR input:', slices);
    const labels = [''];
    const datasets = slices.map((s) => ({
      label: s.label,
      data: [s.percent],
      backgroundColor: s.color,
      borderWidth: 0,
    }));

    this.config = {
      type: 'bar',
      data: { labels, datasets },
      options: {
        responsive: true,
        aspectRatio: 1.7,
        plugins: {
          formatter: (value: number) => `${value}%`,
          legend: { position: 'bottom' },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
            },
          },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 12 },
            formatter: (value: number) => `${value}%`,
            anchor: 'center',
            align: 'center',
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        datasets: {
          bar: {
            barThickness: 55,
          },
        },
      },
    } as ChartConfiguration<'bar'>;
  }
}
