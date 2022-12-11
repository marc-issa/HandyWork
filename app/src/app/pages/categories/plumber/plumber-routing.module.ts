import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlumberPage } from './plumber.page';

const routes: Routes = [
  {
    path: '',
    component: PlumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlumberPageRoutingModule {}
