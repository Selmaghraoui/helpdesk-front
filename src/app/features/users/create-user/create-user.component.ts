import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/core/modeles/Department';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { ICreateUser, UsersService } from 'src/app/core/services/users.service';
import { passwordMatchValidator } from 'src/app/shared/ui/components/profil-user/profil-user.component';

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

  departments: Department[] = [];

  current = 0;

  userFormGroup!: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.userFormGroup = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
        departmentDto: new FormControl('', Validators.required),
      },
      { validators: passwordMatchValidator() }
    );
  }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    const departmentsData = localStorage.getItem('departments');
    this.departments = departmentsData ? JSON.parse(departmentsData) : null;
  }

  createUser(userCreated: ICreateUser) {
    const createdUser: ICreateUser = {
      ...userCreated,
      departmentDto: {
        name: this.userFormGroup?.get('departmentDto')?.value,
      },
    };

    this.usersService.createUser(createdUser).subscribe({
      next: () => {
        this.router.navigateByUrl('/users');
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  checkValidators(formControlName: string): boolean {
    return (
      this.userFormGroup.controls?.[formControlName]?.invalid &&
      this.userFormGroup.controls?.[formControlName]?.touched
    );
  }
}
