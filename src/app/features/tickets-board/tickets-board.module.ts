import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TicketsBoardRoutingModule } from './tickets-board-routing.module';
import { TicketsBoardComponent } from './tickets-board.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsBoardRoutingModule,
    SharedModule,
    DragDropModule,
  ],
  declarations: [TicketsBoardComponent],
})
export class TicketBoardModule {}
