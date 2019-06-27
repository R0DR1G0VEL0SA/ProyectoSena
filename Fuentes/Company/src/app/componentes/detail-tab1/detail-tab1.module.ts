import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { DetailTab1Page } from './detail-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZaEUa1IncX9fu-rCWdWtQ7Gwu6w6039c'
    })
  ],
  declarations: [DetailTab1Page]
})
export class DetailTab1PageModule {}
