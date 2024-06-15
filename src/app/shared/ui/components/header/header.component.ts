import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user?: IUser;
  isDisplay: boolean = false;

  constructor() {}

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
}
