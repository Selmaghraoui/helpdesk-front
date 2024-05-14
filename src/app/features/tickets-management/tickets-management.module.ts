import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { TicketsManagementComponent } from './tickets-management.component';
import { TicketsManagementRoutingModule } from './tickets-management-routing.module';
import { TicketsComponent } from './tickets.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';
import { TypesTicketComponent } from './types-ticket/types-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TicketsManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
  ],
  declarations: [
    // TicketsManagementComponent,
    TicketsComponent,
    CreateEditTicketComponent,
    TypesTicketComponent,
  ],
})
export class TicketsManagementModule {}
