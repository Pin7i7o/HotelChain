import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControloEquipPageRoutingModule } from './controlo-equip-routing.module';

import { ControloEquipPage } from './controlo-equip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControloEquipPageRoutingModule
  ],
  declarations: [ControloEquipPage]
})
export class ControloEquipPageModule {}
