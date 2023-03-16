import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: [],
})
export class GraphicComponent {
  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public data1 = {
    datasets: [{ data: [350, 450, 100] }],
  };
}
