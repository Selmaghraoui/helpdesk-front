import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared';
import { FULL_ROUTES } from './shared/ui/layouts/full-layout/full-layout-routes';
import { AuthGuard } from './core/guards/auth.guard';
import { UsersResolverService } from './core/resolvers/users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: FULL_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    // canActivate: [false],
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
