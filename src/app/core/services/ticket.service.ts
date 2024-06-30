import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../modeles/Ticket';
import { UpdateAssignedToDto } from 'src/app/shared/ui/components/affected-shared/affected-shared.component';

export interface UpdateSharedWithDto {
  sharedWithUserIds: number[];
}

export interface CreateTicket {
  title: string;
  priority: string;
  type: TicketTypeDto;
  description: string;
  impact: string;
  sharedWith: Array<UserNameDto>;
}

export interface UserNameDto {
  username: string;
}

export interface TicketTypeDto {
  code: string;
  title: string;
}

export interface TicketStatusDto {
  explication: string;
  status: string;
}

export interface IsFavoriteDto {
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  url = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  getFavoriteTickets(idUser: number): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(
      this.url + '/favorite-tickets/' + idUser
    );
  }

  getAllTickets(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(this.url + '/tickets');
  }

  getTickestForUser(username: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(
      this.url + '/user-tickets/' + username + '/'
    );
  }

  getTicketById(idTicket: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + '/tickets/' + idTicket);
  }

  getTicketByIdForUser(username: string, idTicket: number): Observable<Ticket> {
    return this.http.get<Ticket>(
      this.url + '/user-ticket/' + username + '/' + idTicket
    );
  }

  createTicket(ticket: CreateTicket): Observable<Ticket> {
    return this.http.post<Ticket>(this.url + '/tickets/new', ticket);
  }

  sharedTicket(idTicket: number, updateSharedWith: UpdateSharedWithDto) {
    return this.http.put<any>(
      this.url + '/tickets/sharedWith/' + idTicket,
      updateSharedWith
    );
  }

  affectedTicket(idTicket: number, updateSharedWith: UpdateAssignedToDto) {
    return this.http.put<any>(
      this.url + '/tickets/assignedTo/' + idTicket,
      updateSharedWith
    );
  }

  changeStatus(ticketId: number, ticketStatus: TicketStatusDto) {
    return this.http.put<any>(
      this.url + '/tickets/status/' + ticketId,
      ticketStatus
    );
  }

  toggleFavoriteTicket(
    ticketId: number,
    isFavoriteDto: IsFavoriteDto
  ): Observable<Ticket> {
    return this.http.put<Ticket>(
      this.url + '/tickets/isFavorite/' + ticketId,
      isFavoriteDto
    );
  }
}
