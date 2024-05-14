import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: false,
      lien: '/users',
    },
  ];

  // Mock Data :
  listUsers: IUser[] = [
    {
      id: 1,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Soufiane',
      lastName: 'El Maghraoui',
      email: 'soufiane.elmaghraoui@gmail.com',
      status: false,
      position: 'Front End Developer',
    },
    {
      id: 2,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ismail',
      lastName: 'Meggouri',
      email: 'ismail.meggouri@gmail.com',
      status: true,
      position: 'Back End Developer',
    },
  ];

  constructor() {}

  ngOnInit() {}

  editUser(idUser: number) {}
}
