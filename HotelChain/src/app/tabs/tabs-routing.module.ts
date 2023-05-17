import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mapas',
        loadChildren: () => import('../mapas/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/mapas',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mapas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
