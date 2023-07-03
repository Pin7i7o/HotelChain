import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrucoesPageRoutingModule } from './instrucoes-routing.module';

import { InstrucoesPage } from './instrucoes.page';
import { SharedModule } from "../../modules/shared/shared.module";

@NgModule({
    declarations: [InstrucoesPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InstrucoesPageRoutingModule,
        SharedModule
    ]
})
export class InstrucoesPageModule {}
