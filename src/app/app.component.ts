import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UsersService } from './core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent implements OnInit {
//   title = 'HelpDesk';
//   profile: any;
//   constructor(
//     private usersService: UsersService,
//     public keycloakService: KeycloakService
//   ) {}

//   ngOnInit(): void {
//     if (this.keycloakService.isLoggedIn()) {
//       this.profile = this.keycloakService.loadUserProfile().then((profile) => {
//         this.profile = profile;
//       });
//     }
//     // if (!this.keycloakService.isAuthenticated()) {
//     //   this.keycloakService.login();
//     // }
//     // this.usersService.getMe().subscribe({
//     //   next: (value) => {
//     //     console.log('logged me :', value);
//     //   },
//     //   error: (error: HttpErrorResponse) => {
//     //     console.log(error.message);
//     //   },
//     // });

//     async handleLogin() {
//       await this.keycloakService.login({
//         redirectUri: window.location.origin
//       })
//     };

//     handleLogout() {
//       this.keycloakService.logout(window.location.origin)
//     };
//   }
// }
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
    const isLoggedIn = this.keycloakService.isLoggedIn();
    if (await isLoggedIn) {
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
