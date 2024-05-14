import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-dropdown',
  templateUrl: './self-dropdown.component.html',
  styleUrls: ['./self-dropdown.component.scss'],
})
export class SelfDropdownComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.select();
  }

  select() {
    const optionMenu = document.querySelector('.select-menu');
    const selectBtn = optionMenu!.querySelector('.select-btn');
    const options = optionMenu!.querySelectorAll('.option');
    const sBtn_text = optionMenu!.querySelector('.sBtn-text');

    selectBtn!.addEventListener('click', () =>
      optionMenu!.classList.toggle('active')
    );

    options!.forEach((option) => {
      option.addEventListener('click', () => {
        const selectedOption = option!.querySelector('.option-text')!.innerHTML;
        sBtn_text!.innerHTML = selectedOption;
        optionMenu!.classList.remove('active');
      });
    });
  }
}
