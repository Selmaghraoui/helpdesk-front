import { Component, Input, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumb?: IBreadcrumb[];

  constructor() {}

  ngOnInit() {}
}
