import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Department } from 'src/app/core/modeles/Department';
import { IUser } from 'src/app/core/modeles/IUser';
import { RecentActivityUser } from 'src/app/core/modeles/RecentActivity';
import { Role } from 'src/app/core/modeles/Role';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';
import {
  CommentResDto,
  CommentService,
} from 'src/app/core/services/comment.service';
import {
  DocumentService,
  IDocument,
} from 'src/app/core/services/document.service';

import { IUpdateUser, UsersService } from 'src/app/core/services/users.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss'],
})
export class ProfilUserComponent implements OnInit, OnChanges {
  @Input() isProfil: boolean = true;
  @Input() user?: IUser;

  TaskStatus = TaskStatus;
  Role = Role;
  roles: string[] = [];

  departments: Department[] = [];
  isModalOpen = false;

  profilUserFormGroup!: FormGroup;
  passwordFormGroup!: FormGroup;
  recentActivities: CommentResDto[] = [];
  imageUrl: SafeUrl | string | ArrayBuffer | null | undefined;

  constructor(
    private usersService: UsersService,
    private documentService: DocumentService,
    private commentService: CommentService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.user = changes['user'].currentValue;
    this.getUserForm();

    this.getActivities();
  }

  ngOnInit() {
    if (this.isProfil) {
      this.getUser();
    }
    this.getRoles();
    this.getDepartments();
  }

  getUser(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  getRoles(): void {
    const rolesData = localStorage.getItem('roles');
    this.roles = rolesData ? JSON.parse(rolesData) : null;
  }

  getDepartments(): void {
    const departmentsData = localStorage.getItem('departments');
    this.departments = departmentsData ? JSON.parse(departmentsData) : null;
  }

  //
  getActivities() {
    if (this.user?.username != undefined) {
      this.commentService.getCommentsForUser(this.user?.username).subscribe({
        next: (activities: CommentResDto[]) => {
          this.recentActivities = activities;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    }
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
    this.passwordFormGroup = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: passwordMatchValidator() }
    );
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
    if (this.user?.id) {
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

  // Download Profil Photo
  // loadImage() {
  //   if (this.user?.docId)
  //     this.documentService
  //       .downloadProfilPhoto(this.user.docId)
  //       .subscribe((response: IDocument) => {
  //         // const objectURL = URL.createObjectURL(response.data);
  //         // this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //       });
  // }
}
