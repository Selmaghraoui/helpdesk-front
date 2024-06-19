import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  TicketService,
  UserNameDto,
} from 'src/app/core/services/ticket.service';
import { filterTicket } from 'src/app/core/utils/helpers';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;
  Role = Role;
  roles: string[] = [];
  user?: IUser;

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];

  ticketList: Ticket[] = [];
  searchText = '';
  totalTicketListOpen?: number;
  totalTicketListHigh?: number;

  constructor(private TicketService: TicketService) {}

  ngOnInit() {
    this.getUser();
    this.getRoles();

    if (this.roles.includes(Role.helpDesk) || this.roles.includes(Role.admin))
      this.getAllTickets();
    else if (
      this.roles.includes(Role.user) &&
      !this.roles.includes(Role.helpDesk) &&
      !this.roles.includes(Role.admin)
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

  getAllTickets() {
    this.TicketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketList = tickets;
        const listOpen = filterTicket(tickets, 'status', TaskStatus.open);
        this.totalTicketListOpen = listOpen.length;
        const listHigh = filterTicket(tickets, 'priority', TaskPriority.high);
        this.totalTicketListHigh = listHigh.length;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTicketsForUser() {
    const userNameDto: UserNameDto = {
      username: this.user?.username!,
    };
    this.TicketService.getTickestForUser(userNameDto).subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketList = tickets;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
