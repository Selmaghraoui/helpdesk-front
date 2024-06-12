import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user: any;
  roles: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.user = this.usersService.getUser();
    this.roles = this.usersService.getRoles();
  }
}
