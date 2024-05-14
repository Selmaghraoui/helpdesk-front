import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../modeles/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  url = '';
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(this.url);
  }

  getTicketById(idTicket: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + '/' + idTicket);
  }
}
