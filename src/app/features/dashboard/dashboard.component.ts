// import {
//   CdkDragDrop,
//   moveItemInArray,
//   transferArrayItem,
// } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  TaskStatus = TaskStatus;
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
      },
      createdTime: '11-05-2024',
      affectedTo: [
        // {
        //   id: 2,
        //   image:
        //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        //   firstName: 'Ismail',
        //   lastName: 'Meggouri',
        //   email: 'ismail.meggouri@gmail.com',
        //   status: true,
        //   post: 'Back End Developer',
        //   department: '',
        //   phoneNumber: '',
        //   isActivate: true,
        // },
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
          isActivate: true,
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
          isActivate: true,
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
        },
      ],
    },
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
      },
      createdTime: '11-05-2024',
      affectedTo: [
        // {
        //   id: 2,
        //   image:
        //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        //   firstName: 'Ismail',
        //   lastName: 'Meggouri',
        //   email: 'ismail.meggouri@gmail.com',
        //   status: true,
        //   post: 'Back End Developer',
        //   department: '',
        //   phoneNumber: '',
        //   isActivate: true,
        // },
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
          isActivate: true,
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
          isActivate: true,
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
        isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
        isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
          isActivate: true,
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
      status: TaskStatus.closed,
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
          isActivate: true,
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
          isActivate: true,
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
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  filterTicket(status: string) {
    return this.ticketList.filter((m) => m.status == status);
  }
}
