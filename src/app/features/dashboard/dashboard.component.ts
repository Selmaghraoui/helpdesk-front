import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TypeActivity } from 'src/app/core/modeles/TypeActivity';
import { TicketService } from 'src/app/core/services/ticket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'src/app/core/modeles/IUser';

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

  // departments: Department[] = [];

  totalTickets?: number;
  totalUsers?: number;
  totalDepartments?: number;

  user?: IUser;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
    // if (this.roles?.includes(Role.helpDesk) || this.roles?.includes(Role.admin))
    // this.getFavoriteTickets();
    // else
    if (
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

  getTicketsForUser() {
    if (this.user?.username) {
      this.ticketService.getTickestForUser(this.user?.username).subscribe({
        next: (tickets: Ticket[]) => {
          this.totalTickets = tickets.length;
          // tickets.forEach((ticket) => {
          //   if (ticket.favorite == true) this.favoriteTicketList.push(ticket);
          // });
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  getTotalDepartments(event: number) {
    this.totalDepartments = event;
  }
}
