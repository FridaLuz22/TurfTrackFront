import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []
//   {
//     path: '',
//     loadChildren: () =>
//       import('@modules/fields-list').then((m) => m.AuthModule),
//     canActivate: [TokenGuard],
//   },
//   {
//     path: 'home',
//     component: HomePageComponent,
//     loadChildren: () =>
//       import('@modules/home/home.module').then((m) => m.HomeModule),
//     canActivate: [SessionGuard],
//     data: { breadcrumb: {alias: 'home',info:'home'} },
//   },
//   {
//     path: 'reset-password',
//     loadChildren: () =>
//       import('@modules/reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
//   },
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
