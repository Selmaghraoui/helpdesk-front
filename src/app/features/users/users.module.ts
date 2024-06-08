import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UsersComponent, UserDetailsComponent, CreateUserComponent],
})
export class UsersModule {}
