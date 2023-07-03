import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../../components/header/header.component';
import { AlertCardComponent } from '../../components/alert-card/alert-card.component';
import { ProblemaCardComponent } from 'src/app/components/problema/problema-card/problema-card.component';
import { ProblemSignCardComponent } from 'src/app/components/problema/problem-sign-card/problem-sign-card.component';
import { ProblemaEquipInfoComponent } from 'src/app/components/problema/problema-equip-info/problema-equip-info.component';
import { ProblemaButtonControlComponent } from 'src/app/components/problema/problema-button-control/problema-button-control.component';
import { ProblemaButtonAddSensorComponent } from 'src/app/components/problema/problema-button-add-sensor/problema-button-add-sensor.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertCardComponent,
    ProblemaCardComponent,
    ProblemSignCardComponent,
    ProblemaEquipInfoComponent,
    ProblemaButtonControlComponent,
    ProblemaButtonAddSensorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    AlertCardComponent,
    ProblemaCardComponent,
    ProblemSignCardComponent,
    ProblemaEquipInfoComponent,
    ProblemaButtonControlComponent,
    ProblemaButtonAddSensorComponent
  ]
})
export class SharedModule { }
