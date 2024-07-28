import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  IsFavoriteDto,
  TicketService,
} from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-shared-tickets',
  templateUrl: './sharedTickets.component.html',
  styleUrls: ['./sharedTickets.component.scss'],
})
export class SharedTicketsComponent implements OnInit {
  Role = Role;
  roles: string[] = [];
  user?: IUser;
  sharedTicketList: Ticket[] = [];
  TaskStatus = TaskStatus;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getUser();
    this.getRoles();

    this.getTicketsSharedWithForUser();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getTicketsSharedWithForUser() {
    if (this.user?.username) {
      this.ticketService.getAllTicketsSharedWith(this.user.username).subscribe({
        next: (tickets: Ticket[]) => {
          console.log('tickets', tickets);

          this.sharedTicketList = tickets;
          console.log('this.sharedTicketList .. ', this.sharedTicketList);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  toggleFavorits(ticketSelected?: Ticket) {
    if (
      ticketSelected?.id != undefined &&
      ticketSelected?.favorite != undefined
    ) {
      const isFavoriteDto: IsFavoriteDto = {
        isFavorite: !ticketSelected?.favorite!,
      };
      this.ticketService
        ?.toggleFavoriteTicket(ticketSelected?.id, isFavoriteDto)
        .subscribe({
          next: () => {
            const index = this.sharedTicketList.indexOf(ticketSelected);
            if (index === -1) {
              this.sharedTicketList.push(ticketSelected);
            } else {
              this.sharedTicketList.splice(index, 1);
            }

            this.saveFavoriteTickets(this.sharedTicketList);
            this.sharedTicketList.forEach((ticket: Ticket) => {
              if (ticket.id === ticketSelected?.id)
                ticket.favorite = !ticket.favorite;
            });
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
        });
    }
  }

  saveFavoriteTickets(tickets: Ticket[]): void {
    localStorage.setItem('FavoriteTickets', JSON.stringify(tickets));
  }
}
