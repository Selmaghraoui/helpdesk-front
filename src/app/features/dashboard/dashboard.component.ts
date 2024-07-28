import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TypeActivity } from 'src/app/core/modeles/TypeActivity';
import { TicketService } from 'src/app/core/services/ticket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'src/app/core/modeles/IUser';
import { UsersService } from 'src/app/core/services/users.service';
import { UserRes } from '../users/users.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  TaskStatus = TaskStatus;
  Activity = TypeActivity;
  Role = Role;
  roles: string[] = [];

  totalTickets?: number;
  totalUsers?: number;
  totalDepartments?: number;

  user?: IUser;

  constructor(
    private ticketService: TicketService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
    this.getDepartments();
    this.getTotalUserss();

    if (this.roles?.includes(Role.helpDesk) || this.roles?.includes(Role.admin))
      this.getAllTickets();
    else if (
      this.roles?.includes(Role.user) &&
      !this.roles?.includes(Role.helpDesk) &&
      !this.roles?.includes(Role.admin)
    ) {
      this.getTicketsForUser();
    }
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getDepartments(): void {
    const departmentsData = localStorage.getItem('departments');
    const departments = departmentsData ? JSON.parse(departmentsData) : null;
    this.totalDepartments = departments?.length;
  }

  getTicketsForUser() {
    if (this.user?.username) {
      this.ticketService.getTickestForUser(this.user?.username).subscribe({
        next: (tickets: Ticket[]) => {
          this.totalTickets = tickets.length;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  getTotalDepartments(event?: number) {
    this.totalDepartments = event;
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.totalTickets = tickets?.length;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTotalUserss() {
    this.usersService.getAllUsers().subscribe({
      next: (users: UserRes[]) => {
        this.totalUsers = users?.length;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
