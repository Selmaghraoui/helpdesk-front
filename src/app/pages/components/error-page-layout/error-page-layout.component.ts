import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page-layout',
  templateUrl: './error-page-layout.component.html',
  styleUrls: ['./error-page-layout.component.scss'],
})
export class ErrorPageLayoutComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  navigateTo() {
    this.route.navigateByUrl('dashboard');
  }
}
