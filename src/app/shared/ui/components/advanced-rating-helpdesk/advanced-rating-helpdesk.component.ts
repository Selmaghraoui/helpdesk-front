import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { TicketService } from 'src/app/core/services/ticket.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-advanced-rating-helpdesk',
  templateUrl: './advanced-rating-helpdesk.component.html',
  styleUrls: ['./advanced-rating-helpdesk.component.scss'],
})
export class AdvancedRatingHelpdeskComponent implements OnInit {
  user?: IUser;
  tickets: Ticket[] = [];

  constructor(
    private feedbackService: FeedbackService,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.getUser();
    this.getTicketAffectedToHelpdesk();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getTicketAffectedToHelpdesk() {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.tickets = tickets.filter((ticket: Ticket) => {
          return ticket?.assignedTo?.username == this.user?.username;
        });
        console.log('this.tickets', this.tickets);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getFeedback() {
    this.feedbackService?.getFeedbackTicketById;
  }
}
