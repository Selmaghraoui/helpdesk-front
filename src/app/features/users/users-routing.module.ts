import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersResolverService } from 'src/app/core/resolvers/users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'detail/:id',
    component: UserDetailsComponent,
    resolve: { usersResolver: UsersResolverService },
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
