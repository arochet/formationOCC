import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacheViewPage } from './tache-view.page';

const routes: Routes = [
  {
    path: '',
    component: TacheViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacheViewPageRoutingModule {}
