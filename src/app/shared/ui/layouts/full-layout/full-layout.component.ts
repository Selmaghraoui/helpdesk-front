import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  isBoard: boolean = false;
  constructor(private router: Router) {
    // router.subscribe((val: any) => {
    //   console.log('val', val);
    //   console.log('NavigationEnd', val.NavigationEnd);
    //   // console.log('val.NavigationEnd?.url', val.NavigationEnd?.url);
    //   if (val.NavigationEnd?.url == '/tickets-board') {
    //     console.log('this.isBoard', this.isBoard);
    //     this.isBoard = true;
    //   }
    // });
  }

  ngOnInit() {}
}
