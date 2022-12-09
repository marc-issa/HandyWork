import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splash1PageRoutingModule } from './splash1-routing.module';

import { Splash1Page } from './splash1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splash1PageRoutingModule
  ],
  declarations: [Splash1Page]
})
export class Splash1PageModule {}
