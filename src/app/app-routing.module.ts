import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared';
import { FULL_ROUTES } from './shared/ui/layouts/full-layout/full-layout-routes';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: FULL_ROUTES,
  },
  // {
  //   // canActivate: [false],
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/pages.module').then((m) => m.PagesModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
