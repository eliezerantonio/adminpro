import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: String = 'Sem titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'label1',
    'label2',
    'label3',
  ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    datasets: [{ data: [350, 450, 100] }],
  };

  public doughnutChartType: ChartType = 'doughnut';
}
