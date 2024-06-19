import { Component, Input, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user?: IUser;
  isDisplay: boolean = false;
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  signOut() {
    const x = 'http://localhost:4200';

    // this.keycloakService.logout(this.keycloakService?.)
    this.keycloakService.clearToken();
  }
}
