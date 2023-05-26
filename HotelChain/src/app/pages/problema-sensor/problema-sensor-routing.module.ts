import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemaSensorPage } from './problema-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemaSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemaPageRoutingModule {}
