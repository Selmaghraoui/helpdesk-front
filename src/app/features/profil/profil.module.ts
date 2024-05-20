import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfilComponent } from './profil.component';
import { ProfilRoutingModule } from './profil-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ProfilComponent],
})
export class ProfilModule {}
