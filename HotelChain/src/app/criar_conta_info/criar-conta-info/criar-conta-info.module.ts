import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarContaInfoPageRoutingModule } from './criar-conta-info-routing.module';

import { CriarContaInfoPage } from './criar-conta-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarContaInfoPageRoutingModule
  ],
  declarations: [CriarContaInfoPage]
})
export class CriarContaInfoPageModule {}
