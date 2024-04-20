import { NgModule } from '@angular/core';
import { ErrorPageLayoutComponent } from './components/error-page-layout/error-page-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [ErrorPageLayoutComponent, ErrorPageLayoutComponent],
  imports: [SharedModule, PagesRoutingModule],
})
export class PagesModule {}
