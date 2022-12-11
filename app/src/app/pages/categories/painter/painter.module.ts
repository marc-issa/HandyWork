import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainterPageRoutingModule } from './painter-routing.module';

import { PainterPage } from './painter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainterPageRoutingModule
  ],
  declarations: [PainterPage]
})
export class PainterPageModule {}
