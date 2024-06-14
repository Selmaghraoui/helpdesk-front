import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TypeActivity } from 'src/app/core/modeles/TypeActivity';
import { RecentActivityUser } from 'src/app/core/modeles/RecentActivity';
import { IBadgeUser } from 'src/app/core/modeles/IBadgeUser';
import { Department } from 'src/app/core/modeles/Department';
import { UsersService } from 'src/app/core/services/users.service';
import { TicketService } from 'src/app/core/services/ticket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  departments: Department[] = [];

  constructor(
    private usersService: UsersService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.roles = this.usersService.getRoles();
    if (this.roles.includes(Role.helpDesk) || this.roles.includes(Role.admin))
      this.getFavoriteTickets();
    else if (this.roles.includes(Role.user)) {
      // this.getTicketsForUser();
    }
  }

  getFavoriteTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
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
}
