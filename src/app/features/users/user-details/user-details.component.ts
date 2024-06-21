import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        this.user = data['usersResolver'];
        console.log('this.user', this.user);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
