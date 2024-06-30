import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { UserRes } from 'src/app/features/users/users.component';
import { badgeUser } from '../badge-user/badge-user.component';

@Component({
  selector: 'app-filter-by-user',
  templateUrl: './filter-by-user.component.html',
  styleUrls: ['./filter-by-user.component.scss'],
})
export class FilterByUserComponent implements OnInit {
  @Input() isCreatedBy?: boolean = true;
  @Output() usersSelected = new EventEmitter<badgeUser | null>();

  searchText = '';
  usersSearched: badgeUser[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response: UserRes[]) => {
      this.usersSearched = response;
    });
  }

  getUser(user: badgeUser) {
    this.usersSelected.emit(user);
    this.searchText = user?.username;
  }

  getEmpty() {
    if (this.searchText == '') this.usersSelected.emit(null);
  }
}
