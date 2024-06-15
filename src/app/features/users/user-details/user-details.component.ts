import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { UsersService } from 'src/app/core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: true,
      lien: '/users',
    },
    {
      title: 'Details',
      isLien: false,
    },
  ];
  user?: IUser;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getUserById(userId);
  }

  getUserById(idUser: number) {
    this.usersService.getUserById(idUser).subscribe({
      next: (user: IUser) => {
        this.user = user;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
