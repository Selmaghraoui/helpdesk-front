/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEditTicketComponent } from './create-edit-ticket.component';

describe('AddEditTicketComponent', () => {
  let component: AddEditTicketComponent;
  let fixture: ComponentFixture<AddEditTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTicketComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
