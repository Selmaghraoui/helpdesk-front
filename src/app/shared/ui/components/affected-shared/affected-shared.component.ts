import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { UpdateSharedWithDto } from 'src/app/core/services/ticket.service';
import { UsersService } from 'src/app/core/services/users.service';

export interface UpdateAssignedToDto {
  assignedToUserId: number;
}

@Component({
  selector: 'app-affected-shared',
  templateUrl: './affected-shared.component.html',
  styleUrls: ['./affected-shared.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => AffectedSharedComponent),
  //     multi: true,
  //   },
  // ],
})
// export class AffectedSharedComponent implements OnInit, ControlValueAccessor {
export class AffectedSharedComponent implements OnInit {
  @Input() isSharedWhith?: boolean = true;

  @Input() usersShared?: IUser[];
  @Input() userAffected?: IUser;
  @Output() usersSelectedShared = new EventEmitter<IUser[]>();
  @Output() idUsersSelectedShared = new EventEmitter<UpdateSharedWithDto>();
  @Output() usersSelectedAffected = new EventEmitter<UpdateAssignedToDto>();

  searchText = '';
  usersSearched?: IUser[];

  Role = Role;
  roles: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.roles = this.usersService.getRoles();
    if (this.isSharedWhith)
      this.usersService.getAllUsers().subscribe((response: IUser[]) => {
        this.usersSearched = response;
      });
    // get list of help desk
    else
      this.usersService.getAllUsers().subscribe((response: IUser[]) => {
        this.usersSearched = response;
      });
  }

  addUser(user: IUser) {
    if (this.isSharedWhith) {
      if (!this.isUserUserSelected(user)) {
        this.usersShared?.push(user);
        this.sendSharedList();
        this.sendIdsSharedList();
      }
    } else {
      this.userAffected = user;
      this.sendAffected(user?.id);
    }
    this.searchText = '';
  }

  removeUser(User: IUser) {
    if (this.isSharedWhith) {
      this.usersShared = this.usersShared?.filter((i) => i.id !== User.id);
      this.sendSharedList();
      this.sendIdsSharedList();
    } else {
      this.sendAffected(0);
    }
  }

  isUserUserSelected(User: IUser): boolean {
    if (this.usersShared == null) this.usersShared = [];
    return this.usersShared!.some((i) => i.id === User.id);
  }

  sendSharedList() {
    this.usersSelectedShared.emit(this.usersShared);
  }

  sendIdsSharedList() {
    let usersId: number[] = [];

    this.usersShared?.forEach((user) => {
      usersId.push(user?.id);
    });
    const updateSharedWith: UpdateSharedWithDto = {
      sharedWithUserIds: usersId,
    };
    this.idUsersSelectedShared.emit(updateSharedWith);
  }

  sendAffected(id: number) {
    const updateAssignedToDto: UpdateAssignedToDto = {
      assignedToUserId: id,
    };

    this.usersSelectedAffected.emit(updateAssignedToDto);
  }

  // -----------------------------------------
  // -----------------------------------------
  // writeValue(obj: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnChange(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnTouched(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
}
