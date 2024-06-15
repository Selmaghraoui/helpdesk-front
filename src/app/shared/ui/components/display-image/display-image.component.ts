import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DocumentDto, IUser } from 'src/app/core/modeles/IUser';
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

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.imageData && this.imageData?.data) {
    //   this.imageSrc = this.convertBase64ToDataURL(
    //     this.imageData?.contentType,
    //     this.imageData?.data
    //   );
    // }
  }

  ngOnInit() {
    this.loadImage();
  }

  // Converts the base64 string to a data URL
  // convertBase64ToDataURL(contentType: string, base64: string): string {
  //   return `data:${contentType};base64,${base64}`;
  // }

  // Download Profil Photo
  loadImage() {
    if (this.docId)
      this.documentService
        .downloadProfilPhoto(this.docId)
        .subscribe((response) => {
          const objectURL = URL.createObjectURL(response);
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
  }
}
