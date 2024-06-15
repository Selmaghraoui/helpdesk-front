import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { DocumentService } from 'src/app/core/services/document.service';
import {
  TicketService,
  TicketStatusDto,
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
  imageUrl: SafeUrl | string | ArrayBuffer | null | undefined;
  docs: Doc[] = [];

  TaskPriority = TaskPriority;
  TaskStatus = TaskStatus;
  Role = Role;
  roles: string[] = [];

  ticket?: Ticket;

  constructor(
    private ticketService: TicketService,
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.idTicket = this.activatedRoute.snapshot.params['id'];
    this.isNewTicket = this.idTicket === undefined;
  }

  ngOnInit() {
    this.getRoles();

    this.getTicket();
    this.initFormGroup();
    if (this.isNewTicket) this.setType();
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
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
    if (this.router.url.includes('application')) {
      this.ticketFormGroup?.get('type')?.patchValue({
        code: 'application',
        title: 'Application',
      });
    }
    if (this.router.url.includes('incedent')) {
      this.ticketFormGroup?.get('type')?.patchValue({
        code: 'incedent',
        title: 'Incedent',
      });
    }
    if (this.router.url.includes('achat')) {
      this.ticketFormGroup?.get('type')?.patchValue({
        code: 'achat',
        title: 'Achat',
      });
    }
  }

  initFormGroup() {
    this.ticketFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      priority: new FormControl(TaskPriority.low, Validators.required),
      type: new FormGroup({
        code: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
      }),
      description: new FormControl('', Validators.required),

      sharedWith: new FormControl([]),
    });
  }

  initBreadcrumb() {
    this.breadCrumb = this.isNewTicket
      ? [
          {
            title: 'Tickets',
            isLien: true,
            lien: '/tickets',
          },
          {
            title: 'Type ticket',
            isLien: true,
            lien: '/tickets/create-ticket',
          },
          {
            title: 'New ticket',
            isLien: false,
          },
        ]
      : [
          {
            title: 'Tickets',
            isLien: true,
            lien: '/tickets',
          },
          {
            title: this.ticket?.reference ?? '',
            isLien: false,
          },
        ];
  }

  createTicket(ticketFormGroup: FormGroup) {
    console.log('0 - ticketFormGroup , ', ticketFormGroup);
    this.ticketService.createTicket(ticketFormGroup.getRawValue()).subscribe({
      next: (ticket: Ticket) => {
        console.log('1 - this.docs.length , ', this.docs.length);

        if (this.docs.length > 0) {
          console.log('2 - 3ayat l upload');
          this.uploadFile(ticket.id);
        } else {
          this.router.navigateByUrl('tickets');
        }
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }

  sharedTicketUsername(updateSharedWith: IUser[]) {
    let userNameList: UserNameDto[] = [];
    updateSharedWith.forEach((user) => {
      const userNameDto: UserNameDto = {
        username: user.username,
      };
      userNameList.push(userNameDto);
    });
    this.ticketFormGroup.controls['sharedWith'].setValue(userNameList);
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
          next: (value: Ticket) => {
            const ticketStatusDto: TicketStatusDto = {
              status: 'In Progress',
              explication: '',
            };
            if (this.ticket?.id)
              this.ticketService
                .changeStatus(this.ticket?.id, ticketStatusDto)
                .subscribe({
                  next: () => {
                    if (this.ticket?.status)
                      this.ticket.status = TaskStatus.inProgress;
                  },
                  error: (error: HttpErrorResponse) => {
                    error.message;
                  },
                });
          },
          error: (error: HttpErrorResponse) => {
            error.message;
          },
        });
    }
  }

  toggleFavorits() {
    if (this.ticket?.favorite) this.ticket.favorite = !this.ticket?.favorite;
  }

  // Upload image
  uploadFile(idTicket: number) {
    console.log('1 - idTicket , ', idTicket);
    let files: File[] = [];
    this.docs.forEach((doc) => {
      files.push(doc.file);
    });

    this.documentService.uploadDocForTicket(files, idTicket).subscribe({
      next: () => {
        this.router.navigateByUrl('tickets');
        console.log('file uploaded .. ');
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  onSelectFile(fileEvent: any) {
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      var reader = new FileReader();
      let file: Doc;
      reader.readAsDataURL(fileEvent.target.files[0]);
      reader.onload = (event) => {
        this.imageUrl = event?.target?.result;
        file = {
          file: fileEvent.target?.files[0],
          imageUrl: event?.target?.result,
        };

        this.docs.push(file);
      };
    }
  }

  openFileInput() {
    document?.getElementById('fileInput')?.click();
  }

  previewFiles: string[] = [];
  onDeleteFile(index: number) {
    this.docs.splice(index, 1);
  }
}

export interface Doc {
  file: File;
  imageUrl: string | ArrayBuffer | null | undefined;
}
