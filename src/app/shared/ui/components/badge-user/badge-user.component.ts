import { Component, Input, OnInit } from '@angular/core';

export interface IBadgeUser {
  image: string;
  firstName: string;
  lastName: string;
  userName?: string;
}

@Component({
  selector: 'app-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.scss'],
})
export class BadgeUserComponent implements OnInit {
  @Input() isDeleted?: boolean = false;
  @Input() badgeUser?: IBadgeUser;
  constructor() {}

  ngOnInit() {}
}
