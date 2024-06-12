import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/modeles/Department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  constructor() {}

  ngOnInit() {}
}
