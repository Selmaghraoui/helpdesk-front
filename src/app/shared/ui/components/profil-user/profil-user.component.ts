import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Department } from 'src/app/core/modeles/Department';
import { IUser } from 'src/app/core/modeles/IUser';
import { RecentActivityUser } from 'src/app/core/modeles/RecentActivity';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import { DocumentService } from 'src/app/core/services/document.service';

import { IUpdateUser, UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss'],
})
export class ProfilUserComponent implements OnInit {
  @Input() isProfil: boolean = true;
  @Input() user?: IUser;

  TaskStatus = TaskStatus;
  Role = Role;
  roles: string[] = [];
  isModalOpen = false;

  departments: Department[] = [];
  profilUserFormGroup!: FormGroup;
  passwordFormGroup!: FormGroup;
  recentActivities: RecentActivityUser[] = [];
  // = [
  //   {
  //     id: 1,
  //     idTicket: 1,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.changedStatus,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 2,
  //     idTicket: 2,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.createdTicket,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 3,
  //     idTicket: 3,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.sharedTicket,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 4,
  //     idTicket: 4,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.affectedTicket,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       isActivate: true,
  //       userName: 's.elmaghraoui',
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  //   {
  //     id: 5,
  //     idTicket: 5,
  //     referenceTicket: 'RFZ-5528',
  //     ativity: TypeActivity.addComment,
  //     author: {
  //       id: 1,
  //       referenceUser: 'SE-123456',
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //       email: 'soufiane.elmaghraoui@gmail.com',
  //       status: false,
  //       post: 'Front End Developer',
  //       department: 'Developpment',
  //       phoneNumber: '0635383046',
  //       userName: 's.elmaghraoui',
  //       isActivate: true,
  //       location: 'Casablnca , Sidi Maarouf',
  //       joinDate: '15-08-2023',
  //     },
  //     time: '12:05PM',
  //   },
  // ];

  constructor(
    private usersService: UsersService,
    private documentService: DocumentService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.user = this.usersService.getUser();
    this.roles = this.usersService.getRoles();

    this.getUserForm();
    this.loadImage();
  }

  //
  getUserForm() {
    this.profilUserFormGroup = new FormGroup({
      firstName: new FormControl(this.user?.firstName, Validators.required),
      lastName: new FormControl(this.user?.lastName, Validators.required),
      phoneNumber: new FormControl(this.user?.phoneNumber),
      departmentDto: new FormControl(this.user?.department.name),
      post: new FormControl(this.user?.post),
      location: new FormControl(this.user?.location),
      aboutMe: new FormControl(this.user?.aboutMe),
    });
    this.passwordFormGroup = new FormGroup({
      password: new FormControl('', Validators.required),
    });
  }

  //
  updateProfil() {
    if (this.user?.id) {
      const updateUser: IUpdateUser = {
        ...this.profilUserFormGroup.value,
        departmentDto: {
          name: this.profilUserFormGroup.get('departmentDto')?.value,
        },
      };

      this.usersService.updateUser(this.user?.id, updateUser).subscribe({
        next: (userUpdated: IUser) => {
          this.isModalOpen = false;
          this.user = userUpdated;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  // Modal
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  // desactivate account
  desactivateAccount() {
    if (this.user?.id)
      this.usersService.desactivateUser(this.user?.id).subscribe({
        next: (user: IUser) => {
          this.user = user;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
  }

  // change password
  checkValidators(formControlName: string): boolean {
    return (
      this.passwordFormGroup.controls?.[formControlName]?.invalid &&
      this.passwordFormGroup.controls?.[formControlName]?.touched
    );
  }
  changePassword() {
    this.usersService
      .updatePasswordUser(this.passwordFormGroup.value)
      .subscribe({
        next: () => {
          console.log('password changed');
        },
      });
  }

  // Upload image
  uploadFile(file: File) {
    console.log();

    if (this.user?.id) {
      // API logged in khassha tzid trad lina user kaml , id ma kaynch
      this.documentService.uploadProfilPhoto(file, this.user?.id).subscribe({
        next: () => {
          console.log('file uploaded .. ');
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
  }

  // url: string | ArrayBuffer | null | undefined = '';
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.imageUrl = event?.target?.result;
      };
      this.uploadFile(event.target?.files[0]);
    }
  }

  openFileInput() {
    document?.getElementById('imageInput')?.click();
  }

  // Download Profil
  imageUrl: SafeUrl | string | ArrayBuffer | null | undefined;
  loadImage() {
    if (this.user?.docId)
      this.documentService
        .downloadProfilPhoto(this.user.docId)
        .subscribe((response) => {
          const objectURL = URL.createObjectURL(response);
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
  }
}
