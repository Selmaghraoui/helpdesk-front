import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageContentComponent } from './components/error-page-content/error-page-content.component';
import { ErrorPageLayoutComponent } from './components/error-page-layout/error-page-layout.component';

const routes: Routes = [
  {
    path: ':segment',
    component: ErrorPageContentComponent,
  },
  {
    path: '**',
    // redirectTo: 'not-found',
    component: ErrorPageLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
