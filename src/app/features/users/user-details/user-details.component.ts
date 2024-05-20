import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Department } from '../../profil/profil.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  TaskStatus = TaskStatus;

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: true,
      lien: '/users',
    },
    {
      title: 'Details',
      isLien: false,
    },
  ];
  departments: Department[] = [
    {
      id: 1,
      label: 'Developpment',
    },
    {
      id: 2,
      label: 'RH',
    },
    {
      id: 3,
      label: 'Help Desk',
    },
  ];
  user: IUser = {
    id: 1,
    referenceUser: 'SE-123456',
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    firstName: 'Soufiane',
    lastName: 'El Maghraoui',
    email: 'soufiane.elmaghraoui@gmail.com',
    status: false,
    post: 'Front End Developer',
    department: 'Developpment',
    phoneNumber: '0635383046',
    isActivate: true,
  };
  tickets = [
    {
      id: 1,
      title: 'Ticket 1 test testtes ',
      type: {
        id: 1,
        label: 'Application',
        lien: '',
        description: '',
      },
      priority: 'Hight',
      status: TaskStatus.open,
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
      },
      createdTime: '11-05-2024',
      affectedTo: [
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Ismail',
          lastName: 'Meggouri',
          email: 'ismail.meggouri@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Mohamed',
          lastName: 'El Maghraoui',
          email: 'mohamed.elmaghraoui@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [
        {
          id: 1,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Soufiane',
          lastName: 'El Maghraoui',
          email: 'soufiane.elmaghraoui@gmail.com',
          status: false,
          post: 'Front End Developer',
          department: '',
          phoneNumber: '',
        },
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Ismail',
          lastName: 'Meggouri',
          email: 'ismail.meggouri@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
    },
    {
      id: 2,
      // todo : add ... 3point apres un nombre de lettres
      title: 'Ticket 2 Ticket 2 Ticket 2 Ticket 2 Ticket 2 ',
      type: {
        id: 1,
        label: 'Achat',
        lien: '',
        description: '',
      },
      priority: 'Meduim',
      status: TaskStatus.inProgress,
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
      },
      createdTime: '11-05-2024',
      affectedTo: [
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Ismail',
          lastName: 'Meggouri',
          email: 'ismail.meggouri@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [
        {
          id: 1,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Soufiane',
          lastName: 'El Maghraoui',
          email: 'soufiane.elmaghraoui@gmail.com',
          status: false,
          post: 'Front End Developer',
          department: '',
          phoneNumber: '',
        },
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Ismail',
          lastName: 'Meggouri',
          email: 'ismail.meggouri@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
    },
    {
      id: 3,
      title: 'Ticket 3',
      type: {
        id: 1,
        label: 'Incedent',
        lien: '',
        description: '',
      },
      priority: 'Low',
      status: TaskStatus.canceled,
      createdBy: {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
        email: 'ismail.meggouri@gmail.com',
        status: true,
        post: 'Back End Developer',
        department: '',
        phoneNumber: '',
      },
      createdTime: '11-05-2024',
      affectedTo: [
        {
          id: 1,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Soufiane',
          lastName: 'El Maghraoui',
          email: 'soufiane.elmaghraoui@gmail.com',
          status: false,
          post: 'Front End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [
        {
          id: 1,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Soufiane',
          lastName: 'El Maghraoui',
          email: 'soufiane.elmaghraoui@gmail.com',
          status: false,
          post: 'Front End Developer',
          department: '',
          phoneNumber: '',
        },
        {
          id: 2,
          image:
            'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          firstName: 'Ismail',
          lastName: 'Meggouri',
          email: 'ismail.meggouri@gmail.com',
          status: true,
          post: 'Back End Developer',
          department: '',
          phoneNumber: '',
        },
      ],
    },
  ];

  userFormGroup!: FormGroup;
  constructor() {
    this.userFormGroup = new FormGroup({
      referenceUser: new FormControl(this.user.referenceUser),
      email: new FormControl(this.user.email),
      userName: new FormControl(this.user.userName),
      phoneNumber: new FormControl(this.user.phoneNumber),
      department: new FormControl(this.user.department),
      post: new FormControl(this.user.post),
    });
    this.userFormGroup.controls['referenceUser'].disable();
    this.userFormGroup.controls['email'].disable();
    this.userFormGroup.controls['userName'].disable();
  }

  ngOnInit() {}
}
