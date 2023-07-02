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
        loadChildren: () => import('../pages/mapas/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: 'alertas',
        loadChildren: () => import('../pages/alertas/alertas.module').then(m => m.AlertasPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../pages/info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pages/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {} 
