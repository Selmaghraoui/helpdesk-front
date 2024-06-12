import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NzStepsModule,

    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
  ],
  declarations: [UsersComponent, UserDetailsComponent, CreateUserComponent],
})
export class UsersModule {}
