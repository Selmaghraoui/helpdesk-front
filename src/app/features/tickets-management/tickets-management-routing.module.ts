import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TypesTicketComponent } from './types-ticket/types-ticket.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
  },
  {
    path: 'create-ticket',
    component: TypesTicketComponent,
  },
  {
    path: 'create-ticket',
    children: [
      { path: 'application', component: CreateEditTicketComponent },
      { path: 'incedent', component: CreateEditTicketComponent },
      { path: 'achat', component: CreateEditTicketComponent },
    ],
  },
  {
    path: 'detail/:id',
    component: CreateEditTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsManagementRoutingModule {}
