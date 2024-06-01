import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/components/header/header.component';
import { SidebarComponent } from './ui/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CustomEditorComponent } from './ui/components/custom-editor/custom-editor.component';
import { BreadcrumbComponent } from './ui/components/breadcrumb/breadcrumb.component';
import { ChipsComponent } from './ui/components/chips/chips.component';
import { SelfDropdownComponent } from './ui/components/self-dropdown/self-dropdown.component';
import { ProfilUserComponent } from './ui/components/profil-user/profil-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgePriorityComponent } from './ui/components/badge-priority/badge-priority.component';
import { BadgeStatusComponent } from './ui/components/badge-status/badge-status.component';
import { BadgeUserComponent } from './ui/components/badge-user/badge-user.component';
import { BadgeTypeComponent } from './ui/components/badge-type/badge-type.component';
import { BadgeDepartmentComponent } from './ui/components/badge-department/badge-department.component';
import { ChartComponent } from './ui/components/chart/chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CustomEditorComponent,
    BreadcrumbComponent,
    ChipsComponent,
    SelfDropdownComponent,
    ProfilUserComponent,
    ChartComponent,

    BadgePriorityComponent,
    BadgeStatusComponent,
    BadgeUserComponent,
    BadgeTypeComponent,
    BadgeDepartmentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    EditorModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    CustomEditorComponent,
    BreadcrumbComponent,
    ChipsComponent,
    SelfDropdownComponent,
    ProfilUserComponent,
    ChartComponent,

    BadgePriorityComponent,
    BadgeStatusComponent,
    BadgeUserComponent,
    BadgeTypeComponent,
    BadgeDepartmentComponent,
  ],
  providers: [],
})
export class SharedModule {}
