import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DocumentDto, IUser } from 'src/app/core/modeles/IUser';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.scss'],
})
export class DisplayImageComponent implements OnInit, OnChanges {
  @Input() imageData?: DocumentDto;
  @Input() css?: string;
  imageSrc: string | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.imageData && this.imageData?.data) {
      this.imageSrc = this.convertBase64ToDataURL(
        this.imageData?.contentType,
        this.imageData?.data
      );
    }
  }

  ngOnInit() {}

  // Converts the base64 string to a data URL
  convertBase64ToDataURL(contentType: string, base64: string): string {
    return `data:${contentType};base64,${base64}`;
  }
}
