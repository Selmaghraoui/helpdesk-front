import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { Role } from 'src/app/core/modeles/Role';
import { TaskPriority } from 'src/app/core/modeles/TaskPriority';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;
  Role = Role;
  // roleUser = 'helpDesk';
  // roleUser = 'user';
  roleUser = 'admin';

  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: false,
      lien: '/tickets',
    },
  ];
  // mock data
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
      status: TaskStatus.done,
      createdBy: {
        id: 1,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
        email: 'soufiane.elmaghraoui@gmail.com',
        status: false,
        position: 'Front End Developer',
      },
      createdTime: '11-05-2024',
      affectedTo: {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
        email: 'ismail.meggouri@gmail.com',
        status: true,
        position: 'Back End Developer',
      },
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
        position: 'Front End Developer',
      },
      createdTime: '11-05-2024',
      affectedTo: {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
        email: 'ismail.meggouri@gmail.com',
        status: true,
        position: 'Back End Developer',
      },
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
      status: TaskStatus.todo,
      createdBy: {
        id: 2,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Ismail',
        lastName: 'Meggouri',
        email: 'ismail.meggouri@gmail.com',
        status: true,
        position: 'Back End Developer',
      },
      createdTime: '11-05-2024',
      affectedTo: {
        id: 1,
        image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        firstName: 'Soufiane',
        lastName: 'El Maghraoui',
        email: 'soufiane.elmaghraoui@gmail.com',
        status: false,
        position: 'Front End Developer',
      },
    },
  ];

  constructor(private TicketService: TicketService) {}

  ngOnInit() {
    this.TicketService.getTickets().subscribe({
      next: (value) => {
        console.log('value', value);
      },
      error: (error: HttpErrorResponse) => {
        error.message;
      },
    });
  }
}
