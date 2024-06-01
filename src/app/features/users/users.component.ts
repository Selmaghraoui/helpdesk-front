import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
interface User {
  id: number;
  name: string;
  deactivated: boolean;
}

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
  Role = Role;
  // roleUser = 'helpDesk';
  // roleUser = 'user';
  roleUser = 'admin';

  // Mock Data :
  listUsers: IUser[] = [
    {
      id: 1,
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
    },
    {
      id: 2,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ismail',
      lastName: 'Meggouri',
      email: 'ismail.meggouri@gmail.com',
      status: true,
      post: 'Back End Developer',
      department: 'Developpment',
      phoneNumber: '0635383046',
      isActivate: true,
      userName: 's.elmaghraoui',
    },
    {
      id: 3,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Hala',
      lastName: 'El Gallouli',
      email: 'hala.algallouli@gmail.com',
      status: true,
      post: 'RH',
      department: 'Ressource Humain',
      phoneNumber: '0635383046',
      isActivate: false,
      userName: 'i.megouri',
    },
    {
      id: 4,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Edouard Kamavinga ',
      lastName: 'El Gallouli',
      email: 'hala.algallouli@gmail.com',
      status: true,
      post: 'RH',
      department: 'Ressource Humain',
      phoneNumber: '0635383046',
      isActivate: true,
      userName: 'm.elmaghraoui',
    },
  ];
  users: User[] = [
    { id: 1, name: 'John Doe', deactivated: false },
    { id: 2, name: 'Jane Smith', deactivated: true },
    // ... other users
  ];

  constructor() {}

  ngOnInit() {}

  editUser(idUser: number) {}
}
