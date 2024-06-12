import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../modeles/Ticket';
import { UpdateAssignedToDto } from 'src/app/shared/ui/components/affected-shared/affected-shared.component';

export interface UpdateSharedWithDto {
  sharedWithUserIds: number[];
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  url = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '/tickets');
  }

  getTicketForUser(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(this.url + '/tickets');
  }

  getTicketById(idTicket: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + '/tickets/' + idTicket);
  }

  createTicket(ticket: any) {
    return this.http.post<any>(this.url + '/tickets/new', ticket);
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
}
