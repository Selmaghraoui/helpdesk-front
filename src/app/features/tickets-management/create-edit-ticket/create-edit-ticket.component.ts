import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  TicketService,
  UpdateSharedWithDto,
  UserNameDto,
} from 'src/app/core/services/ticket.service';
import { UsersService } from 'src/app/core/services/users.service';
import { UpdateAssignedToDto } from 'src/app/shared/ui/components/affected-shared/affected-shared.component';

export interface IComment {
  id: number;
  user: {
    image: string;
    firstName: string;
    lastName: string;
  };
  comment: {
    text: string;
    images: { imageAlt: string }[];
  };
}

@Component({
  selector: 'app-create-edit-ticket',
  templateUrl: './create-edit-ticket.component.html',
  styleUrls: ['./create-edit-ticket.component.scss'],
})
export class CreateEditTicketComponent implements OnInit {
  isNewTicket: boolean = true;
  idTicket?: number;
  ticketFormGroup!: FormGroup;
  breadCrumb: IBreadcrumb[] = [];

  selectedFiles: FileList | null = null;
  previewImages: string[] = [];

  TaskPriority = TaskPriority;
  Role = Role;
  roles: string[] = [];

  ticket?: Ticket;

  constructor(
    private ticketService: TicketService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.idTicket = this.activatedRoute.snapshot.params['id'];

    this.isNewTicket = this.idTicket === undefined;
  }

  ngOnInit() {
    this.roles = this.usersService.getRoles();

    this.getTicket();
    this.setType();
    this.initFormGroup();
  }

  getTicket() {
    if (!this.isNewTicket && this.idTicket) {
      this.ticketService.getTicketById(this.idTicket).subscribe({
        next: (value: Ticket) => {
          this.ticket = value;
          this.initBreadcrumb();
        },
        error: (error: HttpErrorResponse) => {
          error.message;
        },
      });
    }
    if (this.isNewTicket) this.initBreadcrumb();
  }

  setType() {
    if (this.router.url.includes('application'))
      this.ticketFormGroup?.get('type')?.setValue('application');
    if (this.router.url.includes('incedent'))
      this.ticketFormGroup?.get('type')?.setValue('incedent');
    if (this.router.url.includes('achat'))
      this.ticketFormGroup?.get('type')?.setValue('achat');
  }

  initFormGroup() {
    this.ticketFormGroup = new FormGroup({
      title: new FormControl(null, Validators.required),
      priority: new FormControl(TaskPriority.low, Validators.required),
      type: new FormGroup({
        code: new FormControl('achat', Validators.required),
        title: new FormControl('Achat', Validators.required),
      }),
      description: new FormControl(null, Validators.required),
      // file: new FormControl(null, Validators.required),
      // status: new FormControl(null, Validators.required),

      // sharedWith: new FormArray([], Validators.required),
      sharedWith: new FormControl([], Validators.required),
    });
    console.log('this.ticketFormGroup :: ', this.ticketFormGroup);
  }

  initBreadcrumb() {
    this.breadCrumb = [
      {
        title: 'Tickets',
        isLien: true,
        lien: '/tickets',
      },
      {
        title: this.isNewTicket ? 'New ticket' : this.ticket?.reference ?? '',
        isLien: false,
      },
    ];
  }

  createEditTicket(ticketFormGroup: FormGroup) {
    console.log('this.ticketFormGroup', this.ticketFormGroup);

    this.ticketService.createTicket(ticketFormGroup.getRawValue()).subscribe({
      next: (value: any) => {},
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }

  sharedTicketUsername(updateSharedWith: IUser[]) {
    console.log('sharedTicketUsername');

    let userNameList: UserNameDto[] = [];
    updateSharedWith.forEach((user) => {
      const userNameDto: UserNameDto = {
        username: user.username,
      };
      userNameList.push(userNameDto);
    });
    // console.log('userNameList', userNameList);

    this.ticketFormGroup.controls['sharedWith'].setValue(userNameList);
    console.log('this.ticketFormGroup', this.ticketFormGroup);
  }

  sharedTicket(updateSharedWith: UpdateSharedWithDto) {
    if (this.ticket?.id) {
      this.ticketService
        .sharedTicket(this.ticket?.id, updateSharedWith)
        .subscribe({
          next: (value: Ticket) => {},
          error: (error: HttpErrorResponse) => {
            error.message;
          },
        });
    }
  }

  affecedTicket(updateAssignedTo: UpdateAssignedToDto) {
    if (this.ticket?.id) {
      this.ticketService
        .affectedTicket(this.ticket?.id, updateAssignedTo)
        .subscribe({
          next: (value: Ticket) => {},
          error: (error: HttpErrorResponse) => {
            error.message;
          },
        });
    }
  }

  toggleFavorits() {
    if (this.ticket?.favorite) this.ticket.favorite = !this.ticket?.favorite;
  }
}
