/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypesTicketComponent } from './types-ticket.component';

describe('TypesTicketComponent', () => {
  let component: TypesTicketComponent;
  let fixture: ComponentFixture<TypesTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
