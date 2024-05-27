import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';
import { IBadgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';

export interface Icomment {
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
  ticketFormGroup!: FormGroup;
  commentFormGroup!: FormGroup;
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: true,
      lien: '/tickets',
    },
    {
      title: this.isNewTicket
        ? 'Create ticket'
        : this.ticketFormGroup?.getRawValue().title,
      isLien: this.isNewTicket ? true : false,
      lien: '/tickets/create-ticket',
    },
    {
      title: this.isNewTicket ? '' : '',
      isLien: false,
    },
  ];
  selectedFiles: FileList | null = null;
  previewImages: string[] = [];
  listComments: Icomment[] = [
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          // {
          //   imageAlt:
          //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          // },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          // {
          //   imageAlt:
          //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          // },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
    {
      id: 1,
      user: {
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
      },
      comment: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
        images: [
          {
            imageAlt:
              'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          },
        ],
      },
    },
  ];
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;
  Role = Role;
  // roleUser = 'helpDesk';
  // roleUser = 'user';
  roleUser = 'admin';
  ticket?: Ticket = {
    id: 1,
    title: 'Ticket 1 ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    type: {
      id: 1,
      label: 'Application',
      lien: '',
      description: '',
    },
    priority: 'Hight',
    status: TaskStatus.rejected,
    createdBy: {
      id: 1,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Soufiane',
      lastName: 'El Maghraoui',
      email: 'soufiane.elmaghraoui@gmail.com',
      status: false,
      post: 'Front End Developer',
      department: '',
      phoneNumber: '',
      isActivate: true,
    },
    createdTime: '11-05-2024',
    affectedTo: {
      id: 2,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ismail',
      lastName: 'Meggouri',
      email: 'ismail.meggouri@gmail.com',
      status: true,
      post: 'Back End Developer',
      department: '',
      phoneNumber: '',
      isActivate: true,
    },

    reference: '',
    sharedWith: [
      {
        id: 1,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
        email: 'soufiane.elmaghraoui@gmail.com',
        status: false,
        post: 'Front End Developer',
        department: '',
        phoneNumber: '',
        isActivate: true,
      },
      {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
        email: 'ismail.meggouri@gmail.com',
        status: true,
        post: 'Back End Developer',
        department: '',
        phoneNumber: '',
        isActivate: true,
      },
    ],
  };
  helpDesk: IBadgeUser = {
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    firstName: 'Mohamed',
    lastName: 'El Maghraoui',
  };

  helpDeskList: IBadgeUser[] = [
    {
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Mohamed',
      lastName: 'El Maghraoui',
    },
    {
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Brahim',
      lastName: 'El Maghraoui',
    },
    {
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ahmed',
      lastName: 'El Maghraoui',
    },
    {
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ismail',
      lastName: 'Meggouri',
    },
    {
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Mohamed',
      lastName: 'Youssfi',
    },
  ];

  constructor(
    private TicketService: TicketService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params['id'];

    this.isNewTicket = id === undefined;
    this.ticketFormGroup = new FormGroup({
      title: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
      // status: new FormControl(null, Validators.required),
    });

    this.commentFormGroup = new FormGroup({
      text: new FormControl('', Validators.required),
      images: new FormArray([]),
    });
  }

  ngOnInit() {
    this.TicketService.getTicketById(1).subscribe({
      next: (value) => {
        this.ticket = value;
        console.log('this.ticket ', this.ticket);

        // this.ticketFormGroup;
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }

  createEditTicket(ticketFormGroup: FormGroup) {
    console.log('ticketFormGroup :: ', ticketFormGroup);
    console.log(
      'this.ticketFormGroup?.getRawValue().title: ',
      this.ticketFormGroup?.getRawValue().title
    );
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

  addComment(commentFormGroup: FormGroup) {
    console.log('commentFormGroup : ', commentFormGroup);
  }
}
