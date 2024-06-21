import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../modeles/IUser';
import { Ticket } from '../modeles/Ticket';
import { UserNameDto } from './ticket.service';

export interface UserResCommentDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  docId: number;
}

export interface CommentResDto {
  id: number;
  author: UserResCommentDto;
  time: Date;
  typeActivity: string;
  comment?: string;
  status?: string;
  assignedTo?: UserResCommentDto;
  shared_with?: Array<UserResCommentDto>;
}

export interface IComment {
  id: number;
  ticket: Ticket;
  author: IUser;
  time: Date;
  typeActivity: string;
  comment?: string;
  status?: string;
  assignedTo?: IUser;
  shared_with?: Array<IUser>;
}

export interface CommentDto {
  comment: string;
  author: UserNameDto;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = 'http://localhost:8082/api/comments';

  constructor(private http: HttpClient) {}

  /*
   * Get Comments For User
   */
  getCommentsForTicket(idTicket: number): Observable<Array<CommentResDto>> {
    return this.http.get<Array<CommentResDto>>(this.url + '/' + idTicket);
  }

  /*
   * Get Comments For User
   */
  getCommentsForUser(username: string): Observable<Array<CommentResDto>> {
    return this.http.get<Array<CommentResDto>>(this.url + '/user/' + username);
  }

  /*
   * Add Comments
   */
  addComments(idTicket: number, comment: CommentDto): Observable<any> {
    return this.http.post<any>(this.url + '/' + idTicket + '/new', comment);
  }
}
