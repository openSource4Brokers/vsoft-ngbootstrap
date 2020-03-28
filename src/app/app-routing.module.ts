import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'marintegraal',
    loadChildren: () =>
      import('./pages/marintegraal/marintegraal.module').then(
        m => m.MarintegraalModule
      )
  },
  {
    path: 'hosting',
    loadChildren: () =>
      import('./pages/hosting/hosting.module').then(m => m.HostingModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'corona',
    loadChildren: () =>
      import('./pages/corona/corona.module').then(m => m.CoronaModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
