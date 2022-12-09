import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splash3PageRoutingModule } from './splash3-routing.module';

import { Splash3Page } from './splash3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splash3PageRoutingModule
  ],
  declarations: [Splash3Page]
})
export class Splash3PageModule {}
