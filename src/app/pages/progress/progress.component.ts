import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress1: number = 20;
  progress2: number = 25;

  getProgress1() {
    return `${this.progress1}%`;
  }

  getProgress2() {
    return `${this.progress2}%`;
  }
}
