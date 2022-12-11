import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlumberPageRoutingModule } from './plumber-routing.module';

import { PlumberPage } from './plumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlumberPageRoutingModule
  ],
  declarations: [PlumberPage]
})
export class PlumberPageModule {}
