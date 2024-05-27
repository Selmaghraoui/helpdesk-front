import { Component, Input, OnInit } from '@angular/core';
import { TypesTicket } from 'src/app/core/modeles/TypesTicket';

@Component({
  selector: 'app-badge-type',
  templateUrl: './badge-type.component.html',
  styleUrls: ['./badge-type.component.scss'],
})
export class BadgeTypeComponent implements OnInit {
  @Input() type?: TypesTicket;
  constructor() {}

  ngOnInit() {}
}
