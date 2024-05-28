import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';

@Component({
  selector: 'app-tickets-board',
  templateUrl: './tickets-board.component.html',
  styleUrls: ['./tickets-board.component.scss'],
})
export class TicketsBoardComponent implements OnInit {
  TaskStatus = TaskStatus;
  ticketList: Ticket[] = [
    {
      id: 1,
      title: 'Problem dans le demarrage de machine virtuelle.',
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
      },
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
      title: 'Ticket 2 ',
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
      },
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
      title: 'Ticket 3 ',
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
      affectedTo:
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
    // -----------------------------------------------
    // -----------------------------------------------
    // -----------------------------------------------
    // -----------------------------------------------
    // -----------------------------------------------
    // -----------------------------------------------
    {
      id: 31,
      // todo : add ... 3point apres un nombre de lettres
      title: 'Ticket 31',
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
      },
    },
    {
      id: 4,
      // todo : add ... 3point apres un nombre de lettres
      title: 'Ticket 4 ',
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
      },
    },
    {
      id: 5,
      title: 'Ticket 5',
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
      },
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
      id: 6,
      title: 'Ticket 6',
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
      },
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
      id: 7,
      title: 'Ticket 7',
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
      },
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
      id: 8,
      title: 'Ticket 8',
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
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [],
    },
    {
      id: 9,
      title: 'Ticket 9',
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
      },
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
      id: 12,
      title: 'Ticket Brahim',
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
      },
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [],
    },
    {
      id: 11,
      title: 'fouzia',
      type: {
        id: 1,
        label: 'Application',
        lien: '',
        description: '',
      },
      priority: 'Hight',
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
      },
      createdTime: '11-05-2024',
      reference: '',
      description:
        'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      sharedWith: [],
      isResolved: true,
    },
    {
      id: 10,
      title: 'Ticket soufiane',
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
      },
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
      isResolved: false,
    },
  ];
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];
  Role = Role;
  // roleUser = 'helpDesk';
  // roleUser = 'user';
  roleUser = 'admin';
  itemDragged?: Ticket;
  itemList_ids: string[] = ['cdk-drop-list-5'];
  constructor(private router: Router) {}

  filterTicket(status: string) {
    return this.ticketList.filter((m) => m.status == status);
  }

  ticketListOpen: Ticket[] = this.filterTicket(TaskStatus.open);
  ticketListCanceled: Ticket[] = this.filterTicket(TaskStatus.canceled);
  ticketListEvaluating: Ticket[] = this.filterTicket(TaskStatus.evaluating);
  ticketListInProgress: Ticket[] = this.filterTicket(TaskStatus.inProgress);
  ticketListTesting: Ticket[] = this.filterTicket(TaskStatus.testing);
  ticketListRejected: Ticket[] = this.filterTicket(TaskStatus.rejected);
  ticketListResolved: Ticket[] = this.filterTicket(TaskStatus.resolved);

  ngOnInit() {}

  drop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // try to use switch case ...
  mouseEnter(item: Ticket) {
    console.log('item?.isResolved', item?.isResolved);

    if (item.isResolved === false) {
      this.itemList_ids = ['cdk-drop-list-3', 'cdk-drop-list-4'];
    }
    if (item.isResolved === true) {
      this.itemList_ids = ['cdk-drop-list-5', 'cdk-drop-list-4'];
    }
    if (item.isResolved === undefined) {
      this.itemList_ids = ['cdk-drop-list-4'];
    }

    console.log('this.itemList_ids : ', this.itemList_ids);
  }

  // cdkDragMoved(item: Ticket) {
  //   console.log('item?.isResolved', item?.isResolved);

  //   if (item.isResolved === true) {
  //     this.itemList_ids = ['cdk-drop-list-6', 'cdk-drop-list-5'];
  //   } else if (item.isResolved === false) {
  //     this.itemList_ids = ['cdk-drop-list-4', 'cdk-drop-list-5'];
  //   }
  // }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  resolvedTicket(idTicket: number, isResolved: boolean) {
    const index = this.ticketListTesting.findIndex(
      (ticket) => ticket.id === idTicket
    );

    this.ticketListTesting[index].isResolved = isResolved;
  }
}
