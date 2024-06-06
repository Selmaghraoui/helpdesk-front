import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IUser } from 'src/app/core/modeles/IUser';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { Ticket } from 'src/app/core/modeles/Ticket';
import { Activity, RecentActivity } from '../dashboard/dashboard.component';

export interface Department {
  id: number;
  label: string;
  totalUsers: number;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  TaskStatus = TaskStatus;
  Activity = Activity;
  Role = Role;
  roleUser = 'helpDesk';
  // roleUser = 'user';
  // roleUser = 'admin';
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
    aboutMe:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis, perferendis similique in quos sapiente facilis rerum veritatis hic minus dolore architecto adipisci quibusdam ducimus est suscipit doloribus sint deleniti.',
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
        department: '',
        phoneNumber: '',
        isActivate: true,
        userName: 's.elmaghraoui',
      },
    ],
  };
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
