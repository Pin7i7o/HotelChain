import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControloEquipPage } from './controlo-equip.page';

const routes: Routes = [
  {
    path: '',
    component: ControloEquipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControloEquipPageRoutingModule {}
