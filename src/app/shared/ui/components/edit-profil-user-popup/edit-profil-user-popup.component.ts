import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profil-user-popup',
  templateUrl: './edit-profil-user-popup.component.html',
  styleUrls: ['./edit-profil-user-popup.component.scss'],
})
export class EditProfilUserPopupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
