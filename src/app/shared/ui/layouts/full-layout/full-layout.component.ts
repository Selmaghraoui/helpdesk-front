import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  isBoard: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onUrlChange(event.url);
      }
    });
  }

  // Function to handle URL changes
  onUrlChange(url: string): void {
    if (url == '/tickets-board') this.isBoard = true;
    else this.isBoard = false;
  }
}
