import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';
import { UsersService } from 'src/app/core/services/users.service';

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

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];

  ticketList: Ticket[] = [];

  constructor(
    private TicketService: TicketService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.roles = this.usersService.getRoles();
    if (this.roles.includes(Role.helpDesk) || this.roles.includes(Role.admin))
      this.getAllTickets();
    else if (this.roles.includes(Role.user)) {
      this.getTicketsForUser();
    }
  }

  getAllTickets() {
    this.TicketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketList = tickets;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTicketsForUser() {}
}
