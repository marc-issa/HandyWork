import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashingPage } from './washing.page';

const routes: Routes = [
  {
    path: '',
    component: WashingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashingPageRoutingModule {}
