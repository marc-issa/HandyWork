import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'clean',
    loadChildren: () => import('./pages/categories/clean/clean.module').then( m => m.CleanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
