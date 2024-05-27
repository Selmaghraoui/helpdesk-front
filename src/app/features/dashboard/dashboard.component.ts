import { Component, OnInit } from '@angular/core';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/modeles/Role';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
