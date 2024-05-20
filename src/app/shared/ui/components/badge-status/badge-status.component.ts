import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';

@Component({
  selector: 'app-badge-status',
  templateUrl: './badge-status.component.html',
  styleUrls: ['./badge-status.component.scss'],
})
export class BadgeStatusComponent implements OnInit {
  @Input() badgeStatus?: string;
  TaskStatus = TaskStatus;

  constructor() {}

  ngOnInit() {}
}
