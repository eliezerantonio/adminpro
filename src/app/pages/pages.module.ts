import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesesComponent } from './promeses/promeses.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesesComponent,
    RxjsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphicComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
