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

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CustomEditorComponent,
    BreadcrumbComponent,
    ChipsComponent,
    SelfDropdownComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule, EditorModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    CustomEditorComponent,
    BreadcrumbComponent,
    ChipsComponent,
    SelfDropdownComponent,
  ],
  providers: [],
})
export class SharedModule {}
