import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
})
export class AffectedSharedComponent implements OnInit {
  @Input() isSharedWhith?: boolean = true;

  @Input() usersShared?: IUser[];
  @Input() userAffected?: IUser;
  @Output() usersSelectedShared = new EventEmitter<UpdateSharedWithDto>();
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
    } else {
      this.sendAffected(0);
    }
  }

  isUserUserSelected(User: IUser): boolean {
    return this.usersShared!.some((i) => i.id === User.id);
  }

  sendSharedList() {
    let usersId: number[] = [];

    this.usersShared?.forEach((user) => {
      usersId.push(user?.id);
    });
    const updateSharedWith: UpdateSharedWithDto = {
      sharedWithUserIds: usersId,
    };
    this.usersSelectedShared.emit(updateSharedWith);
  }

  sendAffected(id: number) {
    const updateAssignedToDto: UpdateAssignedToDto = {
      assignedToUserId: id,
    };

    this.usersSelectedAffected.emit(updateAssignedToDto);
  }
}
