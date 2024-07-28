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
import { DepartmentComponent } from './ui/components/department/department.component';
import { EditProfilUserPopupComponent } from './ui/components/edit-profil-user-popup/edit-profil-user-popup.component';
import { ActivityComponent } from './ui/components/activity/activity.component';
import { AffectedSharedComponent } from './ui/components/affected-shared/affected-shared.component';
import { DisplayImageComponent } from './ui/components/display-image/display-image.component';
import { FilterUsersPipe } from '../core/pipes/filter-users.pipe';
import { FilterBadgeUsersPipe } from '../core/pipes/filter-badge-users.pipe';
import { ExplanationComponent } from './ui/components/explanation/explanation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterByUserComponent } from './ui/components/filter-by-user/filter-by-user.component';
import { AdvancedRatingHelpdeskComponent } from './ui/components/advanced-rating-helpdesk/advanced-rating-helpdesk.component';

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
    DepartmentComponent,
    EditProfilUserPopupComponent,
    ActivityComponent,
    AffectedSharedComponent,
    DisplayImageComponent,
    ExplanationComponent,
    FilterByUserComponent,
    AdvancedRatingHelpdeskComponent,

    BadgePriorityComponent,
    BadgeStatusComponent,
    BadgeUserComponent,
    BadgeTypeComponent,
    BadgeDepartmentComponent,

    // ------- Pipes
    FilterUsersPipe,
    FilterBadgeUsersPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    EditorModule,

    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
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
    DepartmentComponent,
    EditProfilUserPopupComponent,
    ActivityComponent,
    AffectedSharedComponent,
    DisplayImageComponent,
    ExplanationComponent,
    FilterByUserComponent,
    AdvancedRatingHelpdeskComponent,

    BadgePriorityComponent,
    BadgeStatusComponent,
    BadgeUserComponent,
    BadgeTypeComponent,
    BadgeDepartmentComponent,

    // ------- Pipes
    FilterUsersPipe,
    FilterBadgeUsersPipe,
  ],
  providers: [],
})
export class SharedModule {}
