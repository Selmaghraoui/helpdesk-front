import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketsManagementRoutingModule } from './tickets-management-routing.module';
import { TicketsComponent } from './tickets.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';
import { TypesTicketComponent } from './types-ticket/types-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTicketsPipe } from 'src/app/core/pipes/filter-tickets.pipe';

@NgModule({
  imports: [
    CommonModule,
    TicketsManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TicketsComponent,
    CreateEditTicketComponent,
    TypesTicketComponent,

    FilterTicketsPipe,
  ],
})
export class TicketsManagementModule {}
