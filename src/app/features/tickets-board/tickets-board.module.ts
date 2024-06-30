import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TicketsBoardRoutingModule } from './tickets-board-routing.module';
import { TicketsBoardComponent } from './tickets-board.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    TicketsBoardRoutingModule,
    SharedModule,
    DragDropModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [TicketsBoardComponent],
})
export class TicketBoardModule {}
