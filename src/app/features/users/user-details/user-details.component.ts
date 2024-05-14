import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Users',
      isLien: true,
      lien: '/users',
    },
    {
      title: 'Details',
      isLien: false,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
