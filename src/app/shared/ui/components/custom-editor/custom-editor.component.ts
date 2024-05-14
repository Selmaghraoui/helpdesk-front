import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss'],
})
export class CustomEditorComponent implements OnInit {
  editConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'list link image table',
  };
  constructor() {}

  ngOnInit() {}
}
