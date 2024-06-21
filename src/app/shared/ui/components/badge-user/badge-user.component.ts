import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

export interface badgeUser {
  id: number;
  docId: number;
  username: string;
}

@Component({
  selector: 'app-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.scss'],
})
export class BadgeUserComponent implements OnInit, OnChanges {
  @Input() isDeleted?: boolean = false;
  @Input() searchable?: boolean = true;
  @Input() badgeUser?: badgeUser;
  @Output() userDeleted = new EventEmitter<badgeUser>();

  imageSrc: string | undefined; // The data URL to be bound to the img src

  constructor(private usersService: UsersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.badgeUser = changes['badgeUser'].currentValue;
  }

  ngOnInit() {}

  deleteUser() {
    // this.userDeleted.emit(this.badgeUser);
  }

  // Converts the base64 string to a data URL
  convertBase64ToDataURL(contentType: string, base64: string): string {
    return `data:${contentType};base64,${base64}`;
  }
}
