import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { UpdateSharedWithDto } from 'src/app/core/services/ticket.service';
import { UsersService } from 'src/app/core/services/users.service';
import { badgeUser } from '../badge-user/badge-user.component';
import { UserRes } from 'src/app/features/users/users.component';

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
  @Input() status?: TaskStatus;

  @Input() usersShared?: badgeUser[];
  @Input() isModal?: Boolean = false;
  @Input() userAffected?: badgeUser;
  @Output() usersSelectedShared = new EventEmitter<badgeUser[]>();
  @Output() idUsersSelectedShared = new EventEmitter<UpdateSharedWithDto>();
  @Output() usersSelectedAffected = new EventEmitter<UpdateAssignedToDto>();

  searchText = '';
  usersSearched: badgeUser[] = [];

  Role = Role;
  roles: string[] = [];

  TaskStatus = TaskStatus;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getRoles();

    if (this.isSharedWhith)
      this.usersService.getAllUsers().subscribe((response: UserRes[]) => {
        this.usersSearched = response;
      });
    // get list of help desk
    else
      this.usersService.getAllUsers().subscribe((response: UserRes[]) => {
        this.usersSearched = response;
      });
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  addUser(user: badgeUser) {
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

  removeUser(User: badgeUser) {
    if (this.isSharedWhith) {
      this.usersShared = this.usersShared?.filter((i) => i.id !== User.id);
      this.sendSharedList();
      this.sendIdsSharedList();
    } else {
      this.sendAffected(0);
    }
  }

  isUserUserSelected(User: badgeUser): boolean {
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
}
