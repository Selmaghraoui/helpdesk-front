import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FeedBack } from 'src/app/core/modeles/FeedBack';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-review',
  templateUrl: './Review.component.html',
  styleUrls: ['./Review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() ticket?: Ticket;
  reviewFormGroup!: FormGroup;
  rating: number = 0;
  starCount: number = 5;
  color: string = 'gold';

  stars: number[] = [];
  currentRating = 0;

  Role = Role;
  roles: string[] = [];
  user?: IUser;

  feedBackTicket?: FeedBack;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
    this.initFormGroup();
    this.getFeedbackTicketById();

    this.stars = Array(this.starCount)
      .fill(0)
      .map((x, i) => i + 1);
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  initFormGroup() {
    this.reviewFormGroup = new FormGroup({
      rating: new FormControl(0, Validators.required),
      feedback: new FormControl('', Validators.required),
    });
  }

  onStarClick(star: number): void {
    this.rating = star;
    this.reviewFormGroup?.get('rating')?.setValue(this.rating);
  }

  saveReview() {
    if (this.ticket?.id != undefined)
      this.feedbackService
        .addFeedback(this.ticket?.id, this.reviewFormGroup?.value)
        .subscribe({
          next: (feedBack: FeedBack) => {
            this.feedBackTicket = feedBack;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
        });
  }

  getFeedbackTicketById() {
    if (this.ticket?.id != undefined)
      this.feedbackService.getFeedbackTicketById(this.ticket?.id).subscribe({
        next: (feedBack: FeedBack) => {
          this.feedBackTicket = feedBack;

          this.rating = feedBack?.rating;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }
}
