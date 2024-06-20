import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  TicketService,
  TicketStatusDto,
} from 'src/app/core/services/ticket.service';
import { ExplanationComponent } from './explanation/explanation.component';
import { MatDialog } from '@angular/material/dialog';
import { filterTicket } from 'src/app/core/utils/helpers';

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
  index?: number;
  user?: IUser;

  Role = Role;
  roles: string[] = [];

  constructor(private ticketService: TicketService, public dialog: MatDialog) {}

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

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
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
        this.ticketProcessBoard(tickets);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getTicketsForUser() {
    if (this.user?.username) {
      this.ticketService.getTickestForUser(this.user?.username).subscribe({
        next: (tickets: Ticket[]) => {
          this.ticketProcessBoard(tickets);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  ticketProcessBoard(tickets: Ticket[]) {
    this.ticketList = tickets;

    this.ticketListOpen = filterTicket(tickets, 'status', TaskStatus.open);
    this.ticketListCanceled = filterTicket(
      tickets,
      'status',
      TaskStatus.canceled
    );
    this.ticketListEvaluating = filterTicket(
      tickets,
      'status',
      TaskStatus.evaluating
    );
    this.ticketListInProgress = filterTicket(
      tickets,
      'status',
      TaskStatus.inProgress
    );
    this.ticketListTesting = filterTicket(
      tickets,
      'status',
      TaskStatus.testing
    );
    this.ticketListRejected = filterTicket(
      tickets,
      'status',
      TaskStatus.rejected
    );
    this.ticketListResolved = filterTicket(
      tickets,
      'status',
      TaskStatus.resolved
    );
  }

  getTicket(ticket: Ticket, index: number) {
    this.ticket = ticket;
    this.index = index;
  }

  drop(event: CdkDragDrop<any[]>, status: string) {
    if (
      (this.ticket.status != TaskStatus.rejected &&
        status === TaskStatus.rejected) ||
      (this.ticket.status != TaskStatus.canceled &&
        status === TaskStatus.canceled) ||
      (this.ticket.status != TaskStatus.inProgress &&
        status === TaskStatus.inProgress)
    ) {
      const dialogRef = this.dialog.open(ExplanationComponent, {
        width: '33%',
        data: { status, ticket: this.ticket },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          if (status === TaskStatus.canceled) {
            this.ticketListOpen.splice(this.index!, 1);
            this.ticketListCanceled.push(this.ticket);
          }
          if (status === TaskStatus.rejected) {
            this.ticketListEvaluating.splice(this.index!, 1);
            this.ticketListRejected.push(this.ticket);
          }
          if (status === TaskStatus.inProgress) {
            this.ticketListEvaluating.splice(this.index!, 1);
            this.ticketListInProgress.push(this.ticket);
          }
          this.changeStatus(this.ticket, status);
        } else {
          console.log('No explanation provided. Status change aborted.');
        }
      });
    } else {
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
  }

  changeStatus(ticket: Ticket, status: string) {
    const ticketStatus: TicketStatusDto = {
      explication: ticket?.title,
      status: status,
    };

    if (ticket?.id)
      this.ticketService.changeStatus(ticket?.id, ticketStatus).subscribe({
        next: () => {
          // toaster of changing status
          console.log('status changed');
          this.ticket;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  resolvedTicket(ticket: Ticket, isResolved: string, index: number) {
    const indexTicket = this.ticketListTesting.findIndex(
      (ticket) => ticket.id === ticket.id
    );

    this.ticketListTesting[indexTicket].isResolved = isResolved;
    if (isResolved == 'true') {
      this.ticketListResolved.push(ticket);
      this.changeStatus(ticket, 'Resolved');
    }
    if (isResolved == 'false') {
      this.changeStatus(ticket, 'In Progress');
      this.ticketListInProgress.push(ticket);
    }

    this.ticketListTesting.splice(index, 1);
  }
}
