import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemaPageRoutingModule } from './problema-sensor-routing.module';

import { ProblemaSensorPage } from './problema-sensor.page';
import { ProblemaCardComponent } from 'src/app/components/problema/problema-card/problema-card.component';
import { ProblemSignCardComponent } from 'src/app/components/problema/problem-sign-card/problem-sign-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemaPageRoutingModule
  ],
  declarations: [
    ProblemaSensorPage,
    ProblemaCardComponent,
    ProblemSignCardComponent
  ]
})
export class ProblemaPageModule {}
