import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/components/header/header.component';
import { SidebarComponent } from './ui/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, SidebarComponent],
  providers: [],
})
export class SharedModule {}
