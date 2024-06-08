import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HelpDesk';
  profile: any;

  constructor(
    public keycloakService: KeycloakService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getProfil();
  }

  async getProfil() {
    this.keycloakService.isLoggedIn();
    if (await this.keycloakService.isLoggedIn()) {
      this.profile = this.keycloakService
        .loadUserProfile()
        .then((profileKeycloak) => {
          this.usersService
            .getMe(profileKeycloak.username!)
            .subscribe((profil) => {
              this.profile = profil;
            });
          console.log('this.profile .. ', this.profile);
        });
    }
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
