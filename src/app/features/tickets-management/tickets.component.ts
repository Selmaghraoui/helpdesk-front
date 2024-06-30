import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  TicketService,
  TicketStatusDto,
  UserNameDto,
} from 'src/app/core/services/ticket.service';
import { filterTicket } from 'src/app/core/utils/helpers';
import { badgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';
import { ExplanationComponent } from 'src/app/shared/ui/components/explanation/explanation.component';

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
  isGetMyTickets: boolean = false;

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];

  ticketList: Ticket[] = [];
  initTicketList: Ticket[] = [];
  searchText = '';
  totalTicketListOpen: number = 0;
  totalTicketListHigh: number = 0;

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

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.ticketList = tickets;
        this.initTicketList = tickets;
        const listOpen = filterTicket(tickets, 'status', TaskStatus.open);
        this.totalTicketListOpen = listOpen.length;
        const listHigh = filterTicket(tickets, 'priority', TaskPriority.high);
        this.totalTicketListHigh = listHigh.length;
        this.isGetMyTickets = false;
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
          this.ticketList = tickets;
          this.initTicketList = tickets;
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
  }

  getMyTicketsHelpDesk() {
    this.ticketList = this.ticketList.filter(
      (ticket) => ticket?.assignedTo?.username === this.user?.username
    );
    this.isGetMyTickets = true;
  }

  toggleDisplay(string: string) {
    if (string == 'priority') {
      this.isDisplayPriority = !this.isDisplayPriority;
      this.isDisplayType = false;
      this.isDisplayStatus = false;
    } else if (string == 'type') {
      this.isDisplayType = !this.isDisplayType;
      this.isDisplayPriority = false;
      this.isDisplayStatus = false;
    } else if (string == 'status') {
      this.isDisplayStatus = !this.isDisplayStatus;
      this.isDisplayType = false;
      this.isDisplayPriority = false;
    }
  }

  // ------------------- Filter By Priority
  isDisplayPriority: boolean = false;
  priorities = ['High', 'Low', 'Medium'];
  filterByPriorityList: string[] = [];
  filterByPriority(prioritySelected: string) {
    this.toggleDisplay('priority');
    this.ticketList = this.initTicketList;
    const index = this.filterByPriorityList.indexOf(prioritySelected);
    if (index === -1) {
      this.filterByPriorityList.push(prioritySelected);
    } else {
      this.filterByPriorityList.splice(index, 1);
    }
    if (this.filterByPriorityList.length == 0) return;

    this.ticketList = this.ticketList.filter((ticket) => {
      return this.filterByPriorityList.includes(ticket?.priority);
    });
  }

  // ------------------- Filter By Type
  isDisplayType: boolean = false;
  types = [
    {
      code: 'application',
      title: 'application',
    },
    {
      code: 'purchase',
      title: 'purchase',
    },
    {
      code: 'incedent',
      title: 'incedent',
    },
  ];
  filterByTypeList: string[] = [];
  filterByType(typeSelected: { code: string; title: string }) {
    this.toggleDisplay('type');

    this.ticketList = this.initTicketList;
    const index = this.filterByTypeList.indexOf(typeSelected.code);
    if (index === -1) {
      this.filterByTypeList.push(typeSelected.code);
    } else {
      this.filterByTypeList.splice(index, 1);
    }
    if (this.filterByTypeList.length == 0) return;

    this.ticketList = this.ticketList.filter((ticket) => {
      return this.filterByTypeList.includes(ticket?.type.code);
    });
  }

  // ------------------- Filter By Status
  isDisplayStatus: boolean = false;
  Status = [
    TaskStatus.open,
    TaskStatus.canceled,
    TaskStatus.evaluating,
    TaskStatus.inProgress,
    TaskStatus.rejected,
    TaskStatus.testing,
    TaskStatus.resolved,
  ];
  filterByStatusList: string[] = [];
  filterByStatus(StatusSelected: string) {
    this.toggleDisplay('status');
    this.ticketList = this.initTicketList;
    const index = this.filterByStatusList.indexOf(StatusSelected);
    if (index === -1) {
      this.filterByStatusList.push(StatusSelected);
    } else {
      this.filterByStatusList.splice(index, 1);
    }
    if (this.filterByStatusList.length == 0) return;

    this.ticketList = this.ticketList.filter((ticket) => {
      return this.filterByStatusList.includes(ticket?.status);
    });
  }

  //
  canceledTicket(ticketSelected: Ticket) {
    const dialogRef = this.dialog.open(ExplanationComponent, {
      width: '33%',
      data: { status: TaskStatus.canceled, ticket: ticketSelected },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const ticketStatusDto: TicketStatusDto = {
          status: TaskStatus.canceled,
          explication: result.explanation,
        };
        this.ticketService
          ?.changeStatus(ticketSelected?.id, ticketStatusDto)
          .subscribe({
            next: () => {
              // toaster of changing status
              this.ticketList.forEach((ticket: Ticket) => {
                if (ticket.id === ticketSelected.id)
                  ticket.status = TaskStatus.canceled;
              });
            },
            error: (error: HttpErrorResponse) => {
              console.log(error.message);
            },
          });
      } else {
        console.log('No explanation provided. Status change aborted.');
      }
    });
  }

  //
  filterByCreatedByAffectedTo(user: badgeUser | null, isCreatedBy: boolean) {
    this.ticketList = this.initTicketList;
    if (user == null) {
      this.ticketList = this.initTicketList;
    } else {
      if (isCreatedBy)
        this.ticketList = this.ticketList.filter((ticket) => {
          return ticket.owner?.username == user?.username;
        });
      if (!isCreatedBy)
        this.ticketList = this.ticketList.filter((ticket) => {
          return ticket.assignedTo?.username == user?.username;
        });
    }
  }
}
