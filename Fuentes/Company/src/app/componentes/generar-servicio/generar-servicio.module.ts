import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenerarServicioPage } from './generar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarServicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenerarServicioPage]
})
export class GenerarServicioPageModule {}
