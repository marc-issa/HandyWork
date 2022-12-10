import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash/splash-screen/splash-screen.module').then(m => m.SplashScreenPageModule)
  },
  {
    path: 'intro1',
    loadChildren: () => import('./splash/intro1/intro1.module').then(m => m.Intro1PageModule)
  },
  {
    path: 'intro2',
    loadChildren: () => import('./splash/intro2/intro2.module').then(m => m.Intro2PageModule)
  },
  {
    path: 'intro3',
    loadChildren: () => import('./splash/intro3/intro3.module').then(m => m.Intro3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
