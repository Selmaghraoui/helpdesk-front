import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: true,
      lien: '/users',
    },
    {
      title: 'Create user',
      isLien: false,
    },
  ];
  userFormGroup!: FormGroup;

  constructor(private usersService: UsersService) {
    this.userFormGroup = new FormGroup({
      // id: number;
      // referenceUser?: string;
      // image: string;
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      // status: boolean;
      // post: string;
      // department: string;
      // phoneNumber: string;
      username: new FormControl(null),
      // isActivate: boolean;
      // location?: string;
      // birthday?: string;
      // joinDate?: string;
      // aboutMe?: string;
      password: new FormControl(null),
      roles: new FormControl([]),
    });
  }

  ngOnInit() {}

  createUser(userCreated: any) {
    this.usersService.createUser(userCreated).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
    console.log('userCreated', userCreated);
  }
}
