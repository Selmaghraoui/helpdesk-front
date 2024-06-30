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
  selector: 'app-favorite-tickets',
  templateUrl: './favorite-tickets.component.html',
  styleUrls: ['./favorite-tickets.component.scss'],
})
export class FavoriteTicketsComponent implements OnInit {
  Role = Role;
  roles: string[] = [];
  user?: IUser;
  TaskStatus = TaskStatus;

  favoriteTicketList: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getUser();
    this.getRoles();

    this.getFavoriteTickets();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getFavoriteTickets() {
    const FavoriteTicketsData = localStorage.getItem('FavoriteTickets');
    this.favoriteTicketList = FavoriteTicketsData
      ? JSON.parse(FavoriteTicketsData)
      : null;
    this.favoriteTicketList.forEach((ticket: Ticket) => {
      ticket.favorite = true;
    });
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
            const index = this.favoriteTicketList.indexOf(ticketSelected);
            if (index === -1) {
              this.favoriteTicketList.push(ticketSelected);
            } else {
              this.favoriteTicketList.splice(index, 1);
            }

            this.saveFavoriteTickets(this.favoriteTicketList);
            this.favoriteTicketList.forEach((ticket: Ticket) => {
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
