import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./pages/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
  {
    path: 'criar-conta-info',
    loadChildren: () => import('./pages/criar-conta-info/criar-conta-info.module').then( m => m.CriarContaInfoPageModule)
  },
  {
    path: 'problema-sensor',
    loadChildren: () => import('./pages/problema-sensor/problema-sensor.module').then( m => m.ProblemaPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
