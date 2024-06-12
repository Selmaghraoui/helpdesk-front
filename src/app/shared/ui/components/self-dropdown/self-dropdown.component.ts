import { Component, Input, OnInit } from '@angular/core';
import { IBadgeUser } from 'src/app/core/modeles/IBadgeUser';
import { IUser } from 'src/app/core/modeles/IUser';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';

@Component({
  selector: 'app-self-dropdown',
  templateUrl: './self-dropdown.component.html',
  styleUrls: ['./self-dropdown.component.scss'],
})
export class SelfDropdownComponent implements OnInit {
  @Input() helpDesk?: IUser;
  TaskPriority = TaskPriority;

  constructor() {}

  ngOnInit() {}
}
