import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { AuthRoutingModule } from './auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // path: /dashboard PagesRoutingModule
  // path: /auth AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '**',
    component: NopagefoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
