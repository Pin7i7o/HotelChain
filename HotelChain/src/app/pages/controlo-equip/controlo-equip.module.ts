import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControloEquipPageRoutingModule } from './controlo-equip-routing.module';

import { ControloEquipPage } from './controlo-equip.page';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControloEquipPageRoutingModule,
    SharedModule
  ],
  declarations: [ControloEquipPage]
})
export class ControloEquipPageModule {}
