import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  exports: [AppComponent, LoginComponent],
  imports: [CommonModule, RouterModule],
})
export class AuthModule {}
