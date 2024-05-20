import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-department',
  templateUrl: './badge-department.component.html',
  styleUrls: ['./badge-department.component.scss'],
})
export class BadgeDepartmentComponent implements OnInit {
  @Input() department?: string;

  constructor() {}

  ngOnInit() {}
}
