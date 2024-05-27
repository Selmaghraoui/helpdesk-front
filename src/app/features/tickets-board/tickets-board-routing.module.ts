import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsBoardComponent } from './tickets-board.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsBoardRoutingModule {}
