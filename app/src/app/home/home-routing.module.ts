import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'splash1',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/splash1/splash1.module').then(m => m.Splash1PageModule)
          }
        ]

      },
      {
        path: 'splash2',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/splash2/splash2.module').then(m => m.Splash2PageModule)
          }
        ]

      },
      {
        path: 'splash4',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/splash3/splash3.module').then(m => m.Splash3PageModule)
          }
        ]

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
