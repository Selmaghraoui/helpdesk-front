import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketsManagementRoutingModule } from './tickets-management-routing.module';
import { TicketsComponent } from './tickets.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';
import { TypesTicketComponent } from './types-ticket/types-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTicketsPipe } from 'src/app/core/pipes/filter-tickets.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReviewComponent } from './Review/Review.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TicketsComponent,
    CreateEditTicketComponent,
    TypesTicketComponent,
    ReviewComponent,

    FilterTicketsPipe,
  ],
})
export class TicketsManagementModule {}
