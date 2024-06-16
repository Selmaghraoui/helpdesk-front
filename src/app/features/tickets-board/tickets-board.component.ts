import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  TicketService,
  TicketStatusDto,
} from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-tickets-board',
  templateUrl: './tickets-board.component.html',
  styleUrls: ['./tickets-board.component.scss'],
})
export class TicketsBoardComponent implements OnInit {
  TaskStatus = TaskStatus;
  ticketList: Ticket[] = [];
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];

  ticket!: Ticket;
  user?: IUser;

  Role = Role;
  roles: string[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getRoles();
    this.getRoles();

    this.getAllTickets();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  filterTicket(status: string) {
    return this.ticketList.filter((m) => m.status == status);
  }

  ticketListOpen: Ticket[] = [];
  ticketListCanceled: Ticket[] = [];
  ticketListEvaluating: Ticket[] = [];
  ticketListInProgress: Ticket[] = [];
  ticketListTesting: Ticket[] = [];
  ticketListRejected: Ticket[] = [];
  ticketListResolved: Ticket[] = [];

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketList = tickets;

        this.ticketListOpen = this.filterTicket(TaskStatus.open);
        this.ticketListCanceled = this.filterTicket(TaskStatus.canceled);
        this.ticketListEvaluating = this.filterTicket(TaskStatus.evaluating);
        this.ticketListInProgress = this.filterTicket(TaskStatus.inProgress);
        this.ticketListTesting = this.filterTicket(TaskStatus.testing);
        this.ticketListRejected = this.filterTicket(TaskStatus.rejected);
        this.ticketListResolved = this.filterTicket(TaskStatus.resolved);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  drop(event: CdkDragDrop<Ticket[]>, status: string) {
    console.log('drop');

    this.changeStatus(this.ticket, status);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  changeStatus(ticket: Ticket, status: string) {
    console.log('ticket', ticket);
    console.log('status', status);

    const ticketStatus: TicketStatusDto = {
      explication: ticket?.title,
      status: status,
    };

    if (ticket?.id)
      this.ticketService.changeStatus(ticket?.id, ticketStatus).subscribe({
        next: () => {
          // toaster of changing status
          console.log('status changed');
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  resolvedTicket(ticket: Ticket, isResolved: boolean, index: number) {
    const indexTicket = this.ticketListTesting.findIndex(
      (ticket) => ticket.id === ticket.id
    );

    this.ticketListTesting[indexTicket].resolved = isResolved;
    if (isResolved == true) {
      this.ticketListResolved.push(ticket);
      this.changeStatus(ticket, 'Resolved');
    }
    if (isResolved == false) {
      this.changeStatus(ticket, 'In Progress');
      this.ticketListInProgress.push(ticket);
    }

    this.ticketListTesting.splice(index, 1);
  }
}
