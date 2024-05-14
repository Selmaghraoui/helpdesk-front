import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/modeles/IBreadcrumb';
import { TypesTicket } from 'src/app/core/modeles/TypesTicket';

@Component({
  selector: 'app-types-ticket',
  templateUrl: './types-ticket.component.html',
  styleUrls: ['./types-ticket.component.scss'],
})
export class TypesTicketComponent implements OnInit {
  breadCrumb: IBreadcrumb[] = [
    {
      title: 'Tickets',
      isLien: true,
      lien: '/tickets',
    },
    {
      title: 'Create ticket',
      isLien: false,
    },
  ];

  typesTicket?: TypesTicket[] = [
    {
      id: 1,
      label: 'Application',
      lien: '/application',
      description: 'Create ticket to install a new application or ',
    },
    {
      id: 2,
      label: 'Incedent',
      lien: '/incedent',
      description: 'Create ticket to fix a problem.',
    },
    {
      id: 3,
      label: 'Achat',
      lien: '/achat',
      description:
        'Create a ticket to request or to change new equipment and device.',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  selectType(type: string) {
    this.router.navigateByUrl('/tickets/create-ticket' + type);
  }
}
