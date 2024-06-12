import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil.component';
import { UsersResolverService } from 'src/app/core/resolvers/users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule {}
