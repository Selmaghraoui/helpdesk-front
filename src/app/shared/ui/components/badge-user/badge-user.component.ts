import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.scss'],
})
export class BadgeUserComponent implements OnInit, OnChanges {
  @Input() isDeleted?: boolean = false;
  @Input() searchable?: boolean = true;
  @Input() badgeUser?: IUser;
  @Output() userDeleted = new EventEmitter<IUser>();

  imageSrc: string | undefined; // The data URL to be bound to the img src

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.badgeUser = changes['badgeUser'].currentValue;
    if (this.badgeUser && this.badgeUser?.document?.data) {
      this.imageSrc = this.convertBase64ToDataURL(
        this.badgeUser?.document?.contentType,
        this.badgeUser?.document?.data
      );
    }
  }

  ngOnInit() {}

  deleteUser() {
    this.userDeleted.emit(this.badgeUser);
  }

  // Converts the base64 string to a data URL
  convertBase64ToDataURL(contentType: string, base64: string): string {
    return `data:${contentType};base64,${base64}`;
  }
}
