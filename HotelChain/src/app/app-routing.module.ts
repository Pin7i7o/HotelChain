import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/mapas/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./pages/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'problema',
    loadChildren: () => import('./pages/problema-sensor/problema-sensor.module').then( m => m.ProblemaPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: '',
    loadChildren: () => import('././tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'controlo-equip',
    loadChildren: () => import('./pages/controlo-equip/controlo-equip.module').then( m => m.ControloEquipPageModule)
  },
  {
    path: 'instrucoes',
    loadChildren: () => import('./pages/instrucoes/instrucoes.module').then( m => m.InstrucoesPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./pages/criar_conta/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
