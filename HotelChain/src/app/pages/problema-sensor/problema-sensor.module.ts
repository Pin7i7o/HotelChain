import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemaPageRoutingModule } from './problema-sensor-routing.module';

import { ProblemaSensorPage } from './problema-sensor.page';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemaPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ProblemaSensorPage,
  ]
})
export class ProblemaPageModule {}
