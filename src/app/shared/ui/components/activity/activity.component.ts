import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/modeles/IUser';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { WebSocketService } from 'src/app/core/services/web-socket.service';
import {
  CommentDto,
  CommentResDto,
  CommentService,
  IComment,
} from 'src/app/core/services/comment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/core/modeles/Role';
import { badgeUser } from '../badge-user/badge-user.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() ticket?: Ticket;

  TaskStatus = TaskStatus;

  commentFormGroup!: FormGroup;
  previewImages: string[] = [];
  helpDeskList: IUser[] = [];
  helpDesk?: IUser;

  listComments: CommentResDto[] = [];
  user?: IUser;
  comments: any[] = [];
  idTicket?: number;
  Role = Role;
  roles: string[] = [];

  isSharedWithMe: boolean = false;

  constructor(
    private webSocketService: WebSocketService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.idTicket = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUser();
    this.getRoles();

    this.commentFormGroup = new FormGroup({
      text: new FormControl('', Validators.required),
      images: new FormArray([]),
    });

    this.getComments();
    this.checkIfTicketSharedWithMe();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getComments() {
    if (this.idTicket != undefined) {
      this.commentService.getCommentsForTicket(this.idTicket).subscribe({
        next: (comments: CommentResDto[]) => {
          this.listComments = comments;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  addComment(commentFormGroup: FormGroup) {
    const comment: CommentDto = {
      comment: commentFormGroup.get('text')?.value,
      author: {
        username: this.user?.username ?? '',
      },
    };

    if (this.ticket?.id != null) {
      let now: Date = new Date();
      this.commentService.addComments(this.ticket?.id, comment).subscribe({
        next: () => {
          const comment: CommentResDto = {
            id: this.listComments?.length,
            author: this.user!,
            time: now,
            typeActivity: 'COMMENT',
            comment: commentFormGroup.getRawValue().text,
            status: undefined,
            assignedTo: undefined,
            shared_with: [],
            ticket: {},
          };

          this.commentFormGroup.get('text')?.setValue('');
          this.listComments.push(comment);
          // toaster
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  uploadFile() {}

  openFileInput() {
    document?.getElementById('imageInput')?.click();
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;

      // Validate for image types (optional)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!this.validateFileType(file)) {
          alert('Invalid file type. Please select images only.');
          continue;
        }
      }

      // Read and preview images
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImages.push(e.target.result);
          console.log('this.previewImages', this.previewImages);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  onDeleteImage(index: number) {
    this.previewImages.splice(index, 1);
  }

  validateFileType(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedTypes.includes(file.type);
  }

  checkIfTicketSharedWithMe() {
    this.ticket?.sharedWith?.forEach((user: badgeUser) => {
      if (user?.username == this.user?.username) this.isSharedWithMe = true;
    });
  }
}
