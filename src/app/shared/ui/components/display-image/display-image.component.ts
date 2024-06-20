import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.scss'],
})
export class DisplayImageComponent implements OnInit, OnChanges {
  @Input() docId?: number;
  @Input() css?: string;
  imageUrl: SafeUrl | string | ArrayBuffer | null | undefined;

  constructor(
    private documentService: DocumentService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    this.loadImage();
  }

  // Converts the base64 string to a data URL
  convertBase64ToDataURL(
    contentType: string,
    base64: string | ArrayBuffer
  ): string {
    return `data:${contentType};base64,${base64}`;
  }

  // Download Profil Photo
  loadImage() {
    if (this.docId != null) {
      this.documentService
        .downloadProfilPhoto(this.docId)
        .subscribe((response) => {
          this.imageUrl = this.convertBase64ToDataURL(
            response.contentType ?? '',
            response.data ?? ''
          );
        });
    }
  }
}
