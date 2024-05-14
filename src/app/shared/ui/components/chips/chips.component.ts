import { Component, OnInit } from '@angular/core';
import { IChipsItems } from 'src/app/core/modeles/IChipsItems';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  listItemsChipsInitial?: IChipsItems[] = [
    {
      id: 1,
      label: 'Title',
      value: '',
    },
    {
      id: 2,
      label: 'Type',
      value: '',
    },
    {
      id: 3,
      label: 'Priority',
      value: '',
    },
    {
      id: 4,
      label: 'Created By',
      value: '',
    },
    {
      id: 5,
      label: 'Status',
      value: '',
    },
  ];

  listItemsChipsSelected?: IChipsItems[] = [];
  listItemsChipsAvailable?: IChipsItems[] = [];
  constructor() {}

  ngOnInit() {
    this.listItemsChipsAvailable = this.listItemsChipsInitial;
  }

  createChips(chip: IChipsItems, indexChip: number) {
    this.listItemsChipsSelected?.push(chip);
    this.listItemsChipsAvailable?.splice(indexChip, 1);
  }

  deleteChips(chipSelected: IChipsItems, index: number) {
    this.listItemsChipsSelected?.splice(index, 1);
    this.listItemsChipsAvailable?.splice(chipSelected.id - 1, 0, chipSelected);
  }
}
