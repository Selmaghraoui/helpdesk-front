import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // SharedModule,
    // HttpClientModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
