import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { IBadgeUser } from 'src/app/shared/ui/components/badge-user/badge-user.component';
import { Department } from '../profil/profil.component';

export interface RecentActivity {
  id: number;
  ativity: Activity;
  idTicket: number;
  referenceTicket: string;
  time: string;
  author?: IUser;
}

export enum Activity {
  createdTicket = 'Created ticket',
  changedStatus = 'Changed status',
  affectedTicket = 'Affected ticket',
  sharedTicket = 'Shared ticket',
  addComment = 'Add comment',
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ticketList: Ticket[] = [
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Mohamed',
        lastName: 'El Maghraoui',
        email: 'mohamed.elmaghraoui@gmail.com',
        status: true,
        post: 'Back End Developer',
        department: '',
        phoneNumber: '',
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
        isActivate: true,
        userName: 's.elmaghraoui',
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
      status: TaskStatus.evaluating,
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
      status: TaskStatus.resolved,
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
      status: TaskStatus.rejected,
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
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
      status: TaskStatus.testing,
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
        isActivate: true,
        userName: 's.elmaghraoui',
      },
      createdTime: '11-05-2024',
      affectedTo: {
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
        userName: 's.elmaghraoui',
      },

      referenceTicket: '',
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
          isActivate: true,
          userName: 's.elmaghraoui',
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
          isActivate: true,
          userName: 's.elmaghraoui',
        },
      ],
      isFavorit: true,
    },
  ];
  TaskStatus = TaskStatus;
  Activity = Activity;
  Role = Role;
  roleUser = 'helpDesk';
  // roleUser = 'user';
  // roleUser = 'admin';

  recentActivities: RecentActivity[] = [
    {
      id: 1,
      idTicket: 1,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.changedStatus,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 2,
      idTicket: 2,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.createdTicket,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 3,
      idTicket: 3,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.sharedTicket,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 4,
      idTicket: 4,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.affectedTicket,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
    {
      id: 5,
      idTicket: 5,
      referenceTicket: 'RFZ-5528',
      ativity: Activity.addComment,
      author: {
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
        userName: 's.elmaghraoui',
        isActivate: true,
        location: 'Casablnca , Sidi Maarouf',
        joinDate: '15-08-2023',
      },
      time: '12:05PM',
    },
  ];
  departments: Department[] = [
    {
      id: 1,
      label: 'Developpment',
      totalUsers: 28,
    },
    {
      id: 2,
      label: 'RH',
      totalUsers: 28,
    },
    {
      id: 3,
      label: 'Help Desk',
      totalUsers: 28,
    },
  ];

  helpDesk: IBadgeUser = {
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    firstName: 'Mohamed',
    lastName: 'El Maghraoui',
  };

  ngOnInit(): void {}

  toggleFavorits(idTicket?: number) {
    this.ticketList.forEach((ticket: Ticket) => {
      if (ticket.id === idTicket) ticket.isFavorit = !ticket.isFavorit;
    });
  }
}
