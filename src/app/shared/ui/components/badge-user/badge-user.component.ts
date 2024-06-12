import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.scss'],
})
export class BadgeUserComponent implements OnInit {
  @Input() isDeleted?: boolean = false;
  @Input() searchable?: boolean = true;
  @Input() badgeUser?: IUser;
  @Output() userDeleted = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit() {}

  deleteUser() {
    this.userDeleted.emit(this.badgeUser);
  }
}
