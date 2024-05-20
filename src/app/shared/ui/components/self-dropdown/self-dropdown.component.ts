import { Component, Input, OnInit } from '@angular/core';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { IBadgeUser } from '../badge-user/badge-user.component';

@Component({
  selector: 'app-self-dropdown',
  templateUrl: './self-dropdown.component.html',
  styleUrls: ['./self-dropdown.component.scss'],
})
export class SelfDropdownComponent implements OnInit {
  @Input() helpDeskList?: IBadgeUser[];
  TaskPriority = TaskPriority;

  constructor() {}

  ngOnInit() {}
}
