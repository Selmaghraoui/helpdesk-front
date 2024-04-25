import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsManagementComponent } from './tickets-management.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'create-ticket',
    component: CreateEditTicketComponent,
  },
  //   {
  //     path: '/add',
  //     component: AddEditTicketComponent,
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsManagementRoutingModule {}
