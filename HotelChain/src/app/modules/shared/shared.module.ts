import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../../components/header/header.component';
import { AlertCardComponent } from '../../components/alert-card/alert-card.component';
import { ProblemaCardComponent } from 'src/app/components/problema/problema-card/problema-card.component';
import { ProblemSignCardComponent } from 'src/app/components/problema/problem-sign-card/problem-sign-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AlertCardComponent,
    ProblemaCardComponent,
    ProblemSignCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    AlertCardComponent,
    ProblemaCardComponent,
    ProblemSignCardComponent
  ]
})
export class SharedModule { }
