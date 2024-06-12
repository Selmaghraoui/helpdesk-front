import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UsersService } from './core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HelpDesk';

  constructor(
    public keycloakService: KeycloakService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProfil();
    this.getRole();
  }

  getProfil() {
    this.usersService.getMe().subscribe({
      next: (value: any) => {
        this.usersService.setUser(value);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getRole() {
    this.usersService.getRole().subscribe({
      next: (response: any) => {
        let roles: string[] = [];
        response.authorities.forEach((auth: any) => {
          if (auth.authority == 'USER') roles.push('user');
          if (auth.authority == 'ADMIN') roles.push('admin');
          if (auth.authority == 'HELPDESK') roles.push('helpDesk');
        });
        this.usersService.setRoles(roles);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  async handleLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin,
    });
  }

  handleLogout() {
    this.keycloakService.logout(window.location.origin);
  }
}
