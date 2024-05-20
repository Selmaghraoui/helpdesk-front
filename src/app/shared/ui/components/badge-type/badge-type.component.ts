import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-type',
  templateUrl: './badge-type.component.html',
  styleUrls: ['./badge-type.component.scss'],
})
export class BadgeTypeComponent implements OnInit {
  @Input() type?: string;
  constructor() {}

  ngOnInit() {}
}
