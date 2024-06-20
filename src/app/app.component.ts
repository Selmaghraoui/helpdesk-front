import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from './core/modeles/IUser';
import { DepartmentService } from './core/services/department.service';
import { Department } from './core/modeles/Department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HelpDesk';

  constructor(
    private usersService: UsersService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.getProfil();
    this.getRoles();
    this.getDepartments();
  }

  // Profil
  getProfil() {
    this.usersService.getMe().subscribe({
      next: (user: IUser) => {
        this.saveProfil(user);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  saveProfil(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Roles
  getRoles() {
    this.usersService.getRole().subscribe({
      next: (response: any) => {
        let roles: string[] = [];
        response.authorities.forEach((auth: any) => {
          if (auth.authority == 'USER') roles.push('user');
          if (auth.authority == 'ADMIN') roles.push('admin');
          if (auth.authority == 'HELPDESK') roles.push('helpDesk');
        });
        this.saveRoles(roles);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  saveRoles(roles: string[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  // Roles
  getDepartments() {
    this.departmentService.getAllDepartment().subscribe({
      next: (response: Department[]) => {
        this.saveDepartments(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  saveDepartments(departments: Department[]): void {
    localStorage.setItem('departments', JSON.stringify(departments));
  }
}
