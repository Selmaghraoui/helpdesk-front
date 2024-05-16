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
      department: 'Developpment',
      phoneNUmber: '',
    },
    {
      id: 2,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Ismail',
      lastName: 'Meggouri',
      email: 'ismail.meggouri@gmail.com',
      status: true,
      position: 'Back End Developer',
      department: 'Developpment',
      phoneNUmber: '',
    },
    {
      id: 3,
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      firstName: 'Hala',
      lastName: 'El Gallouli',
      email: 'hala.algallouli@gmail.com',
      status: true,
      position: 'RH',
      department: 'Ressource Humain',
      phoneNUmber: '',
    },
  ];

  constructor() {}

  ngOnInit() {}

  editUser(idUser: number) {}
}
