import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import {
  DocumentService,
  IDocument,
} from 'src/app/core/services/document.service';
import {
  IsFavoriteDto,
  TicketService,
  TicketStatusDto,
  UpdateSharedWithDto,
  UserNameDto,
} from 'src/app/core/services/ticket.service';
import { UpdateAssignedToDto } from 'src/app/shared/ui/components/affected-shared/affected-shared.component';
import { badgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';

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

  docs: IDocument[] = [];

  TaskPriority = TaskPriority;
  TaskStatus = TaskStatus;
  Role = Role;
  roles: string[] = [];
  user?: IUser;

  ticket?: Ticket;
  isFavoriteTicket: boolean = false;
  favoriteTicketList: Ticket[] = [];

  constructor(
    private ticketService: TicketService,
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.idTicket = this.activatedRoute.snapshot.params['id'];
    this.isNewTicket = this.idTicket === undefined;
  }

  ngOnInit() {
    this.getUser();
    this.getRoles();

    if (this.roles.includes(Role.helpDesk) || this.roles.includes(Role.admin))
      this.getTicket();
    else if (
      this.roles.includes(Role.user) &&
      !this.roles.includes(Role.helpDesk) &&
      !this.roles.includes(Role.admin)
    ) {
      this.getTicketForUser();
    }
    // this.getTicket();
    this.initFormGroup();
    if (this.isNewTicket) this.setType();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
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
          this.getDoc();
          this.initBreadcrumb();
          this.getFavoriteTicket();
        },
        error: (error: HttpErrorResponse) => {
          error.message;
        },
      });
    }
    if (this.isNewTicket) this.initBreadcrumb();
  }

  getTicketForUser() {
    if (!this.isNewTicket && this.idTicket && this.user?.username) {
      this.ticketService
        .getTicketByIdForUser(this.user?.username, this.idTicket)
        .subscribe({
          next: (value: Ticket) => {
            this.ticket = value;
            this.getDoc();

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
    if (this.router.url.includes('purchase')) {
      this.ticketFormGroup?.get('type')?.patchValue({
        code: 'purchase',
        title: 'Purchase',
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
    this.ticketService.createTicket(ticketFormGroup.getRawValue()).subscribe({
      next: (ticket: Ticket) => {
        if (this.docs.length > 0) {
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

  sharedTicketUsername(updateSharedWith: badgeUser[]) {
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

  // favorite
  getFavoriteTicket() {
    const FavoriteTicketsData = localStorage.getItem('FavoriteTickets');
    this.favoriteTicketList = FavoriteTicketsData
      ? JSON.parse(FavoriteTicketsData)
      : null;

    this.favoriteTicketList.forEach((ticket: Ticket) => {
      if (ticket.id == this.ticket?.id) this.isFavoriteTicket = true;
    });
  }
  toggleFavorits(isFavorite?: boolean) {
    if (this.ticket?.id != undefined && isFavorite != undefined) {
      const isFavoriteDto: IsFavoriteDto = {
        isFavorite: !isFavorite!,
      };
      this.ticketService
        ?.toggleFavoriteTicket(this.ticket?.id, isFavoriteDto)
        .subscribe({
          next: () => {
            const index = this.favoriteTicketList.indexOf(this.ticket!);
            if (index === -1) {
              this.favoriteTicketList.push(this.ticket!);
            } else {
              this.favoriteTicketList.splice(index, 1);
            }

            this.saveFavoriteTickets(this.favoriteTicketList);
            this.isFavoriteTicket = !this.isFavoriteTicket;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
        });
    }
  }
  saveFavoriteTickets(tickets: Ticket[]): void {
    localStorage.setItem('FavoriteTickets', JSON.stringify(tickets));
  }

  // Upload image
  files: File[] = [];
  uploadFile(idTicket: number) {
    this.documentService.uploadDocForTicket(this.files, idTicket).subscribe({
      next: () => {
        this.router.navigateByUrl('tickets');
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  onSelectFile(fileEvent: any) {
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(fileEvent.target.files[0]);
      reader.onload = (event) => {
        let file: IDocument = {
          documentName: fileEvent.target.files[0].name,
          size: fileEvent.target.files[0].size,
          contentType: fileEvent.target.files[0].type,
          data: event?.target?.result,
        };
        // if()
        this.docs.push(file);
        this.files.push(fileEvent.target.files[0]);
      };
    }
  }

  openFileInput() {
    document?.getElementById('fileInput')?.click();
  }

  onDeleteFile(index: number) {
    this.docs.splice(index, 1);
  }

  convertBase64ToDataURL(
    contentType: string,
    base64: string | undefined
  ): string {
    return `data:${contentType};base64,${base64}`;
  }

  getDoc() {
    this.ticket?.documentIds?.forEach((docId: number) => {
      this.documentService
        .downloadProfilPhoto(docId)
        .subscribe((response: IDocument) => {
          this.docs.push(response);
        });
    });
  }

  // download
  onDowloadFile(docId?: number): void {
    if (docId != null)
      this.documentService
        .downloadProfilPhoto(docId)
        .subscribe((response: IDocument) => {
          const { documentName, contentType, data } = response;
          this.saveFile(String(data), documentName!, contentType!);
        });
  }

  private saveFile(
    base64Data: string,
    fileName: string,
    fileType: string
  ): void {
    const binaryData = this.base64ToBlob(base64Data, fileType);
    const url = window.URL.createObjectURL(binaryData);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  private base64ToBlob(base64Data: string, contentType: string): Blob {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }
}
