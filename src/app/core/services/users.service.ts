import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../modeles/Ticket';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:8082/';

  constructor(private http: HttpClient) {}

  getMe(username: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + 'users/me/' + username);
  }

  // getTicketById(idTicket: number): Observable<Ticket> {
  //   return this.http.get<Ticket>(this.url + '/' + idTicket);
  // }

  // createTicket(ticket: any) {
  //   return this.http.post<any>(this.url + '/tickets/new', ticket);
  // }
}
