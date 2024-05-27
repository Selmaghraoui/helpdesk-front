import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FullLayoutComponent } from './shared';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, FullLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, EditorModule, BrowserAnimationsModule],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
