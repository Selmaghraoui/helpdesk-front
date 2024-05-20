import { Component, Input, OnInit } from '@angular/core';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';

@Component({
  selector: 'app-badge-priority',
  templateUrl: './badge-priority.component.html',
  styleUrls: ['./badge-priority.component.scss'],
})
export class BadgePriorityComponent implements OnInit {
  @Input() badgePriority?: string;
  TaskPriority = TaskPriority;
  constructor() {}

  ngOnInit() {}
}
