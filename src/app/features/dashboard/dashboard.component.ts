import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TypeActivity } from 'src/app/core/modeles/TypeActivity';
import { TicketService } from 'src/app/core/services/ticket.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  favoriteTicketList: Ticket[] = [];
  TaskStatus = TaskStatus;
  Activity = TypeActivity;
  Role = Role;
  roles: string[] = [];

  // departments: Department[] = [];

  totalTickets?: number;
  totalUsers?: number;
  totalDepartments?: number;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getRoles();

    if (this.roles?.includes(Role.helpDesk) || this.roles?.includes(Role.admin))
      this.getFavoriteTickets();
    else if (this.roles?.includes(Role.user)) {
      // this.getTicketsForUser();
    }
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getFavoriteTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.totalTickets = tickets.length;
        tickets.forEach((ticket) => {
          if (ticket.favorite == true) this.favoriteTicketList.push(ticket);
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  toggleFavorits(idTicket?: number) {
    this.favoriteTicketList.forEach((ticket: Ticket) => {
      if (ticket.id === idTicket) ticket.favorite = !ticket.favorite;
    });
  }

  getTotalDepartments(event: number) {
    this.totalDepartments = event;
  }
}
