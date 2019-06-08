import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: 'tab2',
    component: Tab2Page,
    children:
      [
        {
          path: 'tab4',
          children:
            [
              {
                path: '',
                loadChildren: './tab4/tab4.module#Tab4PageModule'
              }
            ]
        },
        {
          path: 'tab5',
          children:
            [
              {
                path: '',
                loadChildren: './tab5/tab5.module#Tab5PageModule'
              }
            ]
        },
        {
          path: 'tab6',
          children:
            [
              {
                path: '',
                loadChildren: './tab6/tab6.module#Tab6PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tab2/tab4',
          pathMatch: 'full'
        }
      ]
  },

];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class Tab2PageRoutingModule {}
