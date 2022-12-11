import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
