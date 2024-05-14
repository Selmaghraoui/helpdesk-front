import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
  },
  //   {
  //     path: 'detail/:id',
  //     component: UserDetailsComponent,
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule {}
