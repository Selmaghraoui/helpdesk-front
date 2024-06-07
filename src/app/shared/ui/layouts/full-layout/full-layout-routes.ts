import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

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
    // canActivate: [AuthGuard],
    // data: { roles: ['ADMIN'] },
  },
  {
    path: 'tickets-board',
    loadChildren: () =>
      import('../../../../features/tickets-board/tickets-board.module').then(
        (m) => m.TicketBoardModule
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
  {
    path: 'profil',
    loadChildren: () =>
      import('../../../../features/profil/profil.module').then(
        (m) => m.ProfilModule
      ),
  },
];
