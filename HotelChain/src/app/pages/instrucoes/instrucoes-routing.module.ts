import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrucoesPage } from './instrucoes.page';

const routes: Routes = [
  {
    path: '',
    component: InstrucoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrucoesPageRoutingModule {}
