import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user?: IUser;
  roles: string[] = [];

  constructor() {}

  ngOnInit() {
    this.getUser();
    this.getRoles();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }
}
