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

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  url = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(this.url + '/tickets');
  }

  // getTickestForUser(userNameDto: UserNameDto): Observable<any> {
  //   const options = {
  //     body: userNameDto,
  //   };

  //   // return this.http.get<any>(this.url + '/user-tickets/', options);
  //   return this.http.request<any>('GET', `${this.url}/user-tickets/`, options);
  // }
  getTickestForUser(userNameDto: UserNameDto): Observable<any> {
    return this.http.request<any>('GET', `${this.url}/user-tickets/`, {
      body: userNameDto,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'json' as const,
    });
  }

  getTicketById(idTicket: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + '/tickets/' + idTicket);
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
}
