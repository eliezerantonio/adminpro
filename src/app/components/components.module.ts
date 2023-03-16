import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementerComponent, DonaComponent],
  exports: [IncrementerComponent, DonaComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
