import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nouvelle-tache',
    loadChildren: () => import('./nouvelle-tache/nouvelle-tache.module').then( m => m.NouvelleTachePageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  },
  {
    path: 'tache-view/:id',
    loadChildren: () => import('./tache-view/tache-view.module').then( m => m.TacheViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
