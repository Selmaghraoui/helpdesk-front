import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../../../features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import(
        '../../../../features/tickets-management/tickets-management.module'
      ).then((m) => m.TicketsManagementModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../../../features/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
];
