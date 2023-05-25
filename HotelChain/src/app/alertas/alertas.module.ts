import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertasPageRoutingModule } from './alertas-routing.module';

import { AlertasPage } from './alertas.page';
import { AlertCardComponent } from '../components/alert-card/alert-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasPageRoutingModule
  ],
  declarations: [
    AlertasPage,
    AlertCardComponent
  ]
})
export class AlertasPageModule {}
