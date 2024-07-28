import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from './core/modeles/IUser';
import { DepartmentService } from './core/services/department.service';
import { Department } from './core/modeles/Department';
import { TicketService } from './core/services/ticket.service';
import { Ticket } from './core/modeles/Ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HelpDesk';
  user?: IUser;

  constructor(
    private usersService: UsersService,
    private departmentService: DepartmentService,
    private ticketService: TicketService
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
        this.user = user;
        this.getFavoriteTickets();
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

  // Departments
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

  // favorites
  getFavoriteTickets() {
    if (this.user?.id != undefined)
      this.ticketService.getFavoriteTickets(this.user?.id).subscribe({
        next: (tickets: Ticket[]) => {
          this.saveFavoriteTickets(tickets);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  saveFavoriteTickets(tickets: Ticket[]): void {
    localStorage.setItem('FavoriteTickets', JSON.stringify(tickets));
  }
}
