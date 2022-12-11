import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainterPage } from './painter.page';

const routes: Routes = [
  {
    path: '',
    component: PainterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainterPageRoutingModule {}
