import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;
  Role = Role;
  roleUser = 'helpDesk';
  // roleUser = 'user';
  // roleUser = 'admin';

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];

  ticketList: Ticket[] = [];

  constructor(private TicketService: TicketService) {}

  ngOnInit() {
    this.TicketService.getAllTickets().subscribe({
      next: (value) => {
        console.log('value', value);
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }
}
