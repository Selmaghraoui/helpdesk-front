import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/features/tickets-management/create-edit-ticket/create-edit-ticket.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/modeles/IUser';
import { TaskStatus } from 'src/app/core/modeles/TaskStatus';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  TaskStatus = TaskStatus;

  commentFormGroup!: FormGroup;
  previewImages: string[] = [];
  helpDeskList: IUser[] = [];
  helpDesk?: IUser;

  listComments: IComment[] = [];
  //  [
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Ismail',
  //       lastName: 'Meggouri',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         // {
  //         //   imageAlt:
  //         //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         // },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         // {
  //         //   imageAlt:
  //         //     'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         // },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 1,
  //     user: {
  //       image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //       firstName: 'Soufiane',
  //       lastName: 'El Maghraoui',
  //     },
  //     comment: {
  //       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima vero quia molestiae quidem veritatis amet fugiat iusto possimus! Eos a est molestias odio deserunt perspiciatis et repellendus illo quia!',
  //       images: [
  //         {
  //           imageAlt:
  //             'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  //         },
  //       ],
  //     },
  //   },
  // ];

  constructor() {}

  ngOnInit() {
    this.commentFormGroup = new FormGroup({
      text: new FormControl('', Validators.required),
      images: new FormArray([]),
    });
  }

  addComment(commentFormGroup: FormGroup) {}

  uploadFile() {}

  openFileInput() {
    document?.getElementById('imageInput')?.click();
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;

      // Validate for image types (optional)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!this.validateFileType(file)) {
          alert('Invalid file type. Please select images only.');
          continue;
        }
      }

      // Read and preview images
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImages.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  onDeleteImage(index: number) {
    this.previewImages.splice(index, 1);
  }

  validateFileType(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedTypes.includes(file.type);
  }
}
