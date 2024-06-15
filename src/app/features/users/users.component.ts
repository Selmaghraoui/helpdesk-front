import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: false,
      lien: '/users',
    },
  ];
  Role = Role;
  roles: string[] = [];

  listUsers: IUser[] = [];
  totalUsers: number = 0;
  totalUsersEnabled: number = 0;
  totalUsersHelpDesk: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getRoles();

    this.getAllUsers();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (users: IUser[]) => {
        this.listUsers = users;
        this.totalUsers = this.listUsers.length;
        this.listUsers.forEach((user) => {
          if (user?.enabled == true) this.totalUsersEnabled++;
          // change status to know how much helpesk users exist
          if (user?.status == true) this.totalUsersHelpDesk++;
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
