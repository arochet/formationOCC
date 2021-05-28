import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacheViewPageRoutingModule } from './tache-view-routing.module';

import { TacheViewPage } from './tache-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacheViewPageRoutingModule
  ],
  declarations: [TacheViewPage]
})
export class TacheViewPageModule {}
