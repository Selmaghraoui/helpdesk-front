import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IUser } from 'src/app/core/modeles/IUser';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';

export interface Department {
  id: number;
  label: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  TaskStatus = TaskStatus;

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
    userName: 's.elmaghraoui',
    isActivate: true,
    location: 'Casablnca , Sidi Maarouf',
    joinDate: '15-08-2023',
  };
  ticket: Ticket = {
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
  profilFormGroup!: FormGroup;
  constructor() {
    this.profilFormGroup = new FormGroup({
      referenceUser: new FormControl(this.user.referenceUser),
      email: new FormControl(this.user.email),
      userName: new FormControl(this.user.userName),
      phoneNumber: new FormControl(this.user.phoneNumber),
      department: new FormControl(this.user.department),
      post: new FormControl(this.user.post),
    });
    this.profilFormGroup.controls['referenceUser'].disable();
    this.profilFormGroup.controls['email'].disable();
    this.profilFormGroup.controls['userName'].disable();
  }

  ngOnInit() {
    console.log('log :: ', this.profilFormGroup);
  }
}
