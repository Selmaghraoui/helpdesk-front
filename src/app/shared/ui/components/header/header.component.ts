import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // user ma fihch document
  @Input() user?: IUser;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.user = this.usersService.getUser();
  }
}
