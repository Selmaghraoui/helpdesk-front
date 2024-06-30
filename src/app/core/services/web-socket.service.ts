import { Injectable } from '@angular/core';
// import * as SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';
import { Subject } from 'rxjs';

declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient: any;
  private commentUpdates = new Subject<any>();

  constructor() {
    // this.connect();
  }

  // connect() {
  //   const socket = new SockJS('http://localhost:8080/ws');
  //   this.stompClient = Stomp.over(socket);

  //   this.stompClient.connect({}, (frame: any) => {
  //     this.stompClient.subscribe('/topic/comments', (message: any) => {
  //       this.commentUpdates.next(JSON.parse(message.body));
  //     });
  //   });
  // }

  // getCommentUpdates() {
  //   return this.commentUpdates.asObservable();
  // }
}
