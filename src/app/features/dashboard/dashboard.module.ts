import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard.component';
import { FavoriteTicketsComponent } from './favorite-tickets/favorite-tickets.component';
import { SharedTicketsComponent } from './sharedTickets/sharedTickets.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, DragDropModule],
  declarations: [
    DashboardComponent,
    FavoriteTicketsComponent,
    SharedTicketsComponent,
  ],
})
export class DashboardModule {}
