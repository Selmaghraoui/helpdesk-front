import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  listElementSidebar = [
    {
      routerLink: 'dashboard',
      label: 'Dashboard',
    },
    {
      routerLink: 'tickets',
      label: 'Tickets Management',
    },
    {
      routerLink: 'users',
      label: 'Users',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
