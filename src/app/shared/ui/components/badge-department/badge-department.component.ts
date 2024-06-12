import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/core/modeles/Department';

@Component({
  selector: 'app-badge-department',
  templateUrl: './badge-department.component.html',
  styleUrls: ['./badge-department.component.scss'],
})
export class BadgeDepartmentComponent implements OnInit {
  @Input() department?: Department;

  constructor() {}

  ngOnInit() {}
}
