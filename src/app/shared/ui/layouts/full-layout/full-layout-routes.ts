import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';

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
    path: 'tickets-management',
    loadChildren: () =>
      import(
        '../../../../features/tickets-management/tickets-management.module'
      ).then((m) => m.TicketsManagementModule),
  },
];
