import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack } from '../modeles/FeedBack';

export interface FeedBackReq {
  feedback: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  url = 'http://localhost:8082/api/feedback';

  constructor(private http: HttpClient) {}

  getFeedbackTicketById(idTicket: number): Observable<FeedBack> {
    return this.http.get<FeedBack>(this.url + '/' + idTicket);
  }

  addFeedback(idTicket: number, feedBackReq: FeedBackReq) {
    return this.http.post<any>(this.url + '/' + idTicket + '/new', feedBackReq);
  }
}
